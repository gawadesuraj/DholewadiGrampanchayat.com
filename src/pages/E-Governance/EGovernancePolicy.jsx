import React from "react";
import { FileText, Globe2, ShieldCheck, Users } from "lucide-react";

function EGovernancePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-sky-700 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Dholewadi Gram Panchayat E-Governance Policy, 2024
            </h1>
            <p className="max-w-3xl mx-auto text-sky-100 text-lg">
              A roadmap for transparent, participatory, and digitally empowered village administration.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-12 space-y-8 text-gray-700">
          {/* 1. Introduction */}
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-sky-700 mb-3">
              <Globe2 className="w-6 h-6 text-sky-600" />
              1. Introduction
            </h2>
            <p>
              Recognizing the transformative potential of Information and Communication Technology (ICT)
              to empower rural institutions, this policy outlines a roadmap for digital governance of
              <strong> Dholewadi Gram Panchayat</strong>. Rooted in the ethos of the PES Act and aligned
              with <strong>Digital India</strong>, the policy ensures transparent, participatory, and
              efficient service delivery, especially for tribal and marginalized citizens.
            </p>
          </section>

          {/* 2. Vision */}
          <section>
            <h2 className="text-xl font-semibold text-blue-700 mb-3">2. Vision</h2>
            <p>
              To establish <strong>Dholewadi Gram Panchayat</strong> as a model digital village
              administration institution by providing inclusive, integrated, real-time, and
              citizen-centric services using modern digital technology.
            </p>
          </section>

          {/* 3. Main Objectives */}
          <section className="bg-blue-50 rounded-2xl p-6 shadow-sm border-l-4 border-blue-400">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">3. Main Objectives</h2>
            <ul className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Ensuring universal digital access to Panchayat-level services.</li>
              <li>Enabling real-time governance and decision-making through data analytics.</li>
              <li>Institutionalizing paperless and cashless service delivery.</li>
              <li>Encouraging citizen participation via mobile apps and IVRS systems.</li>
              <li>Improving transparency and accountability through social audits and digital reporting.</li>
              <li>Enhancing digital capabilities of Panchayat staff and members.</li>
              <li>Integrating Panchayat systems with state and national e-platforms.</li>
              <li>Increasing cybersecurity and data privacy protection locally.</li>
              <li>Promoting multilingual and inclusive citizen interfaces.</li>
              <li>Ensuring interoperability with CSC, e-GramSwaraj, PFMS, and other systems.</li>
            </ul>
          </section>

          {/* 4. Policy Scope */}
          <section>
            <h2 className="text-xl font-semibold text-sky-700 mb-3">4. Policy Scope and Coverage</h2>
            <p>
              Applicable to all departments and functions of the Panchayat — Health, Sanitation, 
              Agriculture, Water, Education, and Livelihood. The policy covers ICT infrastructure, 
              digital literacy, service delivery, grievance redressal, and data management.
            </p>
          </section>

          {/* 5. Digital Infrastructure */}
          <section className="bg-sky-50 rounded-2xl p-6 shadow-sm border-l-4 border-sky-400">
            <h2 className="text-xl font-semibold text-sky-700 mb-3">
              5. Digital Infrastructure Development
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Establishment of digital control room with computers and biometric devices.</li>
              <li>High-speed broadband through BharatNet or alternate 4G/5G networks.</li>
              <li>Use of GIS, drone mapping, and mobile apps for monitoring.</li>
              <li>Cloud-based document storage for Panchayat records.</li>
              <li>Adoption of solar-powered kiosks for 24x7 citizen access.</li>
            </ul>
          </section>

          {/* 6. E-Governance Mechanism */}
          <section>
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              6. E-Governance Service Delivery Mechanism
            </h2>
            <p className="mb-2">
              Integration with national digital platforms such as e-GramSwaraj, DigiLocker, PMAY, SBM, and JJM.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Online issuance of Birth/Death/Marriage Certificates.</li>
              <li>Property Tax and NOC Services.</li>
              <li>Employment, Pension, and Scholarship Services.</li>
              <li>Use of AI-based systems for predictive alerts and grievance tracking.</li>
            </ul>
          </section>

          {/* 7. Citizen Participation */}
          <section className="bg-sky-50 rounded-2xl p-6 shadow-sm border-l-4 border-sky-400">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              7. Citizen Participation and Governance
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Local platform “Janmanch” for online meetings and village discussions.</li>
              <li>Use of SMS, WhatsApp, and IVRS alerts for updates and emergencies.</li>
              <li>Mobile app-based community reporting and issue escalation.</li>
              <li>Quarterly digital audits and feedback collection.</li>
            </ul>
          </section>

          {/* 8. Capacity Building */}
          <section>
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              8. Capacity Building and Digital Literacy
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Training programs for Panchayat employees on e-governance tools.</li>
              <li>Digital literacy workshops for villagers and women’s self-help groups.</li>
              <li>Use of community radio and tablets for awareness campaigns.</li>
            </ul>
          </section>

          {/* 9. Cybersecurity */}
          <section className="bg-blue-50 rounded-2xl p-6 shadow-sm border-l-4 border-blue-400">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              9. Data Governance and Cybersecurity
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Adoption of a Panchayat-level Data Policy for security and privacy.</li>
              <li>Encryption and secure credential storage for all systems.</li>
              <li>Monthly vulnerability checks and compliance reviews.</li>
            </ul>
          </section>

          {/* 10. Monitoring */}
          <section>
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              10. Monitoring, Evaluation and Audit
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Dashboard for Panchayat-level performance monitoring.</li>
              <li>Integration with PFMS for financial transparency.</li>
              <li>Monthly review meetings with auto-generated reports.</li>
              <li>SDG-based performance indicators for assessment.</li>
            </ul>
          </section>

          {/* 11. Institutional Framework */}
          <section className="bg-blue-50 rounded-2xl p-6 shadow-sm border-l-4 border-blue-400">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
              <Users className="w-5 h-5 text-blue-500" />
              11. Institutional Framework
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Formation of an e-Governance Task Force under the Sarpanch and Gram Sevaks.</li>
              <li>Appointment of a Village Digital Officer (VDO).</li>
              <li>Collaboration with District NIC, CSC, and Zilla Parishad IT Cell for technical aid.</li>
            </ul>
          </section>

          {/* 12. Funding */}
          <section>
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              12. Funding and Sustainability
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Utilization of 15th/16th Finance Commission and RGSA funds.</li>
              <li>CSR partnerships with private entities for digital projects.</li>
              <li>Green governance initiatives and solar-powered infrastructure.</li>
            </ul>
          </section>

          {/* 14. Review */}
          <section className="bg-blue-50 rounded-2xl p-6 shadow-sm border-l-4 border-blue-400">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">14. Review and Update</h2>
            <p>
              This policy will be periodically reviewed by Dholewadi Gram Panchayat in consultation with citizens and experts. Feedback will be collected through digital platforms and public meetings for continuous improvement.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 py-4">
          © Dholewadi Gram Panchayat | E-Governance Cell 2024
        </div>
      </div>
    </div>
  );
}

export default EGovernancePolicy;
