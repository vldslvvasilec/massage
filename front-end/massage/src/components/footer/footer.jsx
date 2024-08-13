import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import './footer.scss'


  
  

const Footer = ({ contactDetails }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <footer className="footer">
        <img src="/logo.png" alt="Logo" />
        <section className='footer-content'>
            <section className='footer-dinamic'>
                <h4 className='footer-dinamic'>{t('footer-contact')}</h4>
                <section className='footer-dinamic-content'>
                    <ul className='footer-dinamic-content-list'>
                        <li className='footer-dinamic-content-item'>
                            <FaLocationDot />
                            <span>
                                {`${contactDetails.address.city}`}
                            </span>
                        </li>
                        <li className='footer-dinamic-content-item'>
                            <FaLocationDot />
                            <span>
                                {`${contactDetails.address.additionalAddress}`}
                            </span>
                        </li>
                        <li className='footer-dinamic-content-item'>
                            <FaPhoneAlt />
                            <span>
                                {contactDetails.address.phone}
                            </span>
                        </li>
                        <li className='footer-dinamic-content-item'>
                            <FaCalendarAlt />
                            <span>
                                {contactDetails.hours.mondayToSunday[lang]}
                            </span>
                        </li>
                    </ul>
                </section>
            </section>
            <section className='footer-static'>
                <h3 className='footer-static-tittle'>{t('footer-static-tittle')}</h3>
                <p className='footer-static-content'>{t('footer-static-content')}</p>
            </section>
        </section>
    </footer>
  );
};

export default Footer;