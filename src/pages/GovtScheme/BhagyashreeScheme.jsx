import React from "react";
import {
  Baby,
  HeartHandshake,
  FileText,
  CheckCircle2,
  BookOpen,
  FileCheck,
  PhoneCall,
} from "lucide-react";

function BhagyashreeScheme() {
  return (
    <div
      className="min-h-screen relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Page Container */}
      <div className="max-w-5xl mx-auto bg-white/95 shadow-xl backdrop-blur-sm rounded-3xl border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-violet-700 to-fuchsia-700 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                <Baby className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              BhagyaShree Lek Majhi Laadki Scheme
            </h1>
            <p className="max-w-3xl mx-auto text-violet-100 text-lg">
              A flagship initiative by the Government of Maharashtra aimed at
              promoting the birth, education, and empowerment of the girl child.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 sm:p-12 space-y-10 text-gray-700">

          {/* Purpose Section */}
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-violet-700 mb-3">
              <HeartHandshake className="w-6 h-6 text-fuchsia-500" />
              Purpose of the Scheme
            </h2>
            <p className="leading-relaxed text-gray-700">
              The <strong>Bhagyashree (Lek Majhi Laadki)</strong> scheme was
              introduced by the Government of Maharashtra to encourage the birth
              of girl children, prevent gender-based discrimination, and ensure
              access to education for every girl. It provides financial
              assistance from birth until higher education, ensuring long-term
              social and educational support.
            </p>
          </section>

          {/* Features */}
          <section className="bg-fuchsia-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-fuchsia-700 mb-3">
              Plan Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Financial assistance from birth</strong> – incentives
                provided to parents after the birth of a girl child.
              </li>
              <li>
                <strong>Educational support</strong> – scholarships and
                incentives offered at every stage of the child’s education.
              </li>
              <li>
                Focused on <strong>education, empowerment, and well-being</strong>{" "}
                of the girl child until adulthood.
              </li>
            </ul>
          </section>

          {/* Beneficiaries */}
          <section>
            <h2 className="text-xl font-semibold text-violet-700 mb-3">
              Eligible Beneficiaries
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Parents belonging to <strong>BPL families</strong> in Maharashtra.</li>
              <li>Benefits applicable for the <strong>first two daughters</strong> only.</li>
              <li>Annual family income must be below <strong>₹1 lakh</strong>.</li>
              <li>Both parents must be <strong>residents of Maharashtra</strong>.</li>
              <li>Parents must adopt family planning measures.</li>
            </ul>
          </section>

          {/* Benefits Table */}
          <section className="bg-gradient-to-r from-fuchsia-50 to-violet-50 p-6 rounded-2xl shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-fuchsia-700 mb-3">
              <BookOpen className="w-5 h-5 text-fuchsia-500" />
              Benefits under the Scheme
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm rounded-lg overflow-hidden">
                <thead className="bg-fuchsia-100 text-gray-700">
                  <tr>
                    <th className="text-left px-4 py-2 border-b">Stage</th>
                    <th className="text-left px-4 py-2 border-b">
                      Incentive Amount (₹)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">Birth of a Girl Child</td>
                    <td className="px-4 py-2">₹5,000 – ₹25,000 (District-wise)</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2">1st to 7th Standard</td>
                    <td className="px-4 py-2">₹2,000 – ₹3,000 per year</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">8th to 10th Standard</td>
                    <td className="px-4 py-2">₹4,000 – ₹5,000 per year</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2">11th & 12th Standard</td>
                    <td className="px-4 py-2">₹6,000 – ₹7,000 per year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Higher / Vocational Education</td>
                    <td className="px-4 py-2">Assistance under special schemes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              (Note: Amounts may vary by district or category.)
            </p>
          </section>

          {/* Required Documents */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-violet-700 mb-3">
              <FileCheck className="w-5 h-5 text-violet-500" />
              Required Documents
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Parents’ Aadhaar cards</li>
              <li>Girl child’s birth certificate</li>
              <li>Income certificate</li>
              <li>Caste certificate (if applicable)</li>
              <li>Family planning certificate</li>
              <li>Bank account details (in girl’s or guardian’s name)</li>
              <li>Residence certificate</li>
            </ul>
          </section>

          {/* Application Process */}
          <section className="bg-violet-50 p-6 rounded-2xl border-l-4 border-violet-400 shadow-sm">
            <h2 className="text-xl font-semibold text-violet-700 mb-3">
              Application Process
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Applications can be submitted at the{" "}
                <strong>local Anganwadi Centre</strong>,{" "}
                <strong>Gram Panchayat</strong>, or{" "}
                <strong>Women and Child Development Department Office</strong>.
              </li>
              <li>Fill out the prescribed form and attach all necessary documents.</li>
              <li>
                Upon verification, the incentive amount will be directly credited
                to the beneficiary’s account.
              </li>
            </ol>
          </section>

          {/* Contact Info */}
          <section className="bg-fuchsia-50 p-6 rounded-2xl shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-fuchsia-700 mb-3">
              <PhoneCall className="w-5 h-5 text-fuchsia-500" />
              Contact & Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Women and Child Development Department, Government of Maharashtra</strong>
              </li>
              <li>Nearest Anganwadi Centre / Gram Panchayat / Panchayat Samiti Office</li>
              <li>
                Official Website:{" "}
                <a
                  href="https://wcd.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-600 underline hover:text-fuchsia-800"
                >
                  https://wcd.maharashtra.gov.in
                </a>
              </li>
            </ul>
          </section>

          {/* Notes */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl">
            <h2 className="text-lg font-semibold text-yellow-700 mb-2">
              Note:
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Terms, eligibility, and benefits may be revised periodically under
              government policy updates. Applicants should confirm details from
              the nearest local authorities or the official website before applying.
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

export default BhagyashreeScheme;
