import React from "react";
import {
  Droplets,
  FileText,
  CheckCircle2,
  Building2,
  Users,
  Link2,
  Info,
  Leaf,
} from "lucide-react";

function SwachhBharatMission() {
  return (
    <div
      className="min-h-screen relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Page Container - uniform across all scheme pages */}
      <div className="max-w-5xl mx-auto bg-white/95 shadow-xl backdrop-blur-sm rounded-3xl border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-sky-700 to-cyan-600 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                <Droplets className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Swachh Bharat Mission (SBM)
            </h1>
            <p className="max-w-3xl mx-auto text-cyan-100 text-lg">
              A nationwide cleanliness campaign to build a cleaner, healthier, and open-defecation-free India.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 sm:p-12 space-y-10 text-gray-700">

          {/* Objective */}
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-sky-700 mb-3">
              <FileText className="w-6 h-6 text-cyan-500" />
              Objective of the Scheme
            </h2>
            <p className="leading-relaxed text-gray-700">
              The <strong>Swachh Bharat Mission (SBM)</strong> was launched by the Government of India 
              with the goal of achieving an <strong>open defecation-free</strong> and 
              <strong> clean India</strong>. The mission aims to promote sanitation awareness, 
              construct toilets in every household, and encourage citizens to adopt sustainable hygiene practices.
            </p>
          </section>

          {/* Important Features */}
          <section className="bg-cyan-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700 mb-3">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Encouragement for construction and usage of toilets.</li>
              <li>Promotion of hygiene and cleanliness awareness in both rural and urban areas.</li>
              <li>Emphasis on waste segregation, recycling, and plastic-free environments.</li>
              <li>Implementation through active community participation.</li>
            </ul>
          </section>

          {/* Two Phases */}
          <section>
            <h2 className="text-xl font-semibold text-sky-700 mb-3">
              Two Phases of Swachh Bharat Mission
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-cyan-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-sky-700 mb-2">
                  Swachh Bharat Mission – Rural (SBM-G)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Construction of household toilets in rural areas.</li>
                  <li>Village-level ODF (Open Defecation Free) certification.</li>
                  <li>Funds managed via Gram Panchayats for sanitation drives.</li>
                </ul>
              </div>
              <div className="bg-white border border-cyan-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-sky-700 mb-2">
                  Swachh Bharat Mission – Urban (SBM-U)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Focus on sanitation improvement in cities.</li>
                  <li>Development of solid waste management systems.</li>
                  <li>Use of modern smart technologies for waste collection.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Beneficiaries */}
          <section className="bg-gradient-to-r from-sky-50 to-cyan-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700 mb-3">Beneficiaries</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Citizens, Gram Panchayats, Municipalities, and Schools.</li>
              <li>Financial assistance to poor and disadvantaged families for building toilets.</li>
              <li>Public sanitation facilities for residents of urban areas.</li>
            </ul>
          </section>

          {/* Subsidy */}
          <section>
            <h2 className="text-xl font-semibold text-sky-700 mb-3">Toilet Subsidy Details</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Eligible families receive up to <strong>₹12,000</strong> for toilet construction.</li>
              <li>Funds are deposited directly to beneficiaries' bank accounts after verification.</li>
              <li>Municipalities and Panchayats oversee fund disbursement and implementation.</li>
            </ul>
          </section>

          {/* Public Participation */}
          <section className="bg-cyan-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700 mb-3">
              Public Awareness & Participation
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Nationwide campaigns like <strong>Swachhata Hi Seva</strong> and <strong>Plastic Free India</strong>.</li>
              <li>Cleanliness drives, pledges, and rallies organized across schools and communities.</li>
              <li>Involvement of NGOs, citizen volunteers, and local bodies.</li>
            </ul>
          </section>

          {/* Contact Info */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-sky-700 mb-3">
              <Link2 className="w-5 h-5 text-sky-500" />
              Contact & Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Official Website:{" "}
                <a
                  href="https://swachhbharatmission.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 underline hover:text-sky-800"
                >
                  https://swachhbharatmission.gov.in
                </a>
              </li>
              <li>State Sanitation Cell, Government of Maharashtra</li>
              <li>Nearest Gram Panchayat or Municipality Office</li>
            </ul>
          </section>

          {/* Note */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl">
            <h2 className="text-lg font-semibold text-yellow-700 mb-2">Important Note</h2>
            <p className="text-gray-700 leading-relaxed">
              Applicants must submit required documents such as Aadhaar Card, photo of the house, bank details, and 
              BPL certification (if applicable).  
              The Swachh Bharat Mission operates nationwide with separate urban and rural strategies for maximum impact.
            </p>
          </section>

          {/* Footer */}
          <div className="pt-6 text-center text-sm text-gray-500 border-t border-gray-200">
            © Government of India | Ministry of Housing and Urban Affairs | Swachh Bharat Mission
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwachhBharatMission;