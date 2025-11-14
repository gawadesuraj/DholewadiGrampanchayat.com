// FILE: src/components/Logo.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Import your image here
// import yourLogoImage from "/Dholewadi-GramPanchayat/src/assets/grampanchayat.png";
import yourLogoImage from "../../assets/grampanchayat.png";

function Logo() {
  const { t } = useTranslation(); // Removed i18n as it's not directly used in the current context

  return (
    <Link
      to="/"
      className="flex items-center space-x-3 group flex-shrink-0"
      aria-label={t("header.siteName")} // Changed to siteName for better context from your JSON
    >
      {/* Government Emblem */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
        {/* Replace with actual Maharashtra Government emblem/logo image */}
        <div className="w-full h-full bg-gradient-to-br from-orange-400 via-white to-green-500 rounded-full flex items-center justify-center border-2 border-gray-300 shadow-md">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-900 rounded-full flex items-center justify-center overflow-hidden">
            {/* --- Replaced PS text with an <img> tag --- */}
            <img
              src={yourLogoImage}
              alt={t("header.siteName")} // Alt text for accessibility
              className="w-full h-full object-cover p-1" // Added p-1 for a slight padding, adjust as needed
            />
          </div>
        </div>
      </div>
      {/* Optional: You can add the site name text next to the logo if desired */}
      {/* <span className="text-xl font-bold text-gray-800 hidden md:block">
        {t("header.siteName")}
      </span> */}
    </Link>
  );
}

export default Logo;