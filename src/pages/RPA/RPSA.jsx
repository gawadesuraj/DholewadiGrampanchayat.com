import React from "react";
import { Link } from "react-router-dom";
import { FileText, Download } from "lucide-react";

// --- Helper Component to create the "Home / ..." structure ---
const PageHeader = ({ title, subtitle, breadcrumbs }) => {
  return (
    <header className="bg-gray-100 py-2">
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

// --- Document Configuration ---
const documents = [
  {
    title: "महाराष्ट्र लोकसेवा हक्क अधिनियम २०१५",
    fileUrl: "/rpa/RNI No.MAHBIL.pdf",
    fileSize: "59 KB",
    date: "2024-08-15",
  },
  {
    title: "आपले सरकार सेवा केंद्र केंद्रचालक यादी.सांगली जिल्हा",
    fileUrl: "/rpa/आपले सरकार सेवा केंद्र केंद्रचालक यादी.सांगली जिल्हा.pdf",
    fileSize: "278 KB",
    date: "2024-07-30",
  },
  {
    title: "महाराष्ट्र जिल्हा परिषदा व पंचायत समिती लेखा संहिता 1968",
    fileUrl:
      "/rpa/महाराष्ट्र जिल्हा परिषदा व पंचायत समिती लेखा संहिता 1968.pdf",
    fileSize: "4981 KB",
    date: "2024-05-10",
  },
  {
    title:
      "राष्ट्र पुरुष / थोर व्यक्ती यांच्या जयंती आणि राष्ट्रीय दिनांचे कार्यक्रम साजरे करण्याबाबत",
    fileUrl:
      "/rpa/थोर व्यक्ती यांच्या जयंती आणि राष्ट्रीय दिनांचे कार्यक्रम साजरे करण्याबाबत.pdf",
    fileSize: "263 KB",
    date: "2024-06-22",
  },
  {
    title: "महाराष्ट्र लोकसेवा हक्क अधिधियम-2015",
    fileUrl: "/rpa/महाराष्ट्र लोकसेवा हक्क अधिधियम-2015.pdf",
    fileSize: "213 KB",
    date: "2024-05-10",
  },
  {
    title: "महाराष्ट्र लोकसेवा हक्क अध्यादेश-2015",
    fileUrl: "/rpa/महाराष्ट्र लोकसेवा हक्क अध्यादेश-2015.pdf",
    fileSize: "873 KB",
    date: "2024-05-10",
  },
  {
    title: "सार्वजनिक सुट्ट्या 2025",
    fileUrl: "/rpa/सार्वजनिक सुट्ट्या 2025.pdf",
    fileSize: "734 KB",
    date: "2024-05-10",
  },
  {
    title:
      "महाराष्ट्र राज्य सेवा हक्क आयोगाबाबतची संक्षिप्त माहिती. २६.०१.२०२४",
    fileUrl: "/rpa/महाराष्ट्रराज्यसेवहक्कआयोगाबाबतचीसंक्षिप्तमाहिती.pdf",
    fileSize: "548 KB",
    date: "2024-05-10",
  },
  {
    title: "महाराष्ट्र लोकसेवा हक्क अधिनियम संकेतस्थळ",
    fileUrl:
      "https://aaplesarkar.mahaonline.gov.in/en/CommonForm/RigthToServiceAct",
    fileSize: "Website",
    date: "N/A",
  },
];

function RPSA() {
  const breadcrumbs = [{ label: "RPSA", href: null }];

  return (
    <div>
      <PageHeader
        title="लोकसेवा हक्क अधिनियम २०१५"
        subtitle="पारदर्शक, गतिमान व विहित कालमर्यादेत सेवा मिळवण्यासाठीचा हक्क."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="prose text-justify leading-relaxed max-w-none">
              महाराष्ट्र राज्यातील नागरिकांना शासनामार्फत व शासनाचे अधिनस्त सर्व
              सार्वजनिक प्राधिकरणांमार्फत दिल्या जाणाऱ्या अधिसूचित सेवा
              पारदर्शक, गतिमान व विहित कालमर्यादेत देण्यासाठी महाराष्ट्र लोकसेवा
              हक्क अधिनियम 2015 पारित करण्यात आला असून तो दि. 28.04.2015 पासून
              अंमलात आहे. नागरिकांना सुलभ व कालमर्यादेत सेवा मिळाव्यात हे त्याचे
              उद्दिष्ट आहे. वरीलप्रमाणे अधिसूचित सेवा नागरिकांना दिल्या जात आहेत
              किंवा नाही यावर देखरेख, समन्वय, सनियंत्रण ठेवण्यासाठी व या
              संदर्भात सुधारणा सुचविण्यासाठी उपरोक्त कायद्यान्वये महाराष्ट्र
              राज्य सेवा हक्क आयोग गठीत करण्यात आला असून आयोगामध्ये एक मुख्य
              आयुक्त व सहा आयुक्त कार्यरत आहेत. आयोगाचे मुख्यालय नविन प्रशासकीय
              भवन, मंत्रालयासमोर, मुंबई येथे असून सहा विभागातील मुख्यालयाच्या
              ठिकाणी आयुक्तांची कार्यालये आहेत. पात्र नागरीकांना विहित वेळेत
              सेवा न मिळाल्यास अथवा नियमोचित कारणाशिवाय ती नाकारल्यास अशा
              निर्णयाविरुद्ध संबंधितांना वरीष्ठांकडे प्रथम व द्वितीय अपिल करता
              येते व तरीही समाधान न झाल्यास आयोगाकडे तृतीय अपिल करता येते.
              कसूरदार अधिकाऱ्यास प्रतिप्रकरण रु. 5000/- पर्यंत दंड होऊ शकतो. या
              विभागामार्फत दिल्या जाणाऱ्या अधिसुचित सेवांची यादी सोबतच्या
              प्रपत्रात दिली आहे.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {documents.map((doc, index) => (
              <a
                key={index}
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <FileText className="h-8 w-8 text-blue-500" />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h3>
                  <div className="mt-1 flex items-center space-x-3 text-xs text-gray-500">
                    {doc.fileSize && <span>{doc.fileSize}</span>}
                    {doc.date !== "N/A" && (
                      <span className="text-gray-300">•</span>
                    )}
                    {doc.date !== "N/A" && <span>Published: {doc.date}</span>}
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Download className="h-6 w-6 text-gray-400" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default RPSA;
