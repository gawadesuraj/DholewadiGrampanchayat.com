import React from "react";
import { Link } from "react-router-dom";

// --- SVG Icon Components (replaces react-icons) ---

const FaPhone = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
  </svg>
);

const FaFire = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 384 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M216 28c0-17.7-14.3-32-32-32s-32 14.3-32 32C128 69 0 240 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-51.2-22.2-111.8-37.5-155.8C245.3 206.2 216 112.3 216 28zM64 368c0-38.3 26.2-106.3 50-155.2C131.2 166.3 160 88 160 48c0-8.8 7.2-16 16-16s16 7.2 16 16c0 40 28.8 118.3 46 164.8 23.8 48.9 50 116.9 50 155.2 0 53-43 96-96 96s-96-43-96-96z"></path>
  </svg>
);

const FaTruck = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 640 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
  </svg>
);

const FaExclamationTriangle = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 576 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-60.075-39.993-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.982 12.654z"></path>
  </svg>
);

const FaEnvelope = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
  </svg>
);

const FaMapMarkerAlt = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 384 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 0 1-35.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
  </svg>
);

const FaFacebook = ({ size }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 320 512"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
  </svg>
);

const FaInstagram = ({ size }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37.2-2.1-147.9-2.1-185.1 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37.2-2.1 147.9 0 185.1 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37.2 2.1 147.9 2.1 185.1 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37.2 2.1-147.8 0-185.1z"></path>
  </svg>
);

const FaTwitter = ({ size }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
  </svg>
);

