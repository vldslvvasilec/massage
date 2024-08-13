import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuMenu } from 'react-icons/lu';
import LanguageSwitcher from '../language/LanguageSwitcher';
import HeaderNav from './header-nav';
import SidebarMenu from './SidebarMenu';
import ScrollToTopButton from './ScrollToTop';
import './header.scss';

const Header = ({ setHeaderHeight }) => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [setHeaderHeight]);

  return (
    <header ref={headerRef} className="header">
      <div className="header-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className='headerNavWrap'>
        <HeaderNav />
      </div>
      <section className='small-menu' onClick={toggleSidebar}>
        <LuMenu />
      </section>
      <div className="header-lang-switcher">
        <LanguageSwitcher />
      </div>
      <SidebarMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <ScrollToTopButton />
    </header>
  );
};

export default Header;
