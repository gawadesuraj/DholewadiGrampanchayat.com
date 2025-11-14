import React from "react";
import { Heart, FileText, Star, CheckCircle2, PhoneCall, FileCheck } from "lucide-react";

function LadkiBahinYojana() {
  return (
    <div
      className="min-h-screen relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Page Container */}
      <div className="max-w-5xl mx-auto bg-white/90 shadow-xl backdrop-blur-sm rounded-3xl border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-cyan-700 to-slate-800 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Ladki Bahin Yojana — Government of Maharashtra
            </h1>
            <p className="max-w-3xl mx-auto text-cyan-100 text-lg">
              A welfare scheme to empower women across Maharashtra by providing
              monthly financial assistance and promoting economic independence.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-12 space-y-10 text-gray-700">

          {/* Objective */}
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-cyan-700 mb-3">
              <FileText className="w-6 h-6 text-cyan-500" />
              Objective of the Scheme
            </h2>
            <p className="leading-relaxed text-gray-600">
              The <strong>Ladki Bahin Yojana</strong> is a social welfare initiative
              launched by the Government of Maharashtra to promote financial
              independence and self-reliance among women. It provides monthly
              financial assistance to eligible women to enhance their standard of
              living and reduce household economic stress.
            </p>
          </section>

          {/* Important Features */}
          <section className="bg-cyan-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-cyan-700 mb-3">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>₹1,500 per month</strong> is directly credited to the
                beneficiary’s bank account.
              </li>
              <li>
                Funds are transferred securely through the{" "}
                <strong>Direct Benefit Transfer (DBT)</strong> system.
              </li>
              <li>
                A major initiative aimed at the{" "}
                <strong>economic empowerment of women</strong> in Maharashtra.
              </li>
              <li>
                Available to eligible women from all districts of the state.
              </li>
            </ul>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">
              Eligibility Criteria
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Applicant must be a <strong>resident of Maharashtra</strong>.</li>
              <li>Age must be <strong>21 years or above</strong>.</li>
              <li>Family’s annual income should be <strong>below ₹2.5 lakh</strong>.</li>
              <li>
                Women can be <strong>single, widowed, divorced, or married</strong>.
              </li>
              <li>
                Applicable to <strong>workers, domestic workers, agricultural workers</strong>, and
                women in the unorganized sector.
              </li>
            </ul>
          </section>

          {/* Required Documents */}
          <section className="bg-gradient-to-r from-cyan-50 to-slate-50 p-6 rounded-2xl shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-cyan-700 mb-3">
              <FileCheck className="w-5 h-5 text-cyan-500" />
              Required Documents
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Aadhaar card</li>
              <li>Residential proof (certificate of residence)</li>
              <li>Income certificate</li>
              <li>Bank account details (for DBT transfer)</li>
              <li>Marital status certificate (if required)</li>
              <li>Passport-size photograph</li>
            </ul>
          </section>

          {/* Application Process */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-700 mb-3">
              Application Process
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Submit applications <strong>online</strong> or at the{" "}
                <strong>nearest local government office</strong> after the official
                scheme rollout.
              </li>
              <li>Upload all required documents during submission.</li>
              <li>
                Once verified, funds will be credited directly to the
                beneficiary’s bank account.
              </li>
            </ol>
          </section>

          {/* Scheme Start Date */}
          <section className="bg-slate-50 p-6 rounded-2xl border-l-4 border-cyan-500 shadow-sm">
            <h2 className="text-xl font-semibold text-cyan-700 mb-3">
              Scheme Launch Date
            </h2>
            <p className="text-gray-700">
              The <strong>Ladki Bahin Yojana</strong> was officially implemented in the{" "}
              <strong>financial year 2024–25</strong>.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-cyan-50 to-slate-50 p-6 rounded-2xl shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-700 mb-3">
              <PhoneCall className="w-5 h-5 text-cyan-500" />
              Contact & Assistance
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Visit your <strong>local Gram Panchayat</strong> or{" "}
                <strong>Municipality Office</strong>.
              </li>
              <li>
                Contact the{" "}
                <strong>
                  Women and Child Development Department, Government of Maharashtra
                </strong>
                .
              </li>
              <li>
                Official Website:{" "}
                <a
                  href="https://wcd.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 underline hover:text-cyan-800"
                >
                  https://wcd.maharashtra.gov.in
                </a>
              </li>
            </ul>
          </section>

          {/* Note */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl">
            <h2 className="text-lg font-semibold text-yellow-700 mb-2">Note</h2>
            <p className="text-gray-700 leading-relaxed">
              The scheme is currently under phased implementation. Certain eligibility
              conditions or application processes may evolve. Applicants are advised to
              verify details at their local offices or the official government website
              before applying.
            </p>
          </section>

          {/* Footer */}
          <div className="pt-6 text-center text-sm text-gray-500 border-t border-gray-200">
            © Government of Maharashtra | Women and Child Development Department
          </div>
        </div>
      </div>
    </div>
  );
}

export default LadkiBahinYojana;
