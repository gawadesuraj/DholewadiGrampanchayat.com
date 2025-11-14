import React from "react";
import {
  FileText,
  CheckCircle2,
  ClipboardList,
  BarChart3,
  FileCheck,
  Users,
} from "lucide-react";

function MGNREGA() {
  return (
    <div
      className="min-h-screen relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Uniform width across all scheme pages */}
      <div className="max-w-5xl mx-auto bg-white/95 shadow-xl backdrop-blur-sm rounded-3xl border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-green-700 to-emerald-600 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGA)
            </h1>
            <p className="max-w-3xl mx-auto text-emerald-100 text-lg">
              A flagship rural employment program ensuring 100 days of guaranteed work 
              and infrastructure development across India.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12 space-y-10 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-green-700 mb-3">
              <FileText className="w-6 h-6 text-emerald-500" />
              Introduction
            </h2>
            <p className="leading-relaxed text-gray-700">
              The <strong>Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)</strong> 
              was launched by the Government of India in 2005. It ensures at least{" "}
              <strong>100 days of wage employment</strong> annually to every rural household 
              whose adult members volunteer for unskilled manual work.
            </p>
          </section>

          {/* Objectives */}
          <section className="bg-green-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Objectives of the Scheme
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Reduce unemployment in rural areas.</li>
              <li>Provide sustainable income sources for rural families.</li>
              <li>Promote labor-intensive works for infrastructure development.</li>
              <li>Encourage women’s participation and empowerment.</li>
              <li>Support environmental sustainability and resource conservation.</li>
            </ul>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "100 days of guaranteed employment per household.",
                "Equal pay for men and women.",
                "Direct wage payments to bank or post office accounts.",
                "Time-bound implementation through Gram Panchayats.",
                "Focus on water conservation, rural connectivity, and afforestation.",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-emerald-50 border border-emerald-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Process */}
          <section className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
              <ClipboardList className="w-5 h-5 text-green-500" />
              Implementation Process
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-green-800 mb-1">1. Application Process</h3>
                <p>Applicants can submit forms to the Gram Panchayat. Any adult family member (18+) may apply.</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">2. Job Card Issuance</h3>
                <p>Eligible families receive job cards within 15 days, listing household members and entitlements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">3. Getting Employment</h3>
                <p>Job card holders request work and are provided employment within 15 days.</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">4. Wage Payment</h3>
                <p>Wages are credited directly into bank accounts within 15 days post completion of work.</p>
              </div>
            </div>
          </section>

          {/* Performance in Maharashtra */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
              <BarChart3 className="w-5 h-5 text-green-500" />
              Performance in Maharashtra
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>1 crore+</strong> laborers registered under MGNREGA in 2023–24.</li>
              <li><strong>40 lakh+</strong> families benefited from employment.</li>
              <li>Over 1.5 million rural infrastructure projects completed.</li>
            </ul>
          </section>

          {/* Importance */}
          <section className="bg-green-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Significance
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Promotes rural employment and prevents migration.</li>
              <li>Ensures gender equality — 45% women participation.</li>
              <li>Improves natural resource management and sustainability.</li>
              <li>Strengthens local governance through Panchayati Raj Institutions.</li>
            </ul>
          </section>

          {/* Required Documents */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-3">
              <FileCheck className="w-5 h-5 text-green-500" />
              Required Documents
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Aadhaar Card</li>
              <li>Voter ID Card</li>
              <li>Bank Account Details</li>
              <li>Job Card (if already issued)</li>
            </ul>
          </section>

          {/* Infographic Summary */}
          <section className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Summary at a Glance
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 border border-green-100 rounded-xl bg-white text-center shadow-sm">
                <h4 className="text-green-700 font-semibold mb-1">Employment Guarantee</h4>
                <p className="text-gray-600 text-sm">100 days of work for every rural family</p>
              </div>
              <div className="p-4 border border-green-100 rounded-xl bg-white text-center shadow-sm">
                <h4 className="text-green-700 font-semibold mb-1">Women Participation</h4>
                <p className="text-gray-600 text-sm">Over 45% of workers are women</p>
              </div>
              <div className="p-4 border border-green-100 rounded-xl bg-white text-center shadow-sm">
                <h4 className="text-green-700 font-semibold mb-1">Rural Development</h4>
                <p className="text-gray-600 text-sm">1.5M+ projects for roads, water, and forestry</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-6 text-center text-sm text-gray-500 border-t border-gray-200">
            © Government of India | Ministry of Rural Development | MGNREGA
          </div>
        </div>
      </div>
    </div>
  );
}

export default MGNREGA;
