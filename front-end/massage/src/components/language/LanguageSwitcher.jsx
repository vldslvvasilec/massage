import React from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import Flag from 'react-flagkit'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    Cookies.set('language', newLanguage, { expires: 365 });
  };

  return (
    <button onClick={handleLanguageChange} className="lang-switcher-btn">
      {i18n.language === 'en' ? (
        <>
          <Flag country='FR' className='custom-flag'/>
          <span> Français</span>
        </>
      ) : (
        <>
          <Flag country='GB' className='custom-flag'/>
          <span> English</span>
        </>
      )}
    </button>
  );
};

export default LanguageSwitcher;
