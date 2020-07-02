const LANG = 'LANG';

function saveLangCache(value) {
  localStorage.setItem(LANG, value);
}

function getLangCache() {
  return localStorage.getItem(LANG) || 'en';
}

function clearLangCache() {
  localStorage.removeItem(LANG);
}

export {
  saveLangCache,
  getLangCache,
  clearLangCache,
}