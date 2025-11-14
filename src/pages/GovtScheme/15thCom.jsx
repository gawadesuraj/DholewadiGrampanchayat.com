import React from "react";
import { FileText, Calendar, Award, TrendingUp, Landmark } from "lucide-react";

function FifteenthFinanceCommission() {
  return (
    <div className="min-h-screen w-full bg-white relative text-gray-800">
      {/* 🎨 Crosshatch Background Pattern */}
      <div
  className="absolute inset-0 z-0 pointer-events-none contrast-125 brightness-95"
  style={{
    backgroundImage: `
      repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.18) 2px, rgba(75, 85, 99, 0.18) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.16) 2px, rgba(107, 114, 128, 0.16) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.14) 2px, rgba(55, 65, 81, 0.14) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.12) 2px, rgba(31, 41, 55, 0.12) 3px, transparent 3px, transparent 8px)
    `,
  }}
/>


      {/* 📘 Page Content */}
      <div className="relative z-10 min-h-screen bg-gray-50/70 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white/90 shadow-xl backdrop-blur-sm rounded-3xl border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="relative bg-gradient-to-r from-amber-600 to-orange-700 p-8 sm:p-12 text-center text-white">
            <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full shadow-inner">
                  <Landmark className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                15th Finance Commission of India
              </h1>
              <p className="max-w-3xl mx-auto text-blue-100 text-lg">
                Detailed insights into the recommendations, objectives, and
                importance of the Fifteenth Finance Commission (2020–2026).
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 sm:p-12 space-y-10 text-gray-700">
            {/* Introduction */}
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-indigo-700 mb-3">
                <FileText className="w-6 h-6 text-indigo-500" />
                Introduction
              </h2>
              <p className="leading-relaxed text-gray-600">
                The <strong>Finance Commission of India</strong> is a
                constitutional body established under Article 280 of the Indian
                Constitution. Its primary role is to recommend the distribution
                of financial resources between the Central and State
                Governments.
              </p>
              <p className="mt-3 text-gray-600">
                The <strong>15th Finance Commission</strong> was constituted on{" "}
                <strong>3 January 2018</strong> under the chairmanship of{" "}
                <strong>Shri N. K. Singh</strong>, and it laid out its
                recommendations for the period{" "}
                <strong>April 1, 2020 to March 31, 2026</strong>.
              </p>
            </section>

            {/* Establishment Section */}
            <section className="bg-blue-50 rounded-2xl p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-3">
                <Calendar className="w-5 h-5 text-blue-500" />
                Establishment of the Commission
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Establishment Date:</strong> January 3, 2018
                </li>
                <li>
                  <strong>Chairman:</strong> Shri N. K. Singh (Former IAS
                  Officer)
                </li>
                <li>
                  <strong>Other Members:</strong> Ashok Lahiri, Anju Sarup,
                  Ramesh Chand, Amitabh Kant (added later)
                </li>
                <li>
                  <strong>Tenure:</strong> 6 years (2020–2026)
                </li>
              </ul>
            </section>

            {/* Key Recommendations */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
                <Award className="w-5 h-5 text-green-500" />
                Key Recommendations
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Grant Distribution to States:</strong> Recommended
                  allocation of <strong>41% of total tax revenue</strong> to
                  states (reduced from 42% in the 14th Commission due to J&K
                  reorganization).
                </li>
                <li>
                  <strong>Funds for Local Government Bodies:</strong> Proposed{" "}
                  <strong>₹4.36 lakh crore</strong> for Gram Panchayats,
                  Municipalities, and Zilla Parishads.
                </li>
                <li>
                  <strong>Special Protection Funds:</strong> Suggested creation
                  of a <strong>Defense Modernization Fund</strong>.
                </li>
                <li>
                  <strong>Guidance for SDGs:</strong> Encouraged investment in
                  sustainable development programs.
                </li>
              </ol>
            </section>

            {/* Maharashtra’s Share */}
            <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold text-green-700 mb-3">
                💰 Maharashtra’s Share
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The 15th Finance Commission recommended that{" "}
                <strong>Maharashtra</strong> receive a total grant of{" "}
                <strong>₹40,375 crore</strong> from the Central Government.
                These funds support{" "}
                <strong>
                  Gram Panchayats, Municipalities, and Zilla Parishads
                </strong>
                , ensuring equitable rural and urban development.
              </p>
            </section>

            {/* Importance */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-3">
                <TrendingUp className="w-5 h-5 text-indigo-500" />
                Importance of the 15th Finance Commission
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  First Commission post-COVID-19, focusing on{" "}
                  <strong>public health</strong> and{" "}
                  <strong>rural resilience</strong>.
                </li>
                <li>
                  Strengthened{" "}
                  <strong>local self-governance institutions</strong> for
                  decentralized administration.
                </li>
                <li>
                  Reduced <strong>regional disparities</strong> through fair
                  fiscal allocation.
                </li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl">
              <h2 className="text-xl font-semibold text-yellow-700 mb-3">
                🏁 Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Fifteenth Finance Commission has played a pivotal role in
                strengthening cooperative federalism and equitable financial
                distribution across India.
              </p>
              <p className="mt-3 text-gray-700">
                Its data-driven and transparent fiscal recommendations ensure
                balanced growth and empower{" "}
                <strong>local governance institutions</strong>.
              </p>
            </section>

            {/* Footer Accent */}
            <div className="pt-6 text-center text-sm text-gray-500 border-t border-gray-200">
              © Ministry of Finance, Government of India | Designed for Gram
              Panchayat Portal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifteenthFinanceCommission;
