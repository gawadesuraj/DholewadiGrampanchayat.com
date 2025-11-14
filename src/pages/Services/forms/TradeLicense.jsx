// src/pages/Services/forms/TradeLicense.jsx
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

export default function TradeLicense() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    business_name: "",
    owner_name: "",
    business_address: "",
    license_type: "",
    registration_no: "",
    contact_mobile: "",
    email: "",
    supporting_docs: null,
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
    if (!form.business_name || !form.owner_name) {
      toast.error("कृपया व्यवसायाचे आणि मालकाचे नाव भरा");
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Trade license application submitted (UI demo).");
    setOpen(false);
    setForm({
      business_name: "",
      owner_name: "",
      business_address: "",
      license_type: "",
      registration_no: "",
      contact_mobile: "",
      email: "",
      supporting_docs: null,
      utr_number: "",
    });
    setPreview(null);
  }

  return (
    <>
      <PageHeader title="Trade License" subtitle="Apply for trade/business license" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Trade License", href: null }]} />

      <div className="container py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold">Trade License</h2>
              <p className="text-gray-600">Apply for the required license to operate a business within the taluka.</p>
              <div className="mt-4 text-sm grid grid-cols-2 gap-2">
                <div><strong>Processing:</strong> 30 working days</div>
                <div><strong>Fee:</strong> ₹1,000 - ₹5,000 (varies)</div>
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
                a.href = "/documents/trade_license_form.pdf";
                a.download = "Trade_License_Form.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
              }}>Download Form</Button>

              <Button variant="ghost" className="w-full">Check Status</Button>
            </div>
          </Card>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Trade License Application" size="xl">
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <InputBlock label="व्यवसायाचे नाव *" name="business_name" value={form.business_name} onChange={handleChange} />
            <InputBlock label="मालकाचे नाव *" name="owner_name" value={form.owner_name} onChange={handleChange} />
            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">व्यवसायाचा पत्ता</label>
              <textarea name="business_address" value={form.business_address} onChange={handleChange} className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200" rows="2" />
            </div>
            <InputBlock label="लायसन्स प्रकार" name="license_type" value={form.license_type} onChange={handleChange} />
            <InputBlock label="नोंदणी क्र. (यदि आहे)" name="registration_no" value={form.registration_no} onChange={handleChange} />
            <InputBlock label="संपर्क मोबाईल" name="contact_mobile" value={form.contact_mobile} onChange={handleChange} />
            <InputBlock label="ईमेल" name="email" value={form.email} type="email" onChange={handleChange} />
            <InputBlock label="UTR नंबर (यदि लागू)" name="utr_number" value={form.utr_number} onChange={handleChange} />

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">समर्थन कागदपत्र (ID / Business proof / Payment) *</label>
              <input ref={fileRef} type="file" name="supporting_docs" accept="image/*,application/pdf" onChange={handleChange} required />
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
