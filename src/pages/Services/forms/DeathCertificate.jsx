import React, { useState, useRef } from "react";
import PageHeader from "../../../components/common/PageHeader";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import { toast } from "react-toastify";

// Reusable Input Block
function InputBlock({ label, name, type = "text", onChange }) {
  return (
    <div>
      <label className="block text-sm mb-1 font-medium">{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200"
      />
    </div>
  );
}

export default function DeathCertificateForm() {
  const [showForm, setShowForm] = useState(false);
  const [step, setStep] = useState(1);
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [form, setForm] = useState({
    financial_year: "",
    deceased_name: "",
    aadhaar_number: "",
    address: "",
    death_date: "",
    death_time: "",
    death_reason: "",
    applicant_name_en: "",
    applicant_name_mr: "",
    whatsapp: "",
    email: "",
    aadhaar_again: "",
    payment_option: "UPI",
    utr_number: "",
    payment_file: null,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setForm((p) => ({ ...p, [name]: file }));
      if (file.type.startsWith("image/")) setPreviewUrl(URL.createObjectURL(file));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  }

  // NEXT STEP VALIDATION
  function nextStep() {
    if (step === 1) {
      if (!form.financial_year || !form.deceased_name || !form.death_date) {
        return toast.error("Step 1: कृपया आवश्यक माहिती भरा");
      }
    }
    if (step === 2) {
      if (!form.applicant_name_mr || !form.whatsapp) {
        return toast.error("Step 2: कृपया अर्जदाराची माहिती भरा");
      }
    }
    if (step === 3) {
      if (!form.payment_file) {
        return toast.error("Step 3: कृपया पेमेंट स्क्रीनशॉट अपलोड करा");
      }
    }
    setStep((s) => s + 1);
  }

  function prevStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Application submitted (UI only)");
    setShowForm(false);
    setStep(1);
  }

  const steps = ["Deceased", "Applicant", "Payment", "Review"];

  return (
    <>
      {/* HEADER */}
      <PageHeader
        title="Death Certificate (मृत्यू प्रमाणपत्र)"
        subtitle="Apply online for official death certificate"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Death Certificate", href: null },
        ]}
      />

      {/* PAGE CONTENT */}
      <div className="container py-12 grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Service Overview</h2>
              <p className="text-gray-600">
                Apply online for a death certificate. Processing time: 7 working days.
              </p>
            </div>
          </Card>
        </div>

        {/* RIGHT SIDE — ACTIONS */}
        <div className="space-y-6">
          <Card>
            <div className="p-6 space-y-3 text-center">
              <Button className="w-full" onClick={() => setShowForm(true)}>
                Apply Online
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/documents/death_certificate_form.pdf";
                  link.download = "Death_Certificate_Form.pdf";
                  link.click();
                }}
              >
                Download Form
              </Button>

              <Button variant="ghost" className="w-full">
                Check Status
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* WIZARD MODAL */}
      <Modal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Death Certificate Application"
        size="xl"
      >
        {/* STEP HEADER */}
        <div className="flex justify-between mb-6">
          {steps.map((label, idx) => (
            <div
              key={idx}
              className={`flex-1 mx-1 text-center py-2 rounded text-sm font-medium
                ${
                  step === idx + 1
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-500"
                }
              `}
            >
              {idx + 1}. {label}
            </div>
          ))}
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* STEP 1 */}
          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-4">
              <InputBlock label="आर्थिक वर्ष *" name="financial_year" onChange={handleChange} />
              <InputBlock label="मृत व्यक्तीचे नाव *" name="deceased_name" onChange={handleChange} />
              <InputBlock label="आधार क्रमांक" name="aadhaar_number" onChange={handleChange} />
              <InputBlock label="पत्ता" name="address" onChange={handleChange} />
              <InputBlock label="मृत्यु दिनांक *" type="date" name="death_date" onChange={handleChange} />
              <InputBlock label="मृत्यु वेळ" type="time" name="death_time" onChange={handleChange} />
              <InputBlock label="मृत्यु कारण" name="death_reason" onChange={handleChange} />
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="grid md:grid-cols-2 gap-4">
              <InputBlock label="अर्जदाराचे नाव (इंग्रजी)" name="applicant_name_en" onChange={handleChange} />
              <InputBlock label="अर्जदाराचे नाव (देवनागरी) *" name="applicant_name_mr" onChange={handleChange} />
              <InputBlock label="व्हाट्सअप क्रमांक *" name="whatsapp" onChange={handleChange} />
              <InputBlock label="ईमेल" name="email" type="email" onChange={handleChange} />
              <InputBlock label="आधार क्रमांक (पुन्हा)" name="aadhaar_again" onChange={handleChange} />
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <label className="font-medium text-sm">Payment Option</label>
              <div className="flex gap-5">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment_option"
                    value="UPI"
                    checked={form.payment_option === "UPI"}
                    onChange={handleChange}
                  />
                  UPI
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment_option"
                    value="NetBanking"
                    checked={form.payment_option === "NetBanking"}
                    onChange={handleChange}
                  />
                  NetBanking
                </label>
              </div>

              <InputBlock label="UTR Number (optional)" name="utr_number" onChange={handleChange} />

              <div>
                <label className="block mb-2">पेमेंट स्क्रीनशॉट *</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  name="payment_file"
                  onChange={handleChange}
                  required
                />

                {previewUrl && (
                  <img src={previewUrl} className="max-h-40 mt-3 rounded shadow" alt="preview" />
                )}
              </div>
            </div>
          )}

          {/* STEP 4 — REVIEW */}
          {step === 4 && (
            <div className="space-y-2 text-sm">
              <div><strong>Year:</strong> {form.financial_year}</div>
              <div><strong>Name:</strong> {form.deceased_name}</div>
              <div><strong>Applicant:</strong> {form.applicant_name_mr}</div>
              <div><strong>WhatsApp:</strong> {form.whatsapp}</div>
              <div><strong>Payment:</strong> {form.payment_option}</div>

              {previewUrl && (
                <img src={previewUrl} className="max-h-40 rounded mt-2" alt="payment" />
              )}
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex justify-between pt-4">
            {step > 1 ? (
              <Button variant="outline" type="button" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <span></span>
            )}

            {step < 4 ? (
              <Button type="button" onClick={nextStep}>
                Next →
              </Button>
            ) : (
              <Button type="submit">Submit Application</Button>
            )}
          </div>
        </form>
      </Modal>
    </>
  );
}
