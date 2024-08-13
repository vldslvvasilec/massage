import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './header.scss';

const HeaderNav = ({ toggleSidebar }) => {
  const { t } = useTranslation();

  return (
      <nav className="header-nav">
        <ul className="header-menu">
          <li className="header-item">
            <Link to="/" onClick={toggleSidebar}>{t('home')}</Link>
          </li>
          <li className="header-item">
            <Link to="/services" onClick={toggleSidebar}>{t('services')}</Link>
          </li>
          <li className="header-item">
            <Link to="/booking" onClick={toggleSidebar}>{t('booking')}</Link>
          </li>
          <li className="header-item">
            <Link to="/contact" onClick={toggleSidebar}>{t('contact')}</Link>
          </li>
        </ul>
      </nav>
  );
};

export default HeaderNav;
