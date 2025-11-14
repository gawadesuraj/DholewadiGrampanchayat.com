import React from "react";
import { Users } from "lucide-react";

function ImportantLinks() {
  const links = [
    { no: 1, desc: "Train Booking", url: "https://www.irctc.co.in/nget/train-search" },
    { no: 2, desc: "Passport application", url: "https://passportindia.gov.in" },
    { no: 3, desc: "Driving License, Vehicle RC, etc.", url: "https://parivahan.gov.in" },
    { no: 4, desc: "Voter ID registration/correction", url: "https://voterportal.eci.gov.in" },
    { no: 5, desc: "Digital storage of government documents", url: "https://digilocker.gov.in" },
    { no: 6, desc: "Common Service Center portal", url: "https://sewa.csc.gov.in" },
    { no: 7, desc: "PM-KISAN beneficiary list and status", url: "https://pmkisan.gov.in" },
    { no: 8, desc: "Track DBT payments", url: "https://pfms.nic.in" },
    { no: 9, desc: "UPI, AePS, and financial infrastructure", url: "https://npci.org.in" },
    { no: 10, desc: "Insurance schemes: PMJJBY, PMSBY, APY", url: "https://jansuraksha.gov.in" },
    { no: 11, desc: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in" },
    { no: 12, desc: "National Testing Agency exams (NEET, JEE, etc.)", url: "https://nta.ac.in" },
    { no: 13, desc: "NCERT textbooks and curriculum", url: "https://ncert.nic.in" },
    { no: 14, desc: "University Grants Commission updates", url: "https://ugc.ac.in" },
    { no: 15, desc: "CBSE board exam info and results", url: "https://cbse.gov.in" },
    { no: 16, desc: "Ayushman Bharat (PM-JAY) health card", url: "https://ayushmanbharat.gov.in" },
    { no: 17, desc: "Ministry of Health updates", url: "https://mohfw.gov.in" },
    { no: 18, desc: "Social welfare schemes & details", url: "https://socialjustice.gov.in" },
    { no: 19, desc: "Lodge complaints to any govt dept", url: "https://pgportal.gov.in" },
    { no: 20, desc: "File RTI applications online", url: "https://rtionline.gov.in" },
    { no: 21, desc: "Case status in Indian courts", url: "https://ecourts.gov.in" },
    { no: 22, desc: "Consumer complaints", url: "https://consumerhelpline.gov.in" },
    { no: 23, desc: "National Portal of India – access to all govt services", url: "https://india.gov.in" },
    { no: 24, desc: "Citizen engagement platform for governance", url: "https://mygov.in" },
    { no: 25, desc: "Aadhaar card services", url: "https://uidai.gov.in" },
    { no: 26, desc: "Prime Minister’s official site and updates", url: "https://pmindia.gov.in" },
    { no: 27, desc: "MGNREGA job card and scheme info", url: "https://nrega.nic.in" },
    { no: 28, desc: "Income tax filing and PAN services", url: "https://incometax.gov.in" },
    { no: 29, desc: "Provident fund & UAN info", url: "https://epfindia.gov.in" },
    { no: 30, desc: "e-SHRAM card for unorganized workers", url: "https://eshram.gov.in" },
    { no: 31, desc: "PAN & TDS-related info", url: "https://nsdl.co.in" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-indigo-700 to-blue-700 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Important Government & Citizen Service Links
            </h1>
            <p className="text-blue-100 text-lg">
              Quick access to essential online portals and government services for citizens.
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="p-8 sm:p-12 overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold border-b border-gray-200">
                  S.No.
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold border-b border-gray-200">
                  Description
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold border-b border-gray-200">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {links.map((link, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="py-3 px-4 text-gray-700 text-sm border-b border-gray-200">
                    {link.no}
                  </td>
                  <td className="py-3 px-4 text-gray-800 text-sm border-b border-gray-200 font-medium">
                    {link.desc}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-indigo-700 font-medium text-sm underline underline-offset-2"
                    >
                      {link.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 py-4">
          © Government of Maharashtra | Panchayat Samiti Shirala
        </div>
      </div>
    </div>
  );
}

export default ImportantLinks;
