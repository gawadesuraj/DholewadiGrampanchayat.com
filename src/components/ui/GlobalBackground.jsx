import React from "react";

export default function GlobalBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-white text-gray-800 overflow-hidden">
      {/* Crosshatch Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none contrast-125 brightness-95"
        style={{
          backgroundImage: `
            repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.18) 2px, rgba(75, 85, 99, 0.18) 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.16) 2px, rgba(107, 114, 128, 0.16) 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.14) 2px, rgba(55, 65, 81, 0.14) 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.12) 2px, rgba(31, 41, 55, 0.12) 3px, transparent 3px, transparent 8px)
          `,
        }}
      />
      
      {/* Your Entire Website */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
