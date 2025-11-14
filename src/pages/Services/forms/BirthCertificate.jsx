
// src/pages/Services/forms/BirthCertificate.jsx
import React, { useState, useRef } from "react";
import PageHeader from "../../../components/common/PageHeader";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import { toast } from "react-toastify";

// Reusable field
function InputBlock({ label, name, type = "text", onChange }) {
  return (
    <div>
      <label className="block text-sm mb-1 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200"
      />
    </div>
  );
}

export default function BirthCertificateForm() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const steps = [
    "Child Details",
    "Parents Info",
    "Applicant Info",
    "Payment",
    "Review",
  ];

  const [form, setForm] = useState({
    financial_year: "",
    child_name: "",
    birth_date: "",
    birth_time: "",
    father_name: "",
    mother_name: "",
    applicant_name_en: "",
    applicant_name_mr: "",
    whatsapp: "",
    email: "",
    address: "",
    utr_number: "",
    payment_file: null,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setForm((p) => ({ ...p, [name]: file }));
      if (file.type.startsWith("image/"))
        setPreview(URL.createObjectURL(file));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  }

  // STEP VALIDATIONS
  function nextStep() {
    if (step === 1) {
      if (!form.financial_year || !form.child_name || !form.birth_date) {
        return toast.error("कृपया बालकाची मूलभूत माहिती भरा");
      }
    }
    if (step === 2) {
      if (!form.mother_name) {
        return toast.error("आईचे नाव भरणे आवश्यक");
      }
    }
    if (step === 3) {
      if (!form.applicant_name_mr || !form.whatsapp) {
        return toast.error("अर्जदाराची माहिती भरा");
      }
    }
    if (step === 4) {
      if (!form.payment_file) {
        return toast.error("पेमेंट स्क्रीनशॉट अपलोड करा");
      }
    }

    setStep((s) => s + 1);
  }

  function prevStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Birth Certificate Application Submitted (UI Demo)");
    setOpen(false);
    setStep(1);
  }

  return (
    <>
      <PageHeader
        title="Birth Certificate (जन्म प्रमाणपत्र)"
        subtitle="Apply online for official birth certificate"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Birth Certificate", href: null },
        ]}
      />

      <div className="container py-12 grid lg:grid-cols-3 gap-8">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Service Overview</h2>
              <p className="text-gray-600">
                Apply online for a birth certificate. Expected processing: 7 working days.
              </p>
            </div>
          </Card>
        </div>

        {/* ACTION BUTTONS */}
        <div className="space-y-6">
          <Card>
            <div className="p-6 text-center space-y-3">
              <Button className="w-full" onClick={() => setOpen(true)}>
                Apply Online
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/documents/birth_certificate_form.pdf";
                  link.download = "Birth_Certificate_Form.pdf";
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
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Birth Certificate Application"
        size="xl"
      >
        {/* STEPPER */}
        <div className="flex justify-between mb-6">
          {steps.map((label, i) => (
            <div
              key={i}
              className={`flex-1 mx-1 py-2 text-center text-sm rounded font-medium ${
                step === i + 1
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {i + 1}. {label}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* STEP 1 – CHILD DETAILS */}
          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-4">
              <InputBlock label="आर्थिक वर्ष *" name="financial_year" onChange={handleChange} />
              <InputBlock label="बालकाचे नाव *" name="child_name" onChange={handleChange} />
              <InputBlock label="जन्म दिनांक *" name="birth_date" type="date" onChange={handleChange} />
              <InputBlock label="जन्म वेळ" name="birth_time" type="time" onChange={handleChange} />
            </div>
          )}

          {/* STEP 2 – PARENTS INFO */}
          {step === 2 && (
            <div className="grid md:grid-cols-2 gap-4">
              <InputBlock label="वडिलांचे नाव" name="father_name" onChange={handleChange} />
              <InputBlock label="आईचे नाव *" name="mother_name" onChange={handleChange} />
            </div>
          )}

          {/* STEP 3 – APPLICANT INFO */}
          {step === 3 && (
            <div className="grid md:grid-cols-2 gap-4">
              <InputBlock label="अर्जदाराचे नाव (इंग्रजी)" name="applicant_name_en" onChange={handleChange} />
              <InputBlock label="अर्जदाराचे नाव (देवनागरी) *" name="applicant_name_mr" onChange={handleChange} />
              <InputBlock label="व्हाट्सअप क्रमांक *" name="whatsapp" onChange={handleChange} />
              <InputBlock label="ईमेल" name="email" type="email" onChange={handleChange} />

              <div className="md:col-span-2">
                <label className="block text-sm mb-1 font-medium">पत्ता *</label>
                <textarea
                  name="address"
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200"
                />
              </div>
            </div>
          )}

          {/* STEP 4 – PAYMENT */}
          {step === 4 && (
            <div className="space-y-4">
              <InputBlock label="UTR नंबर" name="utr_number" onChange={handleChange} />

              <div>
                <label className="block mb-2 text-sm font-medium">
                  पेमेंट स्क्रीनशॉट *
                </label>
                <input
                  type="file"
                  ref={fileRef}
                  name="payment_file"
                  accept="image/*"
                  required
                  onChange={handleChange}
                />
                {preview && (
                  <img
                    src={preview}
                    className="max-h-40 mt-3 rounded shadow"
                    alt="preview"
                  />
                )}
              </div>
            </div>
          )}

          {/* STEP 5 – REVIEW */}
          {step === 5 && (
            <div className="space-y-2 text-sm">
              <div><strong>बालक:</strong> {form.child_name}</div>
              <div><strong>जन्म दिनांक:</strong> {form.birth_date}</div>
              <div><strong>आईचे नाव:</strong> {form.mother_name}</div>
              <div><strong>अर्जदार:</strong> {form.applicant_name_mr}</div>
              <div><strong>WhatsApp:</strong> {form.whatsapp}</div>
              {preview && (
                <img src={preview} className="max-h-40 rounded mt-2" alt="payment" />
              )}
            </div>
          )}

          {/* WIZARD BUTTONS */}
          <div className="flex justify-between pt-4">
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
