import translations from './translations.js';

document.addEventListener('DOMContentLoaded', function () {
  const langToggle = document.getElementById('lang-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  let currentLang = 'fr';

  function updateTranslations() {
    const translatedElements = document.querySelectorAll('[data-translate]');

    translatedElements.forEach((element) => {
      const translationKey = element.getAttribute('data-translate');
      element.textContent = translations[currentLang][translationKey];
    });
  }

  function updateButtonLabel() {
    if (body.classList.contains('dark')) {
      themeToggle.textContent = 'Mode Clair';
    } else {
      themeToggle.textContent = 'Mode Dark';
    }
  }

  langToggle.addEventListener('click', function () {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    updateTranslations();
  });

  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    updateButtonLabel();
  });

  // Set the initial translations and button label
  updateTranslations();
  updateButtonLabel();
});

