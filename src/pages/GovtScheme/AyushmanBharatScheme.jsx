import React from "react";
import { Heart, FileText, CheckCircle, Phone, FileCheck } from "lucide-react";

function AyushmanBharatScheme() {
  return (
    <div
      className="min-h-screen relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Page Container */}
      <div className="max-w-5xl mx-auto bg-white/90 shadow-xl backdrop-blur-sm rounded-3xl border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)
            </h1>
            <p className="max-w-3xl mx-auto text-blue-100 text-lg">
              India’s flagship health protection scheme ensuring affordable,
              accessible, and quality healthcare to millions of families.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-12 space-y-10 text-gray-700">
          {/* Objective */}
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-blue-700 mb-3">
              <FileText className="w-6 h-6 text-blue-500" />
              Objective of the Scheme
            </h2>
            <p className="leading-relaxed text-gray-600">
              The <strong>Ayushman Bharat Yojana</strong> is an ambitious health
              initiative by the Government of India aimed to{" "}
              <span className="text-blue-700 font-medium">
                provide free healthcare to poor and needy families
              </span>
              . The scheme ensures that no citizen is deprived of quality
              treatment due to financial constraints, as{" "}
              <strong>the government covers hospital treatment costs</strong> for
              major illnesses and surgeries.
            </p>
          </section>

          {/* Plan Features */}
          <section className="bg-blue-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              💡 Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Free health insurance cover up to{" "}
                <strong>₹5 lakh per family per year</strong>.
              </li>
              <li>Cashless & paperless process across empanelled hospitals.</li>
              <li>
                Includes surgeries, diagnostic tests, medications, and
                hospitalization.
              </li>
              <li>
                Services available in{" "}
                <strong>15,000+ hospitals across India</strong>.
              </li>
            </ul>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              🧾 Eligibility
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Families listed in the <strong>SECC 2011</strong> database in
                rural & urban areas.
              </li>
              <li>Workers in the unorganized sector.</li>
              <li>
                <strong>No registration fee or premium</strong> is required to
                avail benefits.
              </li>
              <li>
                In Maharashtra, implemented with{" "}
                <strong>Mahatma Phule Jan Arogya Yojana (MPJAY)</strong>.
              </li>
            </ul>
          </section>

          {/* Benefits */}
          <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              🎯 Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Health insurance up to <strong>₹5 lakh</strong> per family per
                year.
              </li>
              <li>Over 1300+ treatment packages (Surgery, Cancer, Dialysis).</li>
              <li>
                Covers 3 days before and 15 days after hospitalization,
                including medicines and tests.
              </li>
              <li>Free treatment in public & private empanelled hospitals.</li>
            </ul>
          </section>

          {/* Facilities */}
          <section>
            <h2 className="text-xl font-semibold text-indigo-700 mb-3">
              🏥 Facilities Available
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Cashless treatment across empanelled hospitals.</li>
              <li>24x7 helpline and convenience centers.</li>
              <li>Paperless admission and discharge process.</li>
            </ul>
          </section>

          {/* Documents */}
          <section>
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              <FileCheck className="inline-block w-5 h-5 mr-1 text-amber-500" />
              Required Documents
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Aadhar Card</li>
              <li>Ration card or SECC list inclusion</li>
              <li>Ayushman Bharat (ABHA) Health ID</li>
              <li>Mobile number linked to beneficiary</li>
            </ul>
          </section>

          {/* Application Process */}
          <section className="bg-yellow-50 p-6 rounded-2xl shadow-sm border-l-4 border-yellow-400">
            <h2 className="text-xl font-semibold text-yellow-700 mb-3">
              🧭 Application & Registration Process
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Visit nearest{" "}
                <strong>Ayushman Bharat Facility Center (CSC / Jan Seva Kendra)</strong>.
              </li>
              <li>
                Check eligibility list at{" "}
                <a
                  href="https://pmjay.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  https://pmjay.gov.in
                </a>
                .
              </li>
              <li>Get AB-PMJAY card issued with required documents.</li>
              <li>Show the card for cashless treatment at hospitals.</li>
            </ol>
          </section>

          {/* Contact */}
          <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-500" />
              Contact & Helplines
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>National Helpline:</strong> 14555 / 1800-111-565
              </li>
              <li>
                <strong>Official Website:</strong>{" "}
                <a
                  href="https://pmjay.gov.in"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  https://pmjay.gov.in
                </a>
              </li>
              <li>
                <strong>Maharashtra Portal:</strong>{" "}
                <a
                  href="https://www.jeevandayee.gov.in"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  https://www.jeevandayee.gov.in
                </a>
              </li>
            </ul>
          </section>

          {/* Important Note */}
          <section className="bg-gradient-to-r from-yellow-100 to-orange-50 p-6 rounded-2xl border-l-4 border-orange-400">
            <h2 className="text-lg font-semibold text-orange-700 mb-2">
              ⚠️ Important Note
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In Maharashtra, the Ayushman Bharat Yojana operates jointly with the{" "}
              <strong>Mahatma Phule Jan Arogya Yojana (MPJAY)</strong>.  
              Beneficiaries can avail benefits under both schemes after confirming
              their name in the eligibility list before hospitalization.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AyushmanBharatScheme;
