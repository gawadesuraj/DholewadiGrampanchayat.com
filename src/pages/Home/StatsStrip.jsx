import React from "react";

const stats = [
  { value: "782", label: "Population" },
  { value: "398", label: "Men" },
  { value: "384", label: "Women" },
  { value: "877", label: "Families" },
];

export default function StatsStrip({ items = stats, footnote = "*As per 2011 census" }) {
  return (
    <section aria-label="Village statistics" className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((s, i) => (
            <article
              key={i}
              className="
                relative rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden
                transition-[transform,box-shadow] duration-300 ease-out
                hover:-translate-y-1 hover:shadow-2xl
                group
              "
              role="group"
              aria-label={`${s.value} ${s.label}`}
              data-aos="fade-up" // AOS Animation Added
              data-aos-delay={i * 100} // AOS Staggered Delay Added
            >
              {/* Orange top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-green-600 rounded-t-2xl" />

              {/* Animated highlight underline (appears on hover) */}
              <span
                className="
                  pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0
                  bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500
                  transition-all duration-300 ease-out
                  group-hover:w-3/5
                "
              />

              {/* Content */}
              <div className="px-8 py-8 md:py-10 flex flex-col items-center text-center">
                <div
                  className="
                    text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900
                    transition-transform duration-300 ease-out group-hover:scale-[1.02]
                  "
                >
                  {s.value}
                </div>
                <div className="mt-3 text-base md:text-lg text-slate-600">
                  {s.label}
                </div>
              </div>
            </article>
          ))}

          <div className="sm:col-span-2 lg:col-span-4">
            <p className="mt-1 text-right text-xs italic text-slate-500">{footnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}