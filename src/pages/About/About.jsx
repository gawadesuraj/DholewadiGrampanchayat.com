import React, { useState, useEffect } from "react";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
//import ScrollBook from '../../components/layout/ScrollBook'

function About() {
  const breadcrumbs = [{ label: "About", href: null }];

  const stats = [
    { label: "Population", value: "९६५ (राज्य सरासरीपेक्षा जास्त)" },
    { label: "Area", value: "(१.४१ चौ.किमी." },
  ];

  const heroImages = [
    {
      src: "/images/dholewadi/1.jpg",
      alt: "ढोलेवाडी दृश्य",
      title: "ढोलेवाडी दृश्य",
    },
    {
      src: "/images/dholewadi/2.jpg",
      alt: "सह्याद्री पर्वतरांग",
      title: "सह्याद्री पर्वतरांग",
    },
    {
      src: "/images/dholewadi/3.jpg",
      alt: "ढोलेवाडी शेती",
      title: "ढोलेवाडी शेती",
    },
  ];

  // --- Modal State and Functions ---
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    if (selectedImageIndex === null) return;
    const nextIndex = (selectedImageIndex + 1) % heroImages.length;
    setSelectedImageIndex(nextIndex);
  };

  const showPrevImage = () => {
    if (selectedImageIndex === null) return;
    const prevIndex =
      (selectedImageIndex - 1 + heroImages.length) % heroImages.length;
    setSelectedImageIndex(prevIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      if (e.key === "ArrowRight") showNextImage();
      else if (e.key === "ArrowLeft") showPrevImage();
      else if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen, selectedImageIndex]);
  // --- End of Modal Logic ---

  return (
    <div>
      <PageHeader
        title="ढोलेवाडी"
        subtitle="पंचायत समिती शिराळा"
        breadcrumbs={breadcrumbs}
      />

      <div className="container py-12">
        {/* Hero Section with Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {heroImages.map((image, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              // ENHANCED HOVER EFFECT ON THIS DIV
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg relative 
                         transform transition-all duration-300 ease-in-out 
                         hover:scale-110 hover:shadow-2xl" // Increased scale to 110
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                // ADDED ZOOM EFFECT ON THE IMAGE ITSELF
                className="w-full h-64 object-cover transform 
                           transition-transform duration-300 ease-in-out 
                           group-hover:scale-125" // Image zooms even more on group hover
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold text-center px-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bento-style Layout (rest of the page content) */}
        <div className="grid lg:grid-cols-12 gap-6 auto-rows-auto">
          {/* BOOK FIRST - LEFT SIDE */}
          <div className="hidden lg:block lg:col-span-2 lg:row-span-4 lg:order-1">
            <div className="sticky top-24">{/* <ScrollBook /> */}</div>
          </div>

          {/* Introduction */}
          <div className="lg:col-span-8 lg:order-2" data-aos="fade-up">
            <Card>
              <div className="p-6">
                <div className="prose prose-lg text-justify leading-relaxed">
                  <p>
                    🌿 सह्याद्रीच्या हिरव्यागार कुशीत वसलेले{" "}
                    <strong>ढोलेवाडी</strong> हे सांगली जिल्ह्यातील शिराळा
                    तालुक्यातील एक रमणीय आणि सांस्कृतिक वारसा लाभलेले गाव आहे.
                    शांत वातावरण, शेतीप्रधान जीवनशैली, तसेच सामाजिक ऐक्यासाठी हे
                    गाव प्रसिद्ध आहे. ग्रामीण Maharashtra मधील पारंपरिक संस्कृती
                    आणि आधुनिकतेचा सुंदर संगम येथे पाहायला मिळतो.
                  </p>
                  <p>
                    📍 <strong>भौगोलिक स्थान</strong> – गावाचे क्षेत्रफळ १४१.८६
                    हेक्टर असून शिराळा तालुक्यापासून फक्त १४ किमी अंतरावर आहे.
                    सांगली जिल्हा मुख्यालयापासून ७२ किमी व कोल्हापूर शहरापासून
                    अवघे ३७ किमी दूर असलेले हे गाव वारणा धरण व चांदोली
                    अभयारण्याच्या सान्निध्यात वसलेले असल्यामुळे त्याला विशेष
                    नैसर्गिक महत्व प्राप्त झाले आहे.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* History */}
          <div className="lg:col-span-8 lg:order-3" data-aos="fade-up">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  🏛 ऐतिहासिक पार्श्वभूमी
                </h2>
                <div className="prose text-justify leading-relaxed">
                  <p>
                    ढोलेवाडीचा स्वतंत्र ठळक इतिहास अल्प प्रमाणात उपलब्ध असला तरी
                    हे गाव शिराळा तालुक्याच्या वैभवशाली परंपरेचा अविभाज्य भाग
                    आहे. प्राचीन काळी हा परिसर शिलाहार वंश आणि राष्ट्रकूटांच्या
                    अधिपत्याखाली होता. स्वातंत्र्य संग्रामाच्या काळात शिराळ्यासह
                    या भागाने महत्त्वपूर्ण सहभाग नोंदवला.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Social Life */}
          <div className="lg:col-span-8 lg:order-4" data-aos="fade-up">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">👨‍👩‍👧 सामाजिक जीवन</h2>
                <p className="leading-relaxed">
                  २०११ च्या जनगणनेनुसार गावाची लोकसंख्या ७८२ आहे व लिंग गुणोत्तर
                  ९६५ इतके संतुलित आहे. साक्षरता दर ७९.९७% असून शिक्षण आणि
                  जागरूकतेत गावाचा सर्वांगीण विकास दिसून येतो. गावात प्राथमिक
                  शाळा, इंग्रजी माध्यम शाळा तसेच जवळच आरोग्य सुविधा उपलब्ध आहेत,
                  ज्यामुळे रहिवाशांचे दैनंदिन जीवन सुलभ झाले आहे.
                </p>
              </div>
            </Card>
          </div>

          {/* Statistics */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="lg:col-span-4 lg:order-5"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card>
                <div className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </Card>
            </div>
          ))}

          {/* Governance */}
          <div className="lg:col-span-6 lg:order-6" data-aos="fade-up">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  🗳 राजकीय व्यवस्थापन
                </h3>
                <ul className="space-y-2 list-disc pl-4">
                  <li>स्वतःची ग्रामपंचायत</li>
                  <li>विधानसभा मतदारसंघ – शिराळा</li>
                  <li>लोकसभा मतदारसंघ – हातकणंगले</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Economy */}
          <div className="lg:col-span-6 lg:order-7" data-aos="fade-up">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  🌾 शेती व अर्थव्यवस्था
                </h3>
                <ul className="space-y-2 list-disc pl-4">
                  <li>एकूण १०६.७८ हेक्टर शेती जमीन (६०.७८ हेक्टर सिंचित)</li>
                  <li>मुख्य पिके: ऊस, भात, मका, भुईमूग</li>
                  <li>दररोज ~२००० लिटर दूध उत्पादन</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Religion and Culture */}
          <div className="lg:col-span-12 lg:order-8" data-aos="fade-up">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  🙏 धार्मिक आणि सांस्कृतिक वैशिष्ट्ये
                </h2>
                <p className="leading-relaxed">
                  गावातील <strong>श्री भैरवनाथ मंदिर</strong> हे श्रद्धा आणि
                  सामाजिक एकतेचे केंद्र आहे. दरवर्षी होणारी यात्रा तसेच गांधी
                  विचार दर्शन सप्ताहासारखे उपक्रम गावातील लोकांना समाजबंध मजबूत
                  करण्याची संधी देतात. धार्मिकतेसोबतच सांस्कृतिक कार्यक्रमही
                  गावाला विशेष ओळख देतात.
                </p>
              </div>
            </Card>
          </div>

          {/* Tourism and Achievements */}
          <div className="lg:col-span-12 lg:order-9" data-aos="fade-up">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  🌿 पर्यटन व विशेष गौरव
                </h2>
                <ul className="space-y-2 list-disc pl-4">
                  <li>
                    जवळील चांदोली अभयारण्य – निसर्गप्रेमींसाठी विशेष आकर्षण
                  </li>
                  <li>शिराळ्याचा प्रसिद्ध साप्ताहिक बाजार</li>
                  <li>
                    महाराष्ट्रातील पहिले <em>हागणदारी मुक्त गाव</em>
                  </li>
                  <li>
                    केंद्रस्तरीय निर्मल ग्राम पुरस्कार, तंटामुक्त गाव पुरस्कार
                    यांसारखे प्रतिष्ठित सन्मान
                  </li>
                  <li>
                    शिक्षण आणि सामाजिक प्रगतीमुळे ढोलेवाडी राज्यस्तरीय आदर्श गाव
                    म्हणून ओळखले जाते
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        
        </div>
      </div>

      {/* --- Modal / Lightbox JSX --- */}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image and Title */}
            <div className="flex flex-col items-center">
              <img
                src={heroImages[selectedImageIndex].src}
                alt={heroImages[selectedImageIndex].alt}
                className="max-h-[75vh] w-auto object-contain rounded-md"
              />
              <p className="mt-4 text-lg font-medium text-gray-800">
                {heroImages[selectedImageIndex].title}
              </p>
            </div>

            {/* Prev/Next Buttons */}
            <button
              onClick={showPrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={showNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {/* --- End of Modal JSX --- */}
    </div>
  );
}

export default About;
