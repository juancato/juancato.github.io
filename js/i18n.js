const defaultLanguage = localStorage.getItem("lang") || "es";

async function loadLanguage(lang) {
  const body = document.getElementById("body");

  // Fade out
  body.classList.add("opacity-0");

  // Espera el fade out (Tailwind: duration-300 = 0.3s)
  await new Promise(resolve => setTimeout(resolve, 300));

  // Carga las traducciones
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

  // Fade in
  requestAnimationFrame(() => {
    body.classList.remove("opacity-0");
  });
}

function setLanguage(lang) {
  loadLanguage(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // Asegúrate de que el body tenga la clase para transición
  const body = document.getElementById("body");
  body.classList.add("transition-opacity", "duration-300");
  
  loadLanguage(defaultLanguage);
});
