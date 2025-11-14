// src/utils/translate.js

export function triggerGoogleTranslate(langCode) {
  const iframe = document.querySelector("iframe.goog-te-menu-frame");

  if (!iframe) {
    console.error("Google Translate iframe not loaded yet.");
    return;
  }

  const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  const langButtons = innerDoc.querySelectorAll(
    ".goog-te-menu2-item span.text"
  );

  if (!langButtons.length) {
    console.error("Google Translate language options not found.");
    return;
  }

  // ✅ Click the correct language option
  langButtons.forEach((btn) => {
    if (btn.innerText.toLowerCase().includes(langCode.toLowerCase())) {
      btn.click();
    }
  });
}
