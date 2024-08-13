import React from 'react';
import { useTranslation } from 'react-i18next';
import './service.scss';

export default function Prices({ src, title, before = '', price }) {
  const { t } = useTranslation();

  return (
    <div className="prices">
      <img src={src} alt="Price Image" className="pricesImg" />
      <section className="pricesDetails">
        <p className="pricesDetailsTitle">{t(title)}</p>
        <p className="pricesDetailsBefore">{t(before)}</p>
      </section>
      <span className="pricesPrice">€ {price}</span>
    </div>
  );
}
