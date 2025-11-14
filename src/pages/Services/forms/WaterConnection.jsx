// src/pages/Services/forms/WaterConnection.jsx
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

export default function WaterConnection() {
  const [open, setOpen] = useState(false);
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    applicant_name: "",
    owner_name: "",
    connection_address: "",
    connection_type: "domestic",
    property_id: "",
    mobile: "",
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
    if (!form.applicant_name || !form.mobile || !form.connection_address) {
      toast.error("कृपया आवश्यक फील्ड भरा");
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
    toast.success("Water connection application submitted (UI demo).");
    setOpen(false);
    setForm({
      applicant_name: "",
      owner_name: "",
      connection_address: "",
      connection_type: "domestic",
      property_id: "",
      mobile: "",
      email: "",
      supporting_docs: null,
      utr_number: "",
    });
    setPreview(null);
  }

  return (
    <>
      <PageHeader title="Water Connection" subtitle="Apply for new water connection (UI preview)" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Water Connection", href: null }]} />

      <div className="container py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold">Water Connection</h2>
              <p className="text-gray-600">Apply for a new domestic or commercial water connection.</p>
              <div className="mt-4 text-sm grid grid-cols-2 gap-2">
                <div><strong>Processing:</strong> 30 working days</div>
                <div><strong>Fee:</strong> ₹2,500 connection charges (example)</div>
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
                a.href = "/documents/water_connection_form.pdf";
                a.download = "Water_Connection_Form.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
              }}>Download Form</Button>

              <Button variant="ghost" className="w-full">Check Status</Button>
            </div>
          </Card>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Water Connection Application" size="xl">
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <InputBlock label="अर्जदाराचे नाव *" name="applicant_name" value={form.applicant_name} onChange={handleChange} />
            <InputBlock label="मालकाचे नाव" name="owner_name" value={form.owner_name} onChange={handleChange} />
            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">कनेक्शन पत्ता *</label>
              <textarea name="connection_address" value={form.connection_address} onChange={handleChange} className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200" rows="2" />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">Connection Type</label>
              <select name="connection_type" value={form.connection_type} onChange={handleChange} className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200">
                <option value="domestic">Domestic</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <InputBlock label="Property ID (if any)" name="property_id" value={form.property_id} onChange={handleChange} />
            <InputBlock label="व्हाट्सअप / मोबाईल *" name="mobile" value={form.mobile} onChange={handleChange} />
            <InputBlock label="ईमेल" name="email" value={form.email} type="email" onChange={handleChange} />
            <InputBlock label="UTR / Transaction ID (if any)" name="utr_number" value={form.utr_number} onChange={handleChange} />

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">समर्थन कागदपत्र / पेमेंट स्क्रीनशॉट *</label>
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
