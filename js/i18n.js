const defaultLanguage = localStorage.getItem("lang") || "es";

async function loadLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (translations[key]) {
      if (el.tagName === "UL") {
        el.innerHTML = translations[key]
          .map(item => `<li>${item}</li>`)
          .join("");
      } 
      else {
        el.innerText = translations[key];
      }
    }
  });

  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
}

function setLanguage(lang) {
  loadLanguage(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  loadLanguage(defaultLanguage);
});
