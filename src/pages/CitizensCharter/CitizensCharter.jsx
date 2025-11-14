// CitizensCharter.jsx
import React from "react";
import { Link } from "react-router-dom";

// --- Helper Component for Breadcrumb Header ---
const PageHeader = ({ title, subtitle, breadcrumbs }) => {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="flex items-center text-sm text-gray-500 flex-wrap">
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

// --- Document Configuration ---
const charterDocuments = [
  {
    id: 1,
    name: "परिशिष्ट-०१: ग्राम विकास विभागाची (मंत्रालय स्तर) संरचना व उद्दिष्टे",
    docPdf: "/dholewadi/1.pdf",
  },
  {
    id: 2,
    name: "परिशिष्ट-०२: पंचायत राज संस्थांची योजनाविषयक जबाबदारी",
    docPdf: "/dholewadi/2.pdf",
  },
  {
    id: 3,
    name: "परिशिष्ठ-०३: पंचायत राज संस्थांची संविधानिक जबाबदारी",
    docPdf: "/dholewadi/2 (1).pdf",
  },
  {
    id: 4,
    name: "ग्राम विकास विभाग सनद",
    docPdf: "/dholewadi/4.pdf",
  },
];
// --- End of Configuration ---

const CitizensCharter = () => {
  const breadcrumbs = [{ label: "Citizens Charter", href: null }];

  return (
    <div>
      <PageHeader
        title="नागरिकांची सनद (Charter of Citizens)"
        subtitle="A commitment to provide services in a timely and transparent manner."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Charter Documents Section */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-4">
              ग्राम विकास विभाग सनद
            </h3>

            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="min-w-full bg-white text-sm sm:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wide">
                      दस्तऐवज (Document)
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wide">
                      डाउनलोड (Download)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {charterDocuments.map((doc) => (
                    <tr
                      key={doc.id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-4 sm:px-6 py-4 whitespace-normal text-gray-800 break-words">
                        {doc.name}
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                        <a
                          href={doc.docPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full sm:w-auto px-3 sm:px-4 py-2 bg-blue-600 text-white font-semibold text-xs sm:text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 hidden sm:inline"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          View / डाउनलोड करा
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CitizensCharter;
