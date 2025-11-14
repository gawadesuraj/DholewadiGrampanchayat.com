// src/pages/Services/forms/PropertyTaxPayment.jsx
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

export default function PropertyTaxPayment() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    property_id: "",
    owner_name: "",
    property_address: "",
    tax_year: "",
    amount: "",
    mobile: "",
    email: "",
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
    if (!form.property_id || !form.amount) {
      toast.error("कृपया मालमत्ता आयडी आणि पावती रक्कम भरा");
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    toast.success("Property tax payment submitted (UI demo).");
    setOpen(false);
    setForm({
      property_id: "",
      owner_name: "",
      property_address: "",
      tax_year: "",
      amount: "",
      mobile: "",
      email: "",
      utr_number: "",
      payment_file: null,
    });
    setPreview(null);
  }

  return (
    <>
      <PageHeader title="Property Tax Payment" subtitle="Pay your property tax online (UI demo)" breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Property Tax", href: null }]} />

      <div className="container py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold">Property Tax Payment</h2>
              <p className="text-gray-600">Pay property tax and upload payment proof (demo UI).</p>
              <div className="mt-4 text-sm grid grid-cols-2 gap-2">
                <div><strong>Processing:</strong> Immediate (after payment)</div>
                <div><strong>Fee:</strong> As per assessment</div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <div className="p-6 text-center space-y-3">
              <Button className="w-full" onClick={() => setOpen(true)}>Pay / Apply</Button>

              <Button variant="outline" className="w-full" onClick={() => {
                const a = document.createElement("a");
                a.href = "/documents/property_tax_receipt_template.pdf";
                a.download = "PropertyTax_Form.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
              }}>Download Form</Button>

              <Button variant="ghost" className="w-full">Check Status</Button>
            </div>
          </Card>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Property Tax Payment" size="xl">
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <InputBlock label="Property ID / Assessment No *" name="property_id" value={form.property_id} onChange={handleChange} />
            <InputBlock label="Owner Name" name="owner_name" value={form.owner_name} onChange={handleChange} />
            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">Property Address</label>
              <textarea name="property_address" value={form.property_address} onChange={handleChange} className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200" rows="2" />
            </div>
            <InputBlock label="Tax Year" name="tax_year" value={form.tax_year} onChange={handleChange} />
            <InputBlock label="Amount (₹) *" name="amount" value={form.amount} onChange={handleChange} />
            <InputBlock label="व्हाट्सअप / मोबाईल" name="mobile" value={form.mobile} onChange={handleChange} />
            <InputBlock label="ईमेल" name="email" value={form.email} type="email" onChange={handleChange} />
            <InputBlock label="UTR / Transaction ID (if any)" name="utr_number" value={form.utr_number} onChange={handleChange} />

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-medium">Payment Screenshot / Receipt *</label>
              <input ref={fileRef} type="file" name="payment_file" accept="image/*,application/pdf" onChange={handleChange} required />
              {preview && <img src={preview} alt="preview" className="max-h-44 mt-2 rounded" />}
            </div>
          </div>

          <div className="flex justify-between pt-3">
            <div></div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={submitting}>{submitting ? "Processing..." : "Submit Payment"}</Button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
