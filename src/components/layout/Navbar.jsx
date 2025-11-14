import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu"; // adjust path if needed

// ---------- Menu data ----------
const navItems = [
  { label: "मुख्यपृष्ठ", path: "/" },
  {
    label: "माहिती",
    children: [
      { label: "माहिती", path: "/about" },
      { label: "कार्यक्रम", path: "/events" },
      { label: "अधिकारी", path: "/officers" },
      { label: "नागरिक सनद", path: "/citizensCharter" },
    ],
  },
  {
    label: "Govt Scheme",
    children: [
      { label: "Jaljeevan Mission Scheme", path: "https://water.maharashtra.gov.in" },
      { label: "Aysuhman Bharat Scheme", path: "/ayushman-bharat" },
      { label: "15th Finance Commission", path: "/15thCommission" },
      { label: "Ladki Bahin Scheme", path: "/ladli-bahin" },
      { label: "Bhaghyashree Lek My Laadki Scheme", path: "/bhagyashree" },
      { label: "Swachh Bharat Mission", path: "/swachh-bharat" },
      { label: "Mahatma Gandhi Nationl Rural Employment Gaurantee Scheme", path: "/mgnrega" },
      { label: "PrimeMinister Matru Vandana Scheme", path: "/PMMVY" },
    ],
  },
  {
    label: "Beneficiary Scheme",
    children: [
      { label: "MNREGA", path: "/mnrega" },
      { label: "Pradhan Mantri Awas Yojna Beneficiary", path: "/pmay" },
    ],
  },
  {
    label: "Comfort",
    children: [
      { label: "Self Declarations", path: "/declaration" },
      { label: "E-Learning", path: "/e-learning" },
      { label: "Weather Forecast", path: "/weather" },
      { label: "Important Links", path: "/imp-links" },
    ],
  },
  { label: "गॅलरी", path: "/gallery" },
  { label: "विभाग", path: "/departments" },
  { label: "सेवा", path: "/services" },
  { label: "बातम्या", path: "/news" },
  {
    label: "शासन",
    children: [
      { label: "माहितीचा अधिकार", path: "/rti" },
      { label: "आर.पी.एस.ए.", path: "/rpa" },
    ],
  },
  { label: "E-Governance Policy", path: "/e-governance" },
  { label: "संपर्क", path: "/contact" },
];

// ---------- Utility ----------
const isItemActive = (item, pathname) => {
  if (item.path === pathname) return true;
  if (Array.isArray(item.children)) {
    return item.children.some((c) => c.path === pathname);
  }
  return false;
};

// ---------- Component ----------
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const submenuRefs = useRef({});

  // Scroll header shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Top government bar */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-2 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Government of Maharashtra</span>
              <span className="hidden md:inline text-gray-400">•</span>
              <span className="hidden md:inline text-gray-300">Sangli District</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="hover:text-yellow-300 transition-colors duration-200">हिंदी</button>
              <span className="text-gray-500">|</span>
              <button className="hover:text-yellow-300 transition-colors duration-200">English</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group flex-shrink-0"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">PS</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors duration-200 text-base sm:text-lg">
                  Panchayat Samiti Shirala
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  पंचायत समिती शिराळा
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              <nav
                className="flex items-center space-x-2 bg-gray-100/80 rounded-full px-4 py-2 shadow-inner"
                aria-label="Main navigation"
              >
                <ul className="flex items-center gap-2">
                  {navItems.map((item) => {
                    const active = isItemActive(item, location.pathname);
                    const hasChildren =
                      Array.isArray(item.children) && item.children.length > 0;
                    const isExternal =
                      item.path && item.path.startsWith("http");

                    return (
                      <li key={item.label} className="relative group">
                        {/* Parent link */}
                        {isExternal ? (
                          <a
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap ${
                              active
                                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                                : "text-gray-600 hover:text-blue-600 hover:bg-white"
                            }`}
                          >
                            <span>{item.label}</span>
                          </a>
                        ) : (
                          <Link
                            to={item.path}
                            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap ${
                              active
                                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                                : "text-gray-600 hover:text-blue-600 hover:bg-white"
                            }`}
                            aria-haspopup={hasChildren ? "true" : undefined}
                            aria-expanded={hasChildren ? "false" : undefined}
                            onKeyDown={(e) => {
                              if (
                                hasChildren &&
                                (e.key === "Enter" || e.key === " ")
                              ) {
                                e.preventDefault();
                                const firstSub =
                                  submenuRefs.current[item.path]?.querySelector(
                                    "a, button"
                                  );
                                if (firstSub) firstSub.focus();
                              }
                            }}
                          >
                            <span>{item.label}</span>
                          </Link>
                        )}

                        {/* Submenu */}
                        {hasChildren && (
                          <ul
                            ref={(el) =>
                              (submenuRefs.current[item.path] = el)
                            }
                            className="absolute left-0 mt-2 min-w-[14rem] bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible transform translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50"
                            role="menu"
                            aria-label={`${item.label} submenu`}
                          >
                            {item.children.map((sub) => {
                              const subActive =
                                location.pathname === sub.path;
                              const isExternalSub =
                                sub.path && sub.path.startsWith("http");
                              return (
                                <li key={sub.label} role="none">
                                  {isExternalSub ? (
                                    <a
                                      href={sub.path}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      role="menuitem"
                                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors ${
                                        subActive
                                          ? "text-blue-600 font-semibold"
                                          : ""
                                      }`}
                                    >
                                      {sub.label}
                                    </a>
                                  ) : (
                                    <Link
                                      to={sub.path}
                                      role="menuitem"
                                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors ${
                                        subActive
                                          ? "text-blue-600 font-semibold"
                                          : ""
                                      }`}
                                    >
                                      {sub.label}
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <Link
                to="/grievance"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Grievance
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex-shrink-0">
              <button
                onClick={() => setMobileMenuOpen((s) => !s)}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      mobileMenuOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
                  />
                  <span
                    className={`bg-gray-800 block transition-all duration-150 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      mobileMenuOpen
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;
