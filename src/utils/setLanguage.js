import translations from '../translations/translations.json';

export default function setLanguage() {
  let userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.split('-')[0] || 'en';
  const currentLang = localStorage.getItem('CURRENT_LANG');
  if (currentLang) localStorage.setItem('localize', JSON.stringify(translations[currentLang]));
  else {
    localStorage.setItem('CURRENT_LANG', userLang);
    localStorage.setItem('localize', JSON.stringify(translations[userLang]));
  }
}
