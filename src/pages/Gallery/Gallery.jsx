// frontend/src/pages/Gallery/Gallery.jsx

import React, { useState, useEffect, useCallback, useMemo, memo, Suspense } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";

// ---------------------- Memoized Header ----------------------
const PageHeader = memo(({ title, subtitle, breadcrumbs }) => (
  <header className="bg-gray-100 py-2">
    <div className="container mx-auto px-4">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="flex items-center text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-blue-600">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-gray-700">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>
    </div>
  </header>
));

// ---------------------- Gallery Component ----------------------
const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [villageImages, setVillageImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const breadcrumbs = useMemo(() => [{ label: "Gallery", href: null }], []);

  // Fetch photos from Supabase
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const { data, error } = await supabase
          .from('photos')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        setVillageImages(data || []);
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError('Failed to load gallery images');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  // Lazy animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(timer);
  }, []);

  // Handlers (memoized)
  const openModal = useCallback((index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedImageIndex(null);
  }, []);

  const showNextImage = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? 0 : (prev + 1) % villageImages.length
    );
  }, [villageImages.length]);

  const showPrevImage = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? 0 : (prev - 1 + villageImages.length) % villageImages.length
    );
  }, [villageImages.length]);

  // Optimized keydown listener (only active when modal is open)
  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") showNextImage();
      else if (e.key === "ArrowLeft") showPrevImage();
      else if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, showNextImage, showPrevImage, closeModal]);

  return (
    <div>
      {/* Embedded CSS for animations */}
      <style>{`
        @keyframes bounceIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          60% { opacity: 1; transform: translateY(-8px) scale(1.03); }
          80% { transform: translateY(4px) scale(0.99); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes hoverBounce {
          0% { transform: scale(1) translateY(0); }
          30% { transform: scale(1.05) translateY(-3px); }
          60% { transform: scale(0.98) translateY(1px); }
          100% { transform: scale(1) translateY(0); }
        }
        .entry-bounce { animation: bounceIn 0.8s cubic-bezier(.215,.61,.355,1) both; will-change: transform, opacity; }
        .hover-bounce:hover { animation: hoverBounce 0.5s ease-in-out; box-shadow: 0 12px 24px rgba(0,0,0,0.25); }
        @media (prefers-reduced-motion: reduce) {
          .entry-bounce, .hover-bounce:hover { animation: none !important; transform: none !important; }
        }
      `}</style>

      {/* Header */}
      <PageHeader
        title="छायाचित्र दालन (Photo Gallery)"
        subtitle="Our village's moments captured in time."
        breadcrumbs={breadcrumbs}
      />

      {/* Gallery Grid */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto">
          {loading ? (
            <div className="text-center py-10 text-gray-600">Loading gallery...</div>
          ) : error ? (
            <div className="text-center py-10 text-red-600">{error}</div>
          ) : villageImages.length === 0 ? (
            <div className="text-center py-10 text-gray-600">No photos available</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {villageImages.map((image, index) => {
                const delay = index * 90;
                return (
                  <div
                    key={image.id}
                    className={`group cursor-pointer overflow-hidden rounded-lg shadow-lg relative transition-all duration-300 ease-in-out hover:shadow-2xl hover-bounce ${
                      mounted ? "entry-bounce" : "opacity-0 translate-y-2"
                    }`}
                    onClick={() => openModal(index)}
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    <img
                      src={image.image_url}
                      alt={image.alt_text || "Gallery image"}
                      loading="lazy" // Lazy load optimization
                      decoding="async"
                      className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal / Lightbox */}
        {modalOpen && selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={closeModal}
          >
            <div
              className="relative bg-white p-4 rounded-lg max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 z-50 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="flex flex-col items-center">
                <img
                  src={villageImages[selectedImageIndex].image_url}
                  alt={villageImages[selectedImageIndex].alt_text || "Gallery image"}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[75vh] w-auto object-contain rounded-md"
                />

              </div>

              {/* Prev/Next Buttons */}
              <button
                onClick={showPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={showNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

// Wrap in Suspense (future-proof for lazy imports)
export default function GalleryWrapper() {
  return (
    <Suspense fallback={<div className="text-center py-10 text-gray-600">Loading gallery...</div>}>
      <Gallery />
    </Suspense>
  );
}
