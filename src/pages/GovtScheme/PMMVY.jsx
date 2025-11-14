import React from "react";
import {
  HeartPulse,
  FileText,
  CheckCircle2,
  ClipboardList,
  FileCheck,
  Info,
  Users,
  Link2,
} from "lucide-react";

function PradhanMantriMatruVandanaYojana() {
  return (
    <div
      className="min-h-screen relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Page Container */}
      <div className="max-w-5xl mx-auto bg-white/95 shadow-xl backdrop-blur-sm rounded-3xl border border-gray-200 overflow-hidden">

        {/* Header */}
        <div className="relative bg-gradient-to-r from-pink-700 to-rose-500 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                <HeartPulse className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Pradhan Mantri Matru Vandana Yojana (PMMVY)
            </h1>
            <p className="max-w-3xl mx-auto text-rose-100 text-lg">
              A maternity benefit program for pregnant and lactating mothers to promote safe motherhood and healthy child development.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12 space-y-10 text-gray-700">
          
          {/* Objective */}
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-rose-700 mb-3">
              <FileText className="w-6 h-6 text-rose-500" />
              Objective of the Scheme
            </h2>
            <p className="leading-relaxed text-gray-700">
              The <strong>Pradhan Mantri Matru Vandana Yojana (PMMVY)</strong> is a maternity benefit scheme implemented by the 
              <strong> Ministry of Women and Child Development</strong>, Government of India. It provides financial assistance 
              to pregnant and lactating women to help meet nutritional needs and ensure safe childbirth and maternal health.
            </p>
          </section>

          {/* Plan Features */}
          <section className="bg-rose-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-rose-700 mb-3">
              Plan Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Financial assistance of <strong>₹5,000</strong> is provided in three installments to pregnant women.
              </li>
              <li>
                The benefit applies only for the <strong>birth of the first child</strong>.
              </li>
              <li>
                Encourages regular health checkups, vaccinations, and nutritious diets for mother and child.
              </li>
            </ul>
          </section>

          {/* Qualifications */}
          <section>
            <h2 className="text-xl font-semibold text-rose-700 mb-3">Eligibility Criteria</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Pregnant women and breastfeeding mothers are eligible.</li>
              <li>Applicable only for the birth of the first living child.</li>
              <li>Women must be <strong>19 years of age or above</strong>.</li>
              <li>Government employees are <strong>not eligible</strong>.</li>
              <li>The beneficiary must be an Indian citizen.</li>
            </ul>
          </section>

          {/* Financial Benefits Table */}
          <section className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-rose-700 mb-3">
              Financial Benefits (in Three Installments)
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-rose-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left">Installment</th>
                    <th className="px-4 py-2 text-left">Terms</th>
                    <th className="px-4 py-2 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-t">
                    <td className="px-4 py-2">First</td>
                    <td className="px-4 py-2">After registering the pregnancy</td>
                    <td className="px-4 py-2">₹1,000</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Second</td>
                    <td className="px-4 py-2">After at least one antenatal check-up (ANC)</td>
                    <td className="px-4 py-2">₹2,000</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Third</td>
                    <td className="px-4 py-2">
                      After completing child vaccinations (BCG, OPV, DPT, HepB)
                    </td>
                    <td className="px-4 py-2">₹2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              <strong>Total ₹5,000</strong> — directly deposited into the beneficiary’s bank account.
            </p>
          </section>

          {/* Required Documents */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-rose-700 mb-3">
              <FileCheck className="w-5 h-5 text-rose-500" />
              Required Documents
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Aadhaar card of the pregnant woman</li>
              <li>Bank account details in the woman’s name</li>
              <li>Pregnancy registration certificate (ANM/Health Worker)</li>
              <li>Child’s birth certificate</li>
              <li>Vaccination certificate</li>
            </ul>
          </section>

          {/* Application Process */}
          <section className="bg-pink-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-rose-700 mb-3">
              Application Process
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Visit the nearest Anganwadi Center or Health Center.</li>
              <li>Fill out the PMMVY form and attach the required documents.</li>
              <li>Funds are transferred directly to the beneficiary’s bank account upon verification.</li>
            </ol>
          </section>

          {/* Contact */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-rose-700 mb-3">
              <Link2 className="w-5 h-5 text-rose-500" />
              Contact & Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Women and Child Development Department, Maharashtra</li>
              <li>Anganwadi Worker / ASHA Worker</li>
              <li>
                Official Websites:{" "}
                <a
                  href="https://wcd.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 underline hover:text-rose-800"
                >
                  https://wcd.nic.in
                </a>{" "}
                |{" "}
                <a
                  href="https://pmmvy-cas.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 underline hover:text-rose-800"
                >
                  https://pmmvy-cas.nic.in
                </a>
              </li>
            </ul>
          </section>

          {/* Usefulness */}
          <section className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-rose-700 mb-3">
              Why is this Plan Important?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Provides financial support for maternal and child nutrition.</li>
              <li>Promotes safe motherhood and healthy childbirth.</li>
              <li>Encourages regular health checkups and vaccinations.</li>
              <li>Improves awareness about government maternal health schemes.</li>
            </ul>
          </section>

          {/* Footer */}
          <div className="pt-6 text-center text-sm text-gray-500 border-t border-gray-200">
            © Ministry of Women and Child Development, Government of India | PMMVY
          </div>
        </div>
      </div>
    </div>
  );
}

export default PradhanMantriMatruVandanaYojana;
