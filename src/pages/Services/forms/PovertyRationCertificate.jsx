// src/pages/Services/forms/PovertyRationCertificate.jsx
import React, { useState, useRef } from "react";
import PageHeader from "../../../components/common/PageHeader";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";
import { toast } from "react-toastify";

function InputBlock({ label, name, type = "text", onChange, value }) {
  return (
    <div>
      <label className="block text-sm mb-1 font-medium">{label}</label>
      <input name={name} type={type} onChange={onChange} value={value} className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200" />
    </div>
  );
}

export default function PovertyRationCertificate() {
  const [open, setOpen] = useState(false);
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    financial_year: "",
    head_of_family: "",
    family_members: "",
    annual_income: "",
    address: "",
    ration_card_no: "",
    mobile: "",
    email: "",
    proof_files: null,
    utr_number: "",
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (files) {
      const f = files[0];
      setForm((p) => ({ ...p, [name]: f }));
      if (f && f.type.startsWith("image/")) setPreview(URL.createObjectURL(f));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  }

  function validate() {
    if (!form.head_of_family || !form.mobile) {
      toast.error("कृपया कुटुंब प्रमुख आणि मोबाईल भरा");
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 750));
    setSubmitting(false);
    toast.success("Application submitted (UI only).");
    setOpen(false);
    setForm({
      financial_year: "",
      head_of_family: "",
      family_members: "",
      annual_income: "",
      address: "",
      ration_card_no: "",
      mobile: "",
      email: "",
      proof_files: null,
      utr_number: "",
    });
    setPreview(null);
  }

  return (
    <>
      <PageHeader title="Poverty / Ration Certificate" subtitle="Apply for poverty / ration related certificate" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Poverty / Ration", href: null }]} />

      <div className="container py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold">Service Overview</h2>
              <p className="text-gray-600">Apply for poverty/ration certificate required for ration benefits and welfare schemes.</p>
              <div className="mt-4 text-sm grid grid-cols-2 gap-2">
                <div><strong>Processing:</strong> 7 working days</div>
                <div><strong>Fee:</strong> Free / As applicable</div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <div className="p-6 text-center space-y-3">
              <Button className="w-full" onClick={() => setOpen(true)}>Apply Online</Button>

              <Button variant="outline" className="w-full" onClick={() => {
                const a = document.createElement("a");
                a.href = "/documents/poverty_ration_form.pdf";
                a.download = "Poverty_Ration_Form.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
              }}>Download Form</Button>

              <Button variant="ghost" className="w-full">Check Status</Button>
            </div>
          </Card>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Poverty / Ration Application" size="xl">
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <InputBlock label="आर्थिक वर्ष" name="financial_year" value={form.financial_year} onChange={handleChange} />
            <InputBlock label="कुटुंब प्रमुख का नाव *" name="head_of_family" value={form.head_of_family} onChange={handleChange} />
            <InputBlock label="कुटुंब सदस्य संख्या" name="family_members" value={form.family_members} onChange={handleChange} />
            <InputBlock label="वार्षिक उत्पन्न" name="annual_income" value={form.annual_income} onChange={handleChange} />
            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">पत्ता</label>
              <textarea name="address" value={form.address} onChange={handleChange} className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200" rows="2" />
            </div>
            <InputBlock label="राशन कार्ड क्रमांक" name="ration_card_no" value={form.ration_card_no} onChange={handleChange} />
            <InputBlock label="व्हाट्सअप / मोबाईल *" name="mobile" value={form.mobile} onChange={handleChange} />
            <InputBlock label="ईमेल" name="email" value={form.email} type="email" onChange={handleChange} />
            <InputBlock label="UTR नंबर (यदि लागू)" name="utr_number" value={form.utr_number} onChange={handleChange} />

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">समर्थन कागदपत्र / पेमेंट स्क्रीनशॉट *</label>
              <input ref={fileRef} type="file" name="proof_files" accept="image/*,application/pdf" onChange={handleChange} required />
              {preview && <img src={preview} alt="preview" className="max-h-44 mt-2 rounded" />}
            </div>
          </div>

          <div className="flex justify-between pt-3">
            <div></div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit Application"}</Button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
