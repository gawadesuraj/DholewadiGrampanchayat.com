import React, { useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import { supabase } from "../../services/supabaseClient";

function TaxPayment() {
  const [userId, setUserId] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [userError, setUserError] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Tax Payment", href: null },
  ];

  // ✅ Verify UserID exists in "users" table
  const handleVerifyUser = async () => {
    if (!userId.trim()) {
      setUserError("Please enter your User ID");
      return;
    }
    setUserError("");
    setVerifying(true);

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId.trim())
      .single();

    setVerifying(false);

    if (error || !data) {
      setIsVerified(false);
      setUserError("❌ Invalid User ID. Please check and try again.");
    } else {
      setIsVerified(true);
      setUserError("");
    }
  };

  // ✅ Submit Payment Record
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isVerified) {
      alert("Please verify your User ID first.");
      return;
    }

    if (!name.trim() || !mobile.trim() || !screenshot) {
      alert("Please fill all fields and upload screenshot.");
      return;
    }

    setSubmitting(true);

    // Upload screenshot to Supabase Storage
    const fileName = `payment_${userId}_${Date.now()}.jpg`;
    const { data: fileData, error: uploadError } = await supabase.storage
      .from("payment_screenshots")
      .upload(fileName, screenshot);

    if (uploadError) {
      console.error("Upload error:", uploadError);
      alert("Failed to upload screenshot. Try again.");
      setSubmitting(false);
      return;
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from("payment_screenshots")
      .getPublicUrl(fileData.path);

    const screenshotUrl = publicUrlData.publicUrl;

    // Insert into "tax_payments"
    const { error: insertError } = await supabase.from("tax_payments").insert([
      {
        user_id: userId,
        name,
        mobile,
        screenshot_url: screenshotUrl,
        status: "pending", // ✅ Default new submissions are pending
      },
    ]);

    if (insertError) {
      console.error("Insert error:", insertError);
      alert("Failed to save payment record.");
    } else {
      setSuccessMsg("✅ Payment submitted successfully!");
      setUserId("");
      setName("");
      setMobile("");
      setScreenshot(null);
      setIsVerified(false);
    }

    setSubmitting(false);
  };

  return (
    <div>
      <PageHeader
        title="Online Tax Payment"
        subtitle="Pay your Panchayat tax securely through QR and upload your receipt."
        breadcrumbs={breadcrumbs}
      />

      <div className="container py-12">
        <Card>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              🧾 Pay Your Tax
            </h2>

            {/* QR Section */}
            <div className="flex flex-col items-center mb-8">
              <img
                src="/src/assets/qr-code.jpg"
                alt="Tax Payment QR"
                className="w-64 h-64 object-contain border border-gray-300 rounded-lg p-4"
              />
              <p className="text-gray-600 mt-3 text-center">
                Scan this QR code to pay your tax, then upload the screenshot
                below.
              </p>
            </div>

            {/* Step 1 - Verify User */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-4">
                Step 1: Verify User ID
              </h3>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <input
                  type="text"
                  placeholder="Enter your User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <button
                  onClick={handleVerifyUser}
                  disabled={verifying}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {verifying ? "Verifying..." : "Verify User ID"}
                </button>
              </div>
              {userError && (
                <p className="text-red-500 text-sm mt-2">{userError}</p>
              )}
              {isVerified && (
                <p className="text-green-600 font-medium mt-2">
                  ✅ User verified successfully.
                </p>
              )}
            </div>

            {/* Step 2 - Payment Form */}
            {isVerified && (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <h3 className="text-lg font-medium">
                  Step 2: Submit Payment Details
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    User ID
                  </label>
                  <input
                    type="text"
                    value={userId}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Upload Payment Screenshot
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setScreenshot(e.target.files[0])}
                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Payment"}
                </button>
              </form>
            )}

            {/* Success Message */}
            {successMsg && (
              <div className="mt-6 text-green-600 font-medium text-center">
                {successMsg}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TaxPayment;
