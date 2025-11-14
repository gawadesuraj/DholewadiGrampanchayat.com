import React, { useEffect, useMemo, useRef, useState } from "react";

const BAR_HEIGHT = 115; // fixed height as requested
const BG = "#1e8a43"; // green background
const INTERVAL = 3000; // autoplay interval
const quotes = [
  "सर्वांसाठी विकास ग्रामविकास आमची प्राथमिकता.",
  "प्रत्येक कार्यामध्ये पारदर्शकता आणि सेवा.",
  "स्वच्छ गाव, निरोगी समाज.",
  "सहभागातून मजबूत ग्रामपंचायत तयार होते.",
];

function Chevron({ dir = "left", size = 24, color = "#ffffff" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

export default function QuoteStrip() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const prefersReducedMotion = useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    []
  );
  const timer = useRef(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
      setAnimKey((k) => k + 1);
    }, INTERVAL);
    return () => clearInterval(timer.current);
  }, [paused]);

  const goPrev = () => {
    setIndex((i) => (i - 1 + quotes.length) % quotes.length);
    setAnimKey((k) => k + 1);
  };
  const goNext = () => {
    setIndex((i) => (i + 1) % quotes.length);
    setAnimKey((k) => k + 1);
  };

  const onKey = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Inspiring quotes slider"
      aria-live="polite"
      tabIndex={0}
      onKeyDown={onKey}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="w-full"
      style={{ backgroundColor: BG }}
      data-aos="fade-up" // <-- AOS ANIMATION ADDED HERE
    >
      <div
        className="max-w-7xl mx-auto px-4 relative"
        style={{ height: BAR_HEIGHT }}
      >
        {/* Always-visible, large, high-contrast controls */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous quote"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                     flex items-center justify-center
                     w-12 h-12 md:w-12 md:h-12 rounded-full
                     bg-white/25 hover:bg-white/35 active:bg-white/45
                     shadow-lg border border-white/30
                     focus:outline-none focus:ring-4 focus:ring-white/60"
        >
          <Chevron dir="left" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next quote"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                     flex items-center justify-center
                     w-12 h-12 md:w-12 md:h-12 rounded-full
                     bg-white/25 hover:bg-white/35 active:bg-white/45
                     shadow-lg border border-white/30
                     focus:outline-none focus:ring-4 focus:ring-white/60"
        >
          <Chevron dir="right" />
        </button>

        {/* Viewport */}
        <div className="h-full w-full overflow-hidden flex items-center justify-center">
          {/* Slide enters from left -> right */}
          <div
            key={animKey}
            className="px-6 text-center"
            style={{
              color: "#ffffff",
              width: "100%",
              transform: "translateX(-28px)",
              opacity: 0,
              animation: prefersReducedMotion
                ? "none"
                : "quote-enter 600ms ease-out forwards",
            }}
          >
            <p className="text-white text-sm md:text-base lg:text-lg font-medium leading-snug">
              “{quotes[index]}”
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes quote-enter {
          0% { transform: translateX(-28px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
