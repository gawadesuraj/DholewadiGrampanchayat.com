import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// --- Helper Components (Defined within this file to resolve import errors) ---

/**
 * A reusable UI card component.
 */
const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * A component to display a page header with title, subtitle, and breadcrumbs.
 */
const PageHeader = ({ title, subtitle, breadcrumbs }) => {
  return (
    <header className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="flex items-center text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                <span className="mx-2">/</span>
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-blue-600">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-700">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

// --- Committee Data from Document ---
const committeesData = [
  {
    name: "ग्राम आरोग्य पोषण, पाणीपुरवठा व स्वच्छता समिती",
    members: [
      {
        id: 1,
        name: "श्री. रणजीत सर्जेराव मोरे",
        designation: "सरपंच",
        role: "अध्यक्ष",
      },
      {
        id: 2,
        name: "सौ. सविता मारुती मोरे",
        designation: "आशा",
        role: "सचिव",
      },
      {
        id: 3,
        name: "श्रीमती. सुधाताई बबन यादव",
        designation: "अंगणवाडी सेविका",
        role: "सदस्या",
      },
      {
        id: 4,
        name: "सौ. अर्चना नानासो साळुंखे",
        designation: "C.R.P.",
        role: "सदस्या",
      },
      {
        id: 5,
        name: "सौ. तेजस्वीनी संदीप जाधव",
        designation: "महिला सदस्या",
        role: "सदस्या",
      },
      {
        id: 6,
        name: "सौ. शारदा बाजीराव मोरे",
        designation: "महिला सदस्या",
        role: "सदस्या",
      },
      {
        id: 7,
        name: "श्री. आप्पासो सोपान मोरे",
        designation: "पुरुष सदस्य",
        role: "सदस्य",
      },
      {
        id: 8,
        name: "श्री. संजय वसंत मोरे",
        designation: "पा.पु. कर्मचारी",
        role: "सदस्य",
      },
      {
        id: 9,
        name: "श्री. अमित वसंत पवार",
        designation: "मनरेगा समन्वयक",
        role: "सदस्य",
      },
      {
        id: 10,
        name: "सौ. शुभांगी संजय पवार",
        designation: "बचत गट",
        role: "सदस्या",
      },
      {
        id: 11,
        name: "श्री. सुरज सुनिल ढोले",
        designation: "ग्रामस्थ",
        role: "सदस्य",
      },
    ],
  },
  {
    name: "बांधकाम समिती",
    members: [
      {
        id: 1,
        name: "श्री. रणजीत सर्जेराव मोरे",
        designation: "सरपंच",
        role: "अध्यक्ष",
      },
      {
        id: 2,
        name: "श्री. माणिक राजाराम पाटील",
        designation: "ग्रामसेवक",
        role: "सचिव",
      },
      {
        id: 3,
        name: "श्री. सुनिल आनंदा मोरे",
        designation: "अभियंता",
        role: "सदस्य",
      },
      {
        id: 4,
        name: "श्री. संदीप बाबुराव मोरे",
        designation: "कुशल मजूर",
        role: "सदस्य",
      },
    ],
  },
  {
    name: "कला/क्रीडा/सांस्कृतिक/पर्यटन समिती",
    members: [
      {
        id: 1,
        name: "सुरज सुनिल ढोले",
        designation: "ग्रामस्थ",
        role: "अध्यक्ष",
      },
      {
        id: 2,
        name: "विनायक भानुदास मोरे",
        designation: "ग्रामस्थ",
        role: "उप अध्यक्ष",
      },
      {
        id: 3,
        name: "उदय महादेव मोरे",
        designation: "ग्रामस्थ",
        role: "सदस्य",
      },
      {
        id: 4,
        name: "महादेव शिवाजी मोरे",
        designation: "ग्रामस्थ",
        role: "सदस्य",
      },
      {
        id: 5,
        name: "सुहास दिनकर साळुंखे",
        designation: "ग्रामस्थ",
        role: "सदस्य",
      },
      {
        id: 6,
        name: "नानासो शिवाजी साळुंखे",
        designation: "ग्रामस्थ",
        role: "सदस्य",
      },
      { id: 7, name: "महेश बाळू मोरे", designation: "ग्रामस्थ", role: "सदस्य" },
      { id: 8, name: "मनोज गोरख मोरे", designation: "ग्रामस्थ", role: "सदस्य" },
      {
        id: 9,
        name: "दिग्विजय दिलीप मोरे",
        designation: "ग्रामस्थ",
        role: "सदस्य",
      },
      {
        id: 10,
        name: "प्रविण बाळकृष्ण मोरे",
        designation: "ग्रामस्थ",
        role: "सदस्य",
      },
      {
        id: 11,
        name: "प्रसाद रविकांत नायकवडी",
        designation: "ग्रामस्थ",
        role: "सदस्य",
      },
      {
        id: 12,
        name: "सर्वजित दिलीप मोरे",
        designation: "ग्रामस्थ",
        role: "सदस्य",
      },
    ],
  },
  {
    name: "तंटामुक्ती समिती",
    members: [
      { id: 1, name: "श्री. सुरेश तानाजी मोरे", role: "अध्यक्ष" },
      { id: 2, name: "श्री. बाबासो भगवान मोरे", role: "उप अध्यक्ष" },
      { id: 3, name: "श्री. अमृत आण्णा मोरे", role: "पोलीस पाटील" },
      { id: 4, name: "श्री. राजेश बाजीराव पाटील", role: "सदस्य" },
      { id: 5, name: "श्री. अतुल शिवाजी मोरे", role: "सदस्य" },
      { id: 6, name: "सौ. शारदा बाजीराव मोरे", role: "सदस्य" },
      { id: 7, name: "श्री. शिवाजी रघुनाथ मोरे", role: "सदस्य" },
      { id: 8, name: "श्री. उत्तम तुकाराम मोरे", role: "सदस्य" },
      { id: 9, name: "श्री. सुनिल आनंदा मोरे", role: "सदस्य" },
      { id: 10, name: "श्री. सुनिल तुकाराम ढोले", role: "सदस्य" },
      { id: 11, name: "श्री. आप्पासो दादू ढोले", role: "सदस्य" },
    ],
  },
];

function Departments() {
  const breadcrumbs = [{ label: "Departments", href: null }];
  const [selectedCommittee, setSelectedCommittee] = useState(committeesData[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const newTimeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // 200ms delay before closing
    setTimeoutId(newTimeoutId);
  };

  return (
    <div>
      <PageHeader
        title="ग्रामपंचायत समित्या (Gram Panchayat Committees)"
        subtitle="गावाच्या विकासासाठी कार्यरत असलेल्या विविध समित्या."
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto py-12 px-4 space-y-8">
        {/* Dropdown Menu */}
        <div
          className="relative inline-block text-left w-full md:w-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              {selectedCommittee.name}
              <ChevronDown className="-mr-1 ml-2 h-5 w-5" />
            </button>
          </div>

          {isDropdownOpen && (
            <div className="origin-top-left absolute left-0 mt-2 w-full md:w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {committeesData.map((committee, index) => (
                  <a
                    href="#"
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCommittee(committee);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {committee.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Selected Committee Chart */}
        {selectedCommittee && (
          <Card>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
                {selectedCommittee.name}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        अ.क्र.
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        नाव
                      </th>
                      {selectedCommittee.members[0].designation && (
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          पदनाम
                        </th>
                      )}
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        समिती पदनाम
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {selectedCommittee.members.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {member.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {member.name}
                        </td>
                        {member.designation && (
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {member.designation}
                          </td>
                        )}
                        {!selectedCommittee.members[0].designation &&
                          member.designation === undefined && <td></td>}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {member.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Departments;