const FaYoutube = ({ size }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 576 512"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM232.615 353.908V157.507l144.159 98.201-144.159 98.2z"></path>
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  const logos = [
    { src: "/h3logo.png", alt: "Partner logo 1" },
    { src: "/digital.png", alt: "Partner logo 2" },
    { src: "/emblem.png", alt: "Partner logo 3" },
  ];

  const emergencyContacts = [
    {
      label: "Police",
      number: "100",
      color: "bg-red-500 hover:bg-red-600",
      icon: <FaPhone className="text-lg" />,
    },
    {
      label: "Fire Brigade",
      number: "101",
      color: "bg-orange-500 hover:bg-orange-600",
      icon: <FaFire className="text-lg" />,
    },
    {
      label: "Ambulance",
      number: "108",
      color: "bg-green-500 hover:bg-green-600",
      icon: <FaTruck className="text-lg" />,
    },
    {
      label: "Disaster",
      number: "1077",
      color: "bg-blue-500 hover:bg-blue-600",
      icon: <FaExclamationTriangle className="text-lg" />,
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    if (!email) return;
    window.location.href = `mailto:gpdholewadi415408gmail.com?subject=Newsletter%20Subscription&body=Please%20subscribe:%20${encodeURIComponent(
      email
    )}`;
  };

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        {/* Logo + Description */}
        <div>
          <p className="mt-4 text-gray-300 max-w-7xl text-sm text-center">
            ढोलेवाडी – सह्याद्रीच्या कुशीत वसलेले सुंदर गाव 🌿 महाराष्ट्र
            राज्यातील सांगली जिल्ह्याच्या शिराळा तालुक्यातील पश्चिम भागात,
            सह्याद्री पर्वतरांगांच्या सान्निध्यात वसलेले छोटेसे परंतु निसर्गरम्य
            असे ढोलेवाडी हे गाव शांत ग्रामीण जीवनशैलीसाठी आणि शेतीप्रधान
            संस्कृतीसाठी ओळखले जाते.
          </p>
        </div>

        {/* Responsive Three Tile Row */}
        <div className="mt-8 w-full">
          <div className="container mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Tile 1: Phone */}
            <a
              href="tel:+919373356931"
              className="block bg-gray-900 text-white rounded-md shadow-lg border-t-4 border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/70"
            >
              <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left px-4 py-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mb-2 sm:mb-0 sm:mr-3">
                  <FaPhone className="text-orange-400 text-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-sm sm:text-base md:text-lg leading-snug break-words sm:truncate">
                    +91 93733 56931
                  </div>
                  <div className="text-xs text-gray-300 mt-0.5">Helpline</div>
                </div>
              </div>
            </a>

            {/* Tile 2: Email */}
            <a
              href="mailto:gpdholewadi415408@gmail.com"
              className="block bg-gray-900 text-white rounded-md shadow-lg border-t-4 border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/70"
            >
              <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left px-4 py-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mb-2 sm:mb-0 sm:mr-3">
                  <FaEnvelope className="text-orange-400 text-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-sm md:text-base lg:text-lg leading-snug break-words sm:truncate">
                    gpdholewadi415408@gmail.com
                  </div>
                  <div className="text-xs text-gray-300 mt-0.5">Email ID</div>
                </div>
              </div>
            </a>

            {/* Tile 3: Address */}
            <div className="block bg-gray-900 text-white rounded-md shadow-lg border-t-4 border-orange-500">
              <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left px-4 py-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mb-2 sm:mb-0 sm:mr-3">
                  <FaMapMarkerAlt className="text-orange-400 text-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-sm sm:text-base md:text-lg leading-snug">
                    GramPanchayat Dholewadi
                  </div>
                  <div className="text-xs text-gray-300 mt-0.5 break-words">
                    Ta. Shirala, Dist. Sangli, Maharashtra 415 408
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mt-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/officers"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Officers
                </Link>
              </li>
            </ul>
          </div>

          {/* Government */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Government
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/departments"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/grievance"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Grievance
                </Link>
              </li>
              <li>
                <a
                  href="https://maharashtra.gov.in"
                  className="text-gray-300 hover:text-white text-sm transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maharashtra Govt
                </a>
              </li>
              <li>
                <a
                  href="https://sangli.nic.in"
                  className="text-gray-300 hover:text-white text-sm transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sangli District
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-gray-300 text-xs">
              <li>GramPanchayat Dholewadi</li>
              <li>Ta. Shirala, Dist. Sangli</li>
              <li>Maharashtra 415 408</li>
              <li>Phone: +91 9373356931</li>
              <li>gpdholewadi415408gmail.com</li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Emergency Contacts
            </h3>
            <div className="hidden md:block mt-4 space-y-3">
              {emergencyContacts.map((contact, index) => (
                <a
                  key={index}
                  href={`tel:${contact.number}`}
                  className={`${contact.color} text-white p-3 rounded-lg flex items-center justify-between transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-center space-x-2">
                    {contact.icon}
                    <span className="text-sm font-medium">{contact.label}</span>
                  </div>
                  <span className="text-sm font-bold">{contact.number}</span>
                </a>
              ))}
            </div>
            <div className="md:hidden mt-4 grid grid-cols-2 gap-2">
              {emergencyContacts.map((contact, index) => (
                <a
                  key={index}
                  href={`tel:${contact.number}`}
                  className={`${contact.color} text-white p-2 rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  <div className="mb-1">{contact.icon}</div>
                  <span className="text-xs font-medium mb-1">
                    {contact.label}
                  </span>
                  <span className="text-xs font-bold">{contact.number}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe column */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Subscribe to our Newsletter
            </h3>
            <p className="mt-4 text-gray-300 text-sm">
              To know the latest developments in your village organization,
              subscribe by entering your email ID.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email ID
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Email ID"
                className="w-full rounded-md bg-gray-700 text-white placeholder-gray-400 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold transition"
              >
                Send
              </button>
            </form>
            <div className="mt-6 grid grid-cols-3 gap-6 items-center justify-items-center">
              {logos.map((l, i) => (
                <img
                  key={i}
                  src={l.src}
                  alt={l.alt}
                  loading="lazy"
                  className="h-10 sm:h-12 md:h-14 lg:h-20 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-300 hover:text-white transition">
            <FaFacebook size={22} />
          </a>
          <a
            href="https://www.instagram.com/gpdholewadi?utm_source=qr&igsh=MW11N2wxbmZheGs1dw=="
            className="text-gray-300 hover:text-white transition"
          >
            <FaInstagram size={22} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <FaTwitter size={22} />
          </a>
          <a
            href="https://youtube.com/@grampanchayatdholewadi?si=FZeWdmDsWBrdYoCn"
            className="text-gray-300 hover:text-white transition"
          >
            <FaYoutube size={22} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-300 text-center">
          © {currentYear} GramPanchayat Dholewadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
