// MapSection.jsx — white theme, responsive, smooth scroll, tighter desktop spacing, centered on mobile

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Coordinates (precise to location)
const LAT = 16.931010;
const LNG = 74.051771;

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

const EMBED_SRC = `https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`;

const address = `GramPanchayat Dholewadi
Ta. Shirala, Dist. Sangli
Maharashtra - 415408`;

export default function MapSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);    // parallax on scroll (wrapper only)
  const iframeRef = useRef(null);  // fade-in only
  const btnRef = useRef(null);     // independent scroll reveal

  useEffect(() => {
    const ctx = gsap.context(() => {
      const h2 = sectionRef.current?.querySelector("h2");
      if (h2) {
        gsap.fromTo(
          h2,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: h2, start: "top 80%", toggleActions: "play none none reset" }
          }
        );
      }

      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 20, opacity: 1 },
          {
            y: -6,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              end: "bottom 60%",
              scrub: 0.4,
              toggleActions: "play reverse play reverse",
              preventOverlaps: true
            }
          }
        );
      }

      if (iframeRef.current) {
        gsap.fromTo(iframeRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" });
      }

      if (btnRef.current) {
        gsap.fromTo(
          btnRef.current,
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: btnRef.current,
              start: "top 95%",
              end: "bottom 75%",
              scrub: 0.4,
              toggleActions: "play reverse play reverse",
              preventOverlaps: true
            }
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="map" className="w-full bg-white text-slate-900 py-10 flex items-center justify-center">
      <div
        ref={sectionRef}
        className="w-11/12 max-w-[900px] mx-auto text-center flex flex-col items-center gap-4 p-5 sm:p-6"
      >
        <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full" />

        <p className="font-general text-[10px] sm:text-[10px] md:text-xs uppercase tracking-wide text-slate-500">
          Visit Our Location
        </p>

        <h2 className="special-font !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl !font-black !leading-[.9]">
          आम्हाला नकाशावर शोधा
        </h2>

        {/* Map card with subtle scroll parallax; no hover transforms */}
        <div ref={cardRef} className="will-change-transform w-full sm:w-[92%] md:w-[720px] lg:w-[820px]">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative block overflow-hidden rounded-2xl bg-white
              ring-1 ring-black/5 shadow-xl
              transition-[box-shadow,ring-color,opacity] duration-300 ease-out
              hover:shadow-2xl hover:ring-emerald-500/40
            "
            aria-label="Open directions in Google Maps"
            title="Open in Google Maps"
          >
            <div className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] w-full">
              <iframe
                ref={iframeRef}
                title="Location map"
                src={EMBED_SRC}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </a>
        </div>

        {/* Address + Button row: centered on mobile, tighter gap on desktop */}
        <div className="mt-3 w-full sm:w-[92%] md:w-[720px] lg:w-[820px]">
          <div
            className="
              flex flex-col md:flex-row
              items-center md:items-center
              justify-center md:justify-center
              gap-3 md:gap-6
              text-center md:text-left
            "
          >
            <p className="font-light text-xs sm:text-sm md:text-base whitespace-pre-line text-slate-600">
              {address}
            </p>

            <a
              ref={btnRef}
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-4 py-2
                text-sm md:text-base transition-colors transform-gpu
                hover:bg-emerald-700 hover:scale-[1.03]
              "
              aria-label="Get directions in Google Maps"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l7 10-7 10L5 12 12 2z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              दिशानिर्देश मिळवा
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
