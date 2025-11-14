import React, { useState, useRef } from "react";
import PageHeader from "../../../components/common/PageHeader";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import { toast } from "react-toastify";

// Reusable Input Component
function InputBlock({ label, name, type = "text", onChange }) {
  return (
    <div>
      <label className="block text-sm mb-1 font-medium">{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
      />
    </div>
  );
}

export default function Extract8AForm() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const fileRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [form, setForm] = useState({
    owner_name: "",
    village: "",
    whatsapp: "",
    email: "",
    taluka: "",
    district: "",
    account_number: "",
    payment_option: "UPI",
    payment_file: null,
    utr_number: "",
  });

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

  function nextStep() {
    if (step === 1) {
      if (!form.owner_name || !form.village) {
        return toast.error("कृपया Step 1 मधील माहिती भरा.");
      }
    }

    if (step === 2) {
      if (!form.taluka || !form.district || !form.account_number) {
        return toast.error("कृपया Step 2 मधील माहिती भरा.");
      }
    }

    if (step === 3) {
      if (!form.utr_number || !form.payment_file) {
        return toast.error("Step 3: UTR आणि स्क्रीनशॉट आवश्यक आहे.");
      }
    }

    setStep((s) => s + 1);
  }

  function prevStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function submitForm(e) {
    e.preventDefault();
    toast.success("8A Extract Application Submitted (UI Only)");
    setOpen(false);
    setStep(1);
  }

  const steps = ["Basic Info", "Location", "Payment", "Review"];

  return (
    <>
      <PageHeader
        title="8A Extract (जमिनीचा ८अ)"
        subtitle="Apply online for digitally signed land 8A extract"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "8A Extract", href: null },
        ]}
      />

      <div className="container py-12 grid lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Service Overview</h2>
              <p className="text-gray-600">
                Apply online for a Digital 8A Extract. Processing time: 7 working days.
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
                  a.href = "/documents/8A_extract_form.pdf";
                  a.download = "8A_Extract_Form.pdf";
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

      {/* WIZARD MODAL */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="8A Extract Application"
        size="xl"
      >
        {/* Step Indicator */}
        <div className="flex justify-between mb-6">
          {steps.map((label, i) => (
            <div
              key={i}
              className={`flex-1 text-center mx-1 py-2 rounded text-sm font-medium ${
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

          {/* STEP 1: BASIC INFO */}
          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-4">
              <InputBlock label="मालकांचे नाव *" name="owner_name" onChange={handleChange} />
              <InputBlock label="गाव *" name="village" onChange={handleChange} />
              <InputBlock label="व्हाट्सअप मोबाईल क्रमांक *" name="whatsapp" onChange={handleChange} />
              <InputBlock label="ई मेल आय डी" name="email" onChange={handleChange} />
            </div>
          )}

          {/* STEP 2: LOCATION DETAILS */}
          {step === 2 && (
            <div className="grid md:grid-cols-2 gap-4">
              <InputBlock label="तालुका *" name="taluka" onChange={handleChange} />
              <InputBlock label="जिल्हा *" name="district" onChange={handleChange} />
              <InputBlock label="खाता नंबर *" name="account_number" onChange={handleChange} />
            </div>
          )}

          {/* STEP 3: PAYMENT */}
          {step === 3 && (
            <div className="space-y-4">
              <label className="font-medium text-sm">Payment Option *</label>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="payment_option"
                  value="UPI"
                  checked={form.payment_option === "UPI"}
                  onChange={handleChange}
                />
                UPI
              </label>

              <InputBlock label="UTR Number *" name="utr_number" onChange={handleChange} />

              <div>
                <label className="block mb-2 text-sm font-medium">
                  पेमेंट स्क्रीनशॉट *
                </label>
                <input
                  type="file"
                  ref={fileRef}
                  name="payment_file"
                  onChange={handleChange}
                  accept="image/*"
                />
                {previewUrl && (
                  <img
                    src={previewUrl}
                    className="max-h-40 mt-3 rounded shadow"
                    alt="payment screenshot"
                  />
                )}
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW */}
          {step === 4 && (
            <div className="text-sm space-y-2">
              <p><strong>मालक:</strong> {form.owner_name}</p>
              <p><strong>गाव:</strong> {form.village}</p>
              <p><strong>तालुका:</strong> {form.taluka}</p>
              <p><strong>जिल्हा:</strong> {form.district}</p>
              <p><strong>खाता नंबर:</strong> {form.account_number}</p>
              <p><strong>UTR:</strong> {form.utr_number}</p>

              {previewUrl && (
                <img src={previewUrl} className="max-h-40 rounded shadow" />
              )}

              <p className="text-gray-500 mt-3">
                कृपया सर्व माहिती तपासून घ्या.
              </p>
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" type="button" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <span />
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
