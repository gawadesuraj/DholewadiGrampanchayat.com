/* eslint-disable no-unused-vars */
// MobileMenu.jsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ---------- MENU DATA ----------
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

// ---------- COMPONENT ----------
function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const [openSubmenus, setOpenSubmenus] = useState(new Set());

  // toggle submenu open/close
  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) newSet.delete(label);
      else newSet.add(label);
      return newSet;
    });
  };

  const handleCloseAll = () => {
    setOpenSubmenus(new Set());
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Hide scrollbar */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseAll}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            className="fixed top-0 right-0 w-72 sm:w-80 h-full bg-white shadow-xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <h2 id="mobile-menu-title" className="text-lg font-semibold text-gray-800">
                Menu
              </h2>
              <button
                onClick={handleCloseAll}
                className="p-2 rounded-md hover:bg-gray-100 transition"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-auto p-5 hide-scrollbar">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  const hasChildren = Array.isArray(item.children);
                  const isSubmenuOpen = openSubmenus.has(item.label);

                  return (
                    <li key={item.path}>
                      {/* Menu Item with Submenu */}
                      {hasChildren ? (
                        <>
                          <button
                            onClick={() => toggleSubmenu(item.label)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors ${
                              isActive
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-gray-800 hover:bg-gray-100"
                            }`}
                            aria-expanded={isSubmenuOpen}
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isSubmenuOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Submenu Items */}
                          <AnimatePresence initial={false}>
                            {isSubmenuOpen && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="pl-6 mt-1 overflow-hidden border-l border-gray-100"
                              >
                                {item.children.map((sub) => {
                                  const isSubActive = location.pathname === sub.path;
                                  return (
                                    <li key={sub.path}>
                                      <Link
                                        to={sub.path}
                                        onClick={handleCloseAll}
                                        className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                          isSubActive
                                            ? "text-primary font-semibold"
                                            : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                        aria-current={isSubActive ? "page" : undefined}
                                      >
                                        {sub.label}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        // Simple Menu Item
                        <Link
                          to={item.path}
                          className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                            isActive
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-gray-800 hover:bg-gray-100"
                          }`}
                          onClick={handleCloseAll}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA Buttons */}
            <div className="border-t border-gray-200 p-5 space-y-3">
              <Link
                to="/grievance"
                onClick={handleCloseAll}
                className="block w-full text-center px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-sm transition"
              >
                File a Grievance
              </Link>
              <Link
                to="/services"
                onClick={handleCloseAll}
                className="block w-full text-center px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md shadow-sm transition"
              >
                View Services
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
