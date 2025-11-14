import React, { useState } from "react";
// We no longer import react-i18next

// --- Helper Components & Placeholders to prevent errors ---

// Inlined SVGs for icons (replaces 'react-icons/fa6')
const FaPhone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
    />
  </svg>
);
const FaEnvelope = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.5 339.2c-22.8 17.1-54.3 17.1-77.1 0L0 176zM512 112c0-10.9-4.8-20.9-12.7-27.6L278.7 236.4c-13.4 10.1-31.4 10.1-44.8 0L12.7 84.4C4.8 91.1 0 101.1 0 112v1.4L256 261.2 512 113.4V112z"
    />
  </svg>
);
const FaClock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
    />
  </svg>
);
const FaGlobe = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3.5 h-3.5"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M352 256c0 22.2-1.2 43.9-3.3 64H163.3c-2.2-20.1-3.3-41.8-3.3-64s1.2-43.9 3.3-64H348.7c2.2 20.1 3.3 41.8 3.3 64zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
    />
  </svg>
);

// Inlined GoogleTranslateWidget (replaces './GoogleTranslateWidget' import)
const GoogleTranslateWidget = () => {
  return (
    <div
      id="google_translate_element"
      aria-label="Google Translate Website Translator (Hidden)"
    >
      {/* This div is filled by Google's script. 
          The CSS in index.html makes it invisible. */}
    </div>
  );
};

// Placeholder images (replaces image imports)
import digitalIndiaLogo from "../../assets/digital-india.png";
import anotherLogo from "../../assets/satyamev-jayate.png";

// --- End of Helper Components ---

function TopBar() {
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  /**
   * This function changes the Google Translate cookie
   * and reloads the page to apply the translation.
   * @param {string} langCode - 'mr', 'en', or 'hi'
   */
  const changeLanguage = (langCode) => {
    // We set the cookie to translate from Marathi ('mr') to the new language.
    // e.g., /mr/en (Marathi to English)
    document.cookie = `googtrans=/mr/${langCode};path=/`;
    window.location.reload(); // Reload the page to apply the change
  };

  // Dropdown hover logic
  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsTranslateOpen(true);
  };

  const handleMouseLeave = () => {
    const newTimeoutId = setTimeout(() => {
      setIsTranslateOpen(false);
    }, 300); // 300ms delay before closing
    setTimeoutId(newTimeoutId);
  };

  return (
    <div className="bg-gradient-to-r from-orange-600 via-white to-green-600 border-b border-gray-200">
      <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            {/* Left side: Contact Info (Static Text) */}
            <div className="hidden md:flex items-center space-x-6 text-gray-700">
              <a
                href="tel:02345-220020"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
                aria-label="Call Office"
              >
                <FaPhone />
                <span className="font-medium">02345-220020</span>
              </a>
              <a
                href="mailto:contact@dholewadi.gov.in"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
                aria-label="Send Email"
              >
                <FaEnvelope />
                <span>gpdholewadi415408@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-600">
                <FaClock />
                <span>सोम - शनि: स. १०:००  - सायं. ०६:०० </span>
              </div>
            </div>

            {/* Right side: Logos and NEW Language Dropdown */}
            <div className="flex items-center space-x-4 ml-auto">
              <img src={anotherLogo} alt="satyamev-jayate" className="h-8" />
              <img
                src={digitalIndiaLogo}
                alt="Digital India Logo"
                className="h-8"
              />

              {/* --- THIS IS YOUR NEW CUSTOM DROPDOWN --- */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* The "Language" button */}
                <button
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-white border border-gray-300 hover:border-primary hover:bg-gray-50 transition-all text-gray-700 font-medium"
                  aria-label="Select Language"
                >
                  <FaGlobe />
                  <span className="text-xs uppercase">भाषा</span>
                </button>

                {/* The custom dropdown menu */}
                {isTranslateOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                    <button
                      onClick={() => changeLanguage("mr")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      मराठी
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage("hi")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      हिंदी
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This is the hidden Google Translate widget.
        It MUST be rendered somewhere for the cookie trick to work.
        The CSS in index.html makes it invisible.
      */}
      <GoogleTranslateWidget />
    </div>
  );
}

export default TopBar;
