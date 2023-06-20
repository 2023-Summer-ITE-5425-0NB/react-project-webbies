import React from 'react';
import { useTranslation } from 'react-i18next';

const Language: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <h1>{t('language.title')}</h1>
      <div>
        <label>{t('language.selectLabel')}</label>
        <select onChange={handleLanguageChange}>
          <option value="en">{t('language.english')}</option>
          <option value="fr">{t('language.french')}</option>
          <option value="es">{t('language.spanish')}</option>
        </select>
      </div>
    </div>
  );
};

export default Language;

{/* <div>
      <h2>Language</h2>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('fr')}>French</button>
    </div> */}