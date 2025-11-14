import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* CSS to hide the scrollbar for the main content area */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* For Chrome, Safari, and Opera */
          }
          .hide-scrollbar {
            -ms-overflow-style: none;  /* For IE and Edge */
            scrollbar-width: none;  /* For Firefox */
          }
        `}
      </style>

      {/* ScrollToTop component ensures navigation scrolls to the top of the new page */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main
        id="main-content"
        className="flex-1 bg-white overflow-y-auto scroll-smooth hide-scrollbar"
        role="main"
        tabIndex={-1}
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
