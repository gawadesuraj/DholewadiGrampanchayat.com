import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/ui/Loading";
import TaxPayment from "./pages/TaxPayment/TaxPayment";
import UserRegistration from "./services/UserRegistration";
import CheckUserId from "./services/CheckUserId";
import TrackApplication from "./pages/Services/TrackApplication";
import CertificateApplication from "./pages/certificates/CertificateApplication";

import BirthCertificateForm from "./pages/Services/forms/BirthCertificate";
import DeathCertificateForm from "./pages/Services/forms/DeathCertificate";
import MarriageCertificateForm from "./pages/Services/forms/MarriageCertificate";
import Extract8AForm from "./pages/Services/forms/8AExtract";

import PovertyRationCertificateForm from "./pages/Services/forms/PovertyRationCertificate";
import NoPendingGramPanchayatForm from "./pages/Services/forms/NoPendingGramPanchayat";
import ResidenceCertificateForm from "./pages/Services/forms/ResidenceCertificate";
import IncomeCertificateForm from "./pages/Services/forms/IncomeCertificate";
import PropertyTaxPaymentForm from "./pages/Services/forms/PropertyTaxPayment";
import WaterConnectionForm from "./pages/Services/forms/WaterConnection";
import TradeLicenseForm from "./pages/Services/forms/TradeLicense";

// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Departments = lazy(() => import("./pages/Departments/Departments"));
const DepartmentDetail = lazy(() =>
  import("./pages/Departments/DepartmentDetail")
);
const Services = lazy(() => import("./pages/Services/Services"));
const ServiceDetail = lazy(() => import("./pages/Services/ServiceDetail"));
const News = lazy(() => import("./pages/News/News"));
const NewsDetail = lazy(() => import("./pages/News/NewsDetail"));
const Events = lazy(() => import("./pages/Events/Events"));
const EventDetail = lazy(() => import("./pages/Events/EventDetail"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const RTI = lazy(() => import("./pages/RTI/RTI"));
const Officers = lazy(() => import("./pages/Officers/Officers"));
const Grievance = lazy(() => import("./pages/Grievance/Grievance"));
const RPSA = lazy(() => import("./pages/RPA/RPSA"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const CitizensCharter = lazy(() =>
  import("./pages/CitizensCharter/CitizensCharter")
);
const AyushmanBharatScheme = lazy(() =>
  import("./pages/GovtScheme/AyushmanBharatScheme")
);
const FifteenCommission = lazy(() => import("./pages/GovtScheme/15thCom"));
const Ladli = lazy(() => import("./pages/GovtScheme/LadkiBahinYojana"));
const BhagyaShree = lazy(() => import("./pages/GovtScheme/BhagyashreeScheme"));
const MGNREGA = lazy(() => import("./pages/GovtScheme/MGNREGA"));
const SWACHH = lazy(() => import("./pages/GovtScheme/SwachhBharatMission"));
const PMMVY = lazy(() => import("./pages/GovtScheme/PMMVY"));
const Declaration = lazy(() => import("./pages/Comfort/Declarations"));
const Links = lazy(() => import("./pages/Comfort/Links"));
const Weather = lazy(() => import("./pages/Comfort/Weather"));
const EGovernance = lazy(() =>
  import("./pages/E-Governance/EGovernancePolicy")
);
const Elearning = lazy(() => import("./pages/Comfort/Elearning"));
const PMAY = lazy(() => import("./pages/Beneficiary/PMAY"));
const MNREGA = lazy(() => import("./pages/Beneficiary/MNREGA"));

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:slug" element={<DepartmentDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rti" element={<RTI />} />
        <Route path="/rpa" element={<RPSA />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/citizensCharter" element={<CitizensCharter />} />
        <Route path="/ayushman-bharat" element={<AyushmanBharatScheme />} />
        <Route path="/15thCommission" element={<FifteenCommission />} />
        <Route path="/ladli-bahin" element={<Ladli />} />
        <Route path="/bhagyashree" element={<BhagyaShree />} />
        <Route path="/mgnrega" element={<MGNREGA />} />
        <Route path="/swachh-bharat" element={<SWACHH />} />
        <Route path="/PMMVY" element={<PMMVY />} />
        <Route path="/declaration" element={<Declaration />} />
        <Route path="/imp-links" element={<Links />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/e-governance" element={<EGovernance />} />
        <Route path="/e-learning" element={<Elearning />} />
        <Route path="/pmay" element={<PMAY />} />
        <Route path="/services/register" element={<UserRegistration />} />
        <Route path="/services/property-tax/apply" element={<TaxPayment />} />
        <Route path="/services/check-user" element={<CheckUserId />} />
        <Route path="/services/track" element={<TrackApplication />} />
        <Route
          path="/services/certificate-application"
          element={<CertificateApplication />}
        />
        <Route path="/mnrega" element={<MNREGA />} />
        <Route
          path="/services/birth-certificate"
          element={<BirthCertificateForm />}
        />
        <Route
          path="/services/death-certificate"
          element={<DeathCertificateForm />}
        />
        <Route
          path="/services/marriage-certificate"
          element={<MarriageCertificateForm />}
        />
        <Route path="/services/8a-extract" element={<Extract8AForm />} />
        <Route
          path="/services/no-pending-grampanchayat"
          element={<NoPendingGramPanchayatForm />}
        />
        <Route
          path="/services/poverty-ration-certificate"
          element={<PovertyRationCertificateForm />}
        />

        <Route
          path="/services/residence-certificate"
          element={<ResidenceCertificateForm />}
        />

        <Route
          path="/services/income-certificate"
          element={<IncomeCertificateForm />}
        />

        <Route
          path="/services/property-tax"
          element={<PropertyTaxPaymentForm />}
        />

        <Route
          path="/services/water-connection"
          element={<WaterConnectionForm />}
        />

        <Route path="/services/trade-license" element={<TradeLicenseForm />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
