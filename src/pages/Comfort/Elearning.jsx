import React from "react";
import { BookOpen, Newspaper, Cloud, ExternalLink } from "lucide-react";

function ELearning() {
  const eBooks = [
    { title: "E – Material", link: "https://www.esahity.com/" },
    { title: "Rekata", link: "https://www.rekhta.org/ebooks/collection/hindi-english-e-books" },
    { title: "Gutenberg", link: "https://www.gutenberg.org/" },
  ];

  const eMagazines = [
    {
      title: "All in One",
      link: "https://library.magzter.com/home",
      user: "library@cbmindia.in",
      password: "2010",
    },
  ];

  const eLetters = [
    { title: "Public Opinion", link: "https://www.lokmat.com/" },
    { title: "Morning", link: "https://www.esakal.com/" },
    { title: "The Hindu", link: "https://www.thehindu.com/" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-violet-700 to-indigo-700 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              E-Learning Resources
            </h1>
            <p className="text-indigo-100 text-lg">
              Explore verified online resources for E-books, E-magazines, and E-current letters.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-10 sm:p-12 grid md:grid-cols-3 gap-8 text-gray-800">
          {/* E-Books */}
          <div className="bg-gradient-to-b from-violet-50 to-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-lg transition-all duration-200">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-7 h-7 text-indigo-600" />
              <h2 className="text-xl font-semibold text-indigo-700">E-Books</h2>
            </div>
            <ul className="space-y-3">
              {eBooks.map((book, index) => (
                <li key={index}>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200"
                  >
                    {book.title}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* E-Magazines */}
          <div className="bg-gradient-to-b from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-200">
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="w-7 h-7 text-blue-600" />
              <h2 className="text-xl font-semibold text-blue-700">E-Magazines</h2>
            </div>
            <ul className="space-y-3">
              {eMagazines.map((mag, index) => (
                <li key={index}>
                  <a
                    href={mag.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                  >
                    {mag.title}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>User ID: <span className="font-medium">{mag.user}</span></p>
                    <p>Password: <span className="font-medium">{mag.password}</span></p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* E-Current Letters */}
          <div className="bg-gradient-to-b from-sky-50 to-teal-50 p-6 rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition-all duration-200">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-7 h-7 text-teal-600" />
              <h2 className="text-xl font-semibold text-teal-700">
                E-Current Letters
              </h2>
            </div>
            <ul className="space-y-3">
              {eLetters.map((letter, index) => (
                <li key={index}>
                  <a
                    href={letter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200"
                  >
                    {letter.title}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 py-4">
          © Dholewadi Gram Panchayat | E-Learning Digital Resource Hub
        </div>
      </div>
    </div>
  );
}

export default ELearning;
