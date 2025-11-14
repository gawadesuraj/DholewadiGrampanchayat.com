// src/pages/Services/forms/NoPendingGramPanchayat.jsx
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
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200"
      />
    </div>
  );
}

export default function NoPendingGramPanchayat() {
  const [open, setOpen] = useState(false);
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    applicant_name: "",
    father_spouse_name: "",
    address: "",
    village: "",
    taluka: "",
    district: "",
    mobile: "",
    email: "",
    property_details: "",
    application_reason: "",
    utr_number: "",
    payment_file: null,
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
    if (!form.applicant_name || !form.mobile) {
      toast.error("कृपया अर्जदाराचे नाव आणि मोबाईल भरा");
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Application submitted (UI demo).");
    setOpen(false);
    setForm({
      applicant_name: "",
      father_spouse_name: "",
      address: "",
      village: "",
      taluka: "",
      district: "",
      mobile: "",
      email: "",
      property_details: "",
      application_reason: "",
      utr_number: "",
      payment_file: null,
    });
    setPreview(null);
  }

  return (
    <>
      <PageHeader
        title="No Pending Items at Gram Panchayat"
        subtitle="Certificate stating no pending items with Gram Panchayat"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "No Pending", href: null }]}
      />

      <div className="container py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold">Service Overview</h2>
              <p className="text-gray-600">
                Apply for a certificate confirming there are no pending dues or issues with the Gram Panchayat records.
              </p>
              <div className="mt-4 text-sm grid grid-cols-2 gap-2">
                <div><strong>Processing:</strong> 5 working days</div>
                <div><strong>Fee:</strong> ₹20</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="p-6 space-y-3 text-center">
              <Button className="w-full" onClick={() => setOpen(true)}>Apply Online</Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = "/documents/no_pending_form.pdf";
                  a.download = "NoPendingGramPanchayat_Form.pdf";
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                }}
              >
                Download Form
              </Button>
              <Button variant="ghost" className="w-full">Check Status</Button>
            </div>
          </Card>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="No Pending Items — Application" size="xl">
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <InputBlock label="अर्जदाराचे पूर्ण नाव *" name="applicant_name" value={form.applicant_name} onChange={handleChange} />
            <InputBlock label="वडिल/पतीचे नाव" name="father_spouse_name" value={form.father_spouse_name} onChange={handleChange} />
            <InputBlock label="पत्ता *" name="address" value={form.address} onChange={handleChange} />
            <InputBlock label="गाव" name="village" value={form.village} onChange={handleChange} />
            <InputBlock label="तालुका" name="taluka" value={form.taluka} onChange={handleChange} />
            <InputBlock label="जिल्हा" name="district" value={form.district} onChange={handleChange} />
            <InputBlock label="व्हाट्सअप / मोबाईल *" name="mobile" value={form.mobile} onChange={handleChange} />
            <InputBlock label="ईमेल" name="email" type="email" value={form.email} onChange={handleChange} />
            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">जमिनी / मालमत्ता तपशील</label>
              <textarea name="property_details" value={form.property_details} onChange={handleChange} className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200" rows="3" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">अर्ज कारण (उद्दिष्ट)</label>
              <textarea name="application_reason" value={form.application_reason} onChange={handleChange} className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200" rows="2" />
            </div>

            <InputBlock label="UTR नंबर (यदि असेल)" name="utr_number" value={form.utr_number} onChange={handleChange} />
            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">पेमेंट स्क्रीनशॉट *</label>
              <input ref={fileRef} type="file" name="payment_file" accept="image/*,application/pdf" onChange={handleChange} required />
              {preview && <img src={preview} alt="preview" className="max-h-44 mt-2 rounded" />}
            </div>
          </div>

          <div className="flex justify-between pt-3">
            <div></div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => { setOpen(false); }}>Cancel</Button>
              <Button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit Application"}</Button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
