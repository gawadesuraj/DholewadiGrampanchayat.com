import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * This component automatically scrolls the window to the top (0, 0)
 * whenever the location (URL path) changes.
 */
function ScrollToTop() {
  // Extracts the pathname from the current location object.
  const { pathname } = useLocation();

  // The useEffect hook runs after every render, but we only want it
  // to run when the `pathname` changes.
  useEffect(() => {
    // This is the command that scrolls the window to the top left corner.
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname.

  // This component doesn't render any HTML, it just contains logic.
  return null;
}

export default ScrollToTop;
