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

export default function MarriageCertificateForm() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const fileRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [form, setForm] = useState({
    financial_year: "",
    marriage_date: "",
    marriage_place: "",
    husband_name: "",
    husband_aadhaar: "",
    wife_name: "",
    wife_aadhaar: "",
    applicant_name_en: "",
    applicant_name_mr: "",
    whatsapp: "",
    email: "",
    utr_number: "",
    payment_file: null,
  });

  // Handle input
  function handleChange(e) {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setForm((p) => ({ ...p, [name]: file }));
      if (file.type.startsWith("image/")) {
        setPreviewUrl(URL.createObjectURL(file));
      }
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  }

  // Validation per step
  function nextStep() {
    if (step === 1) {
      if (!form.financial_year || !form.marriage_date || !form.marriage_place) {
        return toast.error("कृपया Step 1 मधील सर्व माहिती भरा");
      }
    }

    if (step === 2) {
      if (!form.husband_name || !form.wife_name) {
        return toast.error("कृपया Step 2: पती / पत्नीची माहिती भरा");
      }
    }

    if (step === 3) {
      if (!form.whatsapp || !form.applicant_name_mr) {
        return toast.error("कृपया Step 3: अर्जदाराची माहिती भरा");
      }
    }

    if (step === 4) {
      if (!form.utr_number || !form.payment_file) {
        return toast.error("कृपया Step 4: UTR व स्क्रीनशॉट अपलोड करा");
      }
    }

    setStep((s) => s + 1);
  }

  function prevStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function submitForm(e) {
    e.preventDefault();

    toast.success("Marriage Certificate Application Submitted (UI Only)");
    setOpen(false);
    setStep(1);
  }

  const steps = ["Marriage Info", "Husband/Wife", "Applicant", "Payment", "Review"];

  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Marriage Certificate (विवाह प्रमाणपत्र)"
        subtitle="Apply online for marriage certificate"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Marriage Certificate", href: null },
        ]}
      />

      <div className="container py-12 grid lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Service Overview</h2>
              <p className="text-gray-600">
                Apply online for a legal marriage certificate. Processing time: 7 working days.
              </p>
            </div>
          </Card>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="space-y-6">
          <Card>
            <div className="p-6 space-y-3 text-center">
              <Button className="w-full" onClick={() => setOpen(true)}>
                Apply Online
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = "/documents/marriage_certificate_form.pdf";
                  a.download = "Marriage_Certificate_Form.pdf";
                  a.click();
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

      {/* ★ WIZARD MODAL ★ */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Marriage Certificate Application"
        size="xl"
      >
        {/* Step Indicator */}
        <div className="flex justify-between mb-6">
          {steps.map((label, i) => (
            <div
              key={i}
              className={`flex-1 text-center mx-1 py-2 rounded text-sm font-medium 
                ${
                  step === i + 1
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-500"
                }`}
            >
              {i + 1}. {label}
            </div>
          ))}
        </div>

        {/* FORM */}
        <form onSubmit={submitForm} className="space-y-6">

          {/* STEP 1: Marriage Info */}
          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-4">
              <InputBlock label="आर्थिक वर्ष *" name="financial_year" onChange={handleChange} />
              <InputBlock label="विवाह दिनांक *" type="date" name="marriage_date" onChange={handleChange} />
              <InputBlock label="विवाह ठिकाण *" name="marriage_place" onChange={handleChange} />
            </div>
          )}

          {/* STEP 2: Husband / Wife details */}
          {step === 2 && (
            <div className="grid md:grid-cols-2 gap-4">
              <InputBlock label="पतीचे नाव *" name="husband_name" onChange={handleChange} />
              <InputBlock label="पतीचा आधार क्रमांक" name="husband_aadhaar" onChange={handleChange} />
              <InputBlock label="पत्नीचे नाव *" name="wife_name" onChange={handleChange} />
              <InputBlock label="पत्नीचा आधार क्रमांक" name="wife_aadhaar" onChange={handleChange} />
            </div>
          )}

          {/* STEP 3: Applicant */}
          {step === 3 && (
            <div className="grid md:grid-cols-2 gap-4">
              <InputBlock label="अर्जदाराचे नाव (इंग्रजी)" name="applicant_name_en" onChange={handleChange} />
              <InputBlock label="अर्जदाराचे नाव (देवनागरी) *" name="applicant_name_mr" onChange={handleChange} />
              <InputBlock label="व्हाट्सअप क्रमांक *" name="whatsapp" onChange={handleChange} />
              <InputBlock label="ई मेल आय डी" name="email" onChange={handleChange} />
            </div>
          )}

          {/* STEP 4: Payment */}
          {step === 4 && (
            <div className="space-y-4">
              <InputBlock label="UTR Number *" name="utr_number" onChange={handleChange} />

              <div>
                <label className="block text-sm mb-1 font-medium">
                  पेमेंट स्क्रीनशॉट *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="payment_file"
                  ref={fileRef}
                  onChange={handleChange}
                />

                {previewUrl && (
                  <img src={previewUrl} className="max-h-40 mt-3 rounded shadow" />
                )}
              </div>
            </div>
          )}

          {/* STEP 5: Review */}
          {step === 5 && (
            <div className="space-y-2 text-sm">
              <p><strong>आर्थिक वर्ष:</strong> {form.financial_year}</p>
              <p><strong>विवाह दिनांक:</strong> {form.marriage_date}</p>
              <p><strong>विवाह ठिकाण:</strong> {form.marriage_place}</p>
              <p><strong>पती:</strong> {form.husband_name}</p>
              <p><strong>पत्नी:</strong> {form.wife_name}</p>
              <p><strong>अर्जदार:</strong> {form.applicant_name_mr}</p>
              <p><strong>UTR:</strong> {form.utr_number}</p>
              {previewUrl && (
                <img src={previewUrl} className="max-h-40 mt-2 rounded shadow" />
              )}
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" type="button" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <span />
            )}

            {step < 5 ? (
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
