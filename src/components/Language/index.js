import React from 'react';
import { useTranslation } from 'react-i18next';
import { saveLangCache, getLangCache } from '../../cache/language'

function Language() {

  const { i18n } = useTranslation();
  const lang = getLangCache();

  function onChangeLang(value) {
    i18n.changeLanguage(value);
    saveLangCache(value);
  }

  return (
    <div className="position-absolute" style={{ top: 10, left: 20 }}>
      <select onChange={(e) => onChangeLang(e.target.value)} defaultValue={lang}>
        <option value="en">EN</option>
        <option value="vi">VI</option>
      </select>
    </div>
  )
}

export default Language;