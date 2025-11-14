import React, { useState, useRef } from "react"; // Added useRef
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import { supabase } from "../../services/supabaseClient";

function CertificateApplication() {
  const [userId, setUserId] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [userError, setUserError] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [certificateType, setCertificateType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [document, setDocument] = useState(null);

  // --- New states added ---
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [submitError, setSubmitError] = useState(""); // For non-alert errors

  // Refs to reset file inputs
  const docInputRef = useRef(null);
  const screenshotInputRef = useRef(null);
  // --- End of new states ---

  const certificateOptions = [
    "Birth Certificate",
    "Death Certificate",
    "Income Certificate",
    "Caste Certificate",
    "Domicile Certificate",
    "Residence Proof",
    "Character Certificate",
    "Other",
  ];

  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Certificate Application", href: null },
  ];

  // ✅ Verify UserID exists in "users" table
  const handleVerifyUser = async () => {
    if (!userId.trim()) {
      setUserError("Please enter your User ID");
      return;
    }
    setUserError("");
    setVerifying(true);
    // Reset messages on new verification
    setSuccessMsg("");
    setSubmitError("");

    const { data, error } = await supabase
      .from("users")
      .select("name, mobile") // Optimized to select only needed fields
      .eq("id", userId.trim())
      .single();

    setVerifying(false);

    if (error || !data) {
      setIsVerified(false);
      setUserError("❌ Invalid User ID. Please check and try again.");
    } else {
      setIsVerified(true);
      setUserError("");
      setName(data.name || "");
      setMobile(data.mobile || "");
    }
  };

  // Helper function to upload a file and get URL
  const uploadFile = async (file, bucket, path) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);

    if (error) {
      console.error("Upload error:", error);
      throw new Error(`Failed to upload ${file.name}.`);
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return publicUrlData.publicUrl;
  };

  // ✅ Submit Certificate Application
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset messages
    setSubmitError("");
    setSuccessMsg("");

    if (!isVerified) {
      setSubmitError("Please verify your User ID first.");
      return;
    }

    if (!name.trim() || !mobile.trim() || !certificateType || !purpose) {
      setSubmitError("Please fill all application fields.");
      return;
    }

    if (!document) {
      setSubmitError("Please upload the required supporting document.");
      return;
    }

    // --- New check for payment screenshot ---
    if (!paymentScreenshot) {
      setSubmitError("Please upload your payment screenshot.");
      return;
    }
    // --- End of new check ---

    setSubmitting(true);

    try {
      // 1. Upload Supporting Document
      const docFileName = `doc_${userId}_${Date.now()}_${document.name}`;
      const documentUrl = await uploadFile(
        document,
        "certificate_uploads",
        docFileName
      );

      // 2. Upload Payment Screenshot
      const ssFileName = `payment_${userId}_${Date.now()}_${
        paymentScreenshot.name
      }`;
      const paymentScreenshotUrl = await uploadFile(
        paymentScreenshot,
        "certificate_uploads",
        ssFileName
      );

      // 3. Insert into "certificate_applications"
      const { error: insertError } = await supabase
        .from("certificate_applications")
        .insert([
          {
            user_id: userId,
            name,
            mobile,
            certificate_type: certificateType,
            purpose,
            document_url: documentUrl,
            // --- New fields added to insert ---
            payment_screenshot_url: paymentScreenshotUrl,
            payment_verified: false, // Default to false
            status: "pending",
          },
        ]);

      if (insertError) {
        throw insertError; // Caught by catch block
      }

      // Success
      setSuccessMsg("✅ Certificate application submitted successfully!");
      setUserId("");
      setName("");
      setMobile("");
      setCertificateType("");
      setPurpose("");
      setDocument(null);
      setPaymentScreenshot(null); // Reset payment screenshot
      setIsVerified(false);

      // Reset file inputs
      if (docInputRef.current) docInputRef.current.value = "";
      if (screenshotInputRef.current) screenshotInputRef.current.value = "";
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        `Failed to submit application: ${error.message || "Unknown error"}`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageHeader
        title="Apply for Certificate"
        subtitle="Submit your application for official certificates online"
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto py-12 px-4">
        <Card>
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              📜 Certificate Application
            </h2>

            {/* Step 1 - Verify User */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Step 1: Verify User ID
              </h3>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <input
                  type="text"
                  placeholder="Enter your User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  disabled={isVerified}
                  className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <button
                  onClick={handleVerifyUser}
                  disabled={verifying || isVerified}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  {verifying
                    ? "Verifying..."
                    : isVerified
                    ? "Verified"
                    : "Verify User ID"}
                </button>
              </div>
              {userError && (
                <p className="text-red-500 text-sm mt-2">{userError}</p>
              )}
              {isVerified && (
                <p className="text-green-600 font-medium mt-2">
                  ✅ User verified successfully. Please proceed to the next
                  steps.
                </p>
              )}
            </div>

            {/* Steps 2 & 3 - Show only after verification */}
            {isVerified && (
              <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                {/* --- Step 2: Make Payment (NEW SECTION) --- */}
                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Step 2: Make Payment
                  </h3>
                  <div className="p-4 border rounded-md bg-gray-50 flex flex-col md:flex-row items-center gap-6">
                    <div className="text-center">
                      <img
                        src="https://placehold.co/200x200?text=Scan+to+Pay" // <-- REPLACE WITH YOUR QR CODE URL
                        alt="QR Code for Payment"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-md shadow-sm mx-auto"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Scan the QR code to pay the application fee.
                      </p>
                    </div>
                    <div className="flex-1 w-full">
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="payment-screenshot"
                      >
                        Upload Payment Screenshot
                      </label>
                      <input
                        id="payment-screenshot"
                        type="file"
                        accept="image/*"
                        ref={screenshotInputRef} // Added ref
                        onChange={(e) =>
                          setPaymentScreenshot(e.target.files[0])
                        }
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                      />
                      {paymentScreenshot && (
                        <p className="text-green-600 text-sm mt-1">
                          File selected: {paymentScreenshot.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* --- End of new section --- */}

                {/* Step 3 - Application Form (Renamed from Step 2) */}
                <div className="border-t border-gray-200 pt-6 space-y-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Step 3: Submit Certificate Application
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
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="mobile"
                    >
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="cert-type"
                    >
                      Certificate Type
                    </label>
                    <select
                      id="cert-type"
                      value={certificateType}
                      onChange={(e) => setCertificateType(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    >
                      <option value="">Select Certificate Type</option>
                      {certificateOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="purpose"
                    >
                      Purpose of Application
                    </label>
                    <textarea
                      id="purpose"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      placeholder="Mention the purpose for which you need this certificate"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="doc-upload"
                    >
                      Upload Supporting Document (e.g., ID proof, relevant form)
                    </label>
                    <input
                      id="doc-upload"
                      type="file"
                      accept="image/*,.pdf"
                      ref={docInputRef} // Added ref
                      onChange={(e) => setDocument(e.target.files[0])}
                      className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    />
                    {document && (
                      <p className="text-green-600 text-sm mt-1">
                        File selected: {document.name}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            )}

            {/* Error/Success Messages */}
            {submitError && (
              <div className="mt-6 text-red-600 font-medium text-center">
                {submitError}
              </div>
            )}
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

export default CertificateApplication;
