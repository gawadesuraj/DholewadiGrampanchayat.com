import React from "react";
import { Home, FileCheck, Globe2, ExternalLink } from "lucide-react";

function PMAYBeneficiary() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-emerald-700 to-teal-600 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                <Home className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Pradhan Mantri Awas Yojana (PMAY) – Beneficiary Information
            </h1>
            <p className="max-w-3xl mx-auto text-teal-100 text-lg">
              Empowering every Indian family with affordable housing under the "Housing for All" mission.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-12 space-y-10 text-gray-700">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-700 mb-3">Overview of the Scheme</h2>
            <p className="leading-relaxed">
              The <strong>Pradhan Mantri Awas Yojana (PMAY)</strong> is a flagship initiative by the Government of India 
              launched in <strong>June 2015</strong> to ensure that every Indian family has a <strong>pucca house</strong> 
              with basic amenities like water, sanitation, and electricity.  
              The mission covers both <strong>urban (PMAY-U)</strong> and <strong>rural (PMAY-G)</strong> households 
              across the nation under the vision of “Housing for All”.
            </p>
          </section>

          {/* Objectives */}
          <section className="bg-teal-50 rounded-2xl p-6 shadow-sm border-l-4 border-teal-400">
            <h2 className="text-xl font-semibold text-teal-700 mb-3">Objectives</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide affordable permanent housing for eligible families in rural and urban India.</li>
              <li>Ensure access to essential services – water, electricity, toilets, and cooking gas.</li>
              <li>Promote women’s ownership of houses for financial security and equality.</li>
              <li>Support slum rehabilitation and credit-linked subsidy for low-income groups.</li>
            </ul>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-3">Eligibility Criteria</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>The beneficiary family must not own a pucca house anywhere in India.</li>
              <li>Household income must fall within the scheme categories:</li>
              <ul className="list-decimal list-inside ml-5">
                <li><strong>EWS (Economically Weaker Section):</strong> income up to ₹3 lakh/year.</li>
                <li><strong>LIG (Low Income Group):</strong> income up to ₹6 lakh/year.</li>
                <li><strong>MIG I:</strong> income ₹6–12 lakh/year (4% subsidy on loan up to ₹9 lakh).</li>
                <li><strong>MIG II:</strong> income ₹12–18 lakh/year (3% subsidy on loan up to ₹12 lakh).</li>
              </ul>
              <li>Beneficiary should not have availed central government housing schemes earlier.</li>
              <li>Applicant must have a valid Aadhaar number.</li>
            </ul>
          </section>

          {/* Benefits */}
          <section className="bg-emerald-50 rounded-2xl p-6 shadow-sm border-l-4 border-emerald-400">
            <h2 className="text-xl font-semibold text-emerald-700 mb-3">Key Benefits</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Subsidized home loans with an interest subsidy of up to <strong>₹2.67 lakh</strong>.</li>
              <li>Financial assistance up to <strong>₹1.2 lakh – ₹2.5 lakh</strong> for rural households under PMAY-G.</li>
              <li>Priority to women, SC/ST, and differently-abled beneficiaries.</li>
              <li>All houses constructed are climate-resilient and eco-friendly.</li>
            </ul>
          </section>

          {/* Application Process */}
          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-3">How to Apply / Check Beneficiary</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Visit the official PMAY portal:{" "}
                <a
                  href="https://pmaymis.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 underline hover:text-teal-800"
                >
                  pmaymis.gov.in
                </a>{" "}
                (for PMAY-Urban).
              </li>
              <li>
                For rural beneficiaries, visit{" "}
                <a
                  href="https://pmayg.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 underline hover:text-teal-800"
                >
                  pmayg.nic.in
                </a>{" "}
                (PMAY-Gramin portal).
              </li>
              <li>Select “Search Beneficiary” and enter your Aadhaar number to check your status.</li>
              <li>Apply online or through your nearest CSC (Common Service Centre) or Gram Panchayat.</li>
              <li>Keep documents ready – Aadhaar, income proof, and residence certificate.</li>
            </ol>
          </section>

          {/* Useful Links */}
          <section className="bg-teal-50 rounded-2xl p-6 shadow-sm border-l-4 border-teal-400">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-teal-700 mb-3">
              <Globe2 className="w-5 h-5 text-teal-600" /> Useful Links
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <a
                  href="https://pmaymis.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200"
                >
                  PMAY – Urban Portal
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://pmayg.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200"
                >
                  PMAY – Gramin Portal
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://pmay-urban.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200"
                >
                  Ministry of Housing & Urban Affairs – Official Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://pmayg.nic.in/netiay/Home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200"
                >
                  Check PMAY-G Beneficiary List 2025
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </section>

          {/* Note */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl">
            <h2 className="text-lg font-semibold text-yellow-700 mb-2">Important Note</h2>
            <p>
              Beneficiaries are advised to apply only through official government portals or 
              authorized CSCs. Avoid third-party agents. All applications are verified based on 
              Aadhaar and income details, and the final list is published online at the official PMAY portals.
            </p>
          </section>

          {/* Contact Info */}
          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-3">Help & Support</h2>
            <ul className="space-y-1">
              <li>📞 PMAY-U Helpline: <strong>1800-11-3377 / 1800-11-3388</strong></li>
              <li>📧 Email: <a href="mailto:pmaymis-mhupa@gov.in" className="text-teal-600 underline">pmaymis-mhupa@gov.in</a></li>
              <li>🏢 Ministry of Housing and Urban Affairs, Nirman Bhavan, New Delhi – 110108</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 py-4">
          © Government of India | Ministry of Housing & Urban Affairs – PMAY Mission 2025
        </div>
      </div>
    </div>
  );
}

export default PMAYBeneficiary;
