import { useState, useEffect } from "react";

function Hero() {
  const villageImages = [
    {
      url: "https://res.cloudinary.com/dhgwquxar/image/upload/01_2_11zon_qcts1w.webp",
      
    },
    {
      url: "https://res.cloudinary.com/dhgwquxar/image/upload/02_4_11zon_ooet4h.webp",
      
    },
    {
      url: "https://res.cloudinary.com/dhgwquxar/image/upload/03_1_11zon_audadh.webp",
      
    },
    {
      url: "https://res.cloudinary.com/dhgwquxar/image/upload/04_5_11zon_lhdrkk.webp",
      
    },
    {
      url: "https://res.cloudinary.com/dhgwquxar/image/upload/05_3_11zon_zqdbzx.webp",
      
    },
    {
      url: "https://res.cloudinary.com/dhgwquxar/image/upload/06_6_11zon_bcns2k.webp",
      
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && villageImages.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === villageImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [currentImageIndex, isPlaying, villageImages.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? villageImages.length - 1 : currentImageIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === villageImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {villageImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt || `Village scene ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Main Heading */}
              <h1
                className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                data-aos="fade-down" // AOS Animation Added
              >
                आपले गाव
                <div className="mt-1">
                  <span className="inline-block leading-normal bg-gradient-to-l whitespace-nowrap py-1 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                    आपली ग्रामपंचायत
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-primary-light text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    ढोलेवाडी
                  </span>
                </div>
              </h1>

              {/* Subtitle */}
              <p
                className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl"
                data-aos="fade-up" // AOS Animation Added
                data-aos-delay="600" // Delay added
              >
                ग्रामपंचायतीच्या{" "}
                <span className="text-yellow-400 font-semibold">
                  डिजिटल सेवांमध्ये{" "}
                </span>
                आपले स्वागत. शासकीय सेवा मिळवा, माहिती जाणून घ्या आणि
                ग्रामपंचायतीशी सहज संपर्क ठेवा.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls (No changes needed here) */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={goToPrevious}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={goToNext}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {villageImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImageIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
