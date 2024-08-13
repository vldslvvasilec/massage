import React from 'react';
import HeaderNav from './header-nav';
import LanguageSwitcher from '../language/LanguageSwitcher';
import './sidebarMenu.scss';

const SidebarMenu = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>X</button>
      <HeaderNav toggleSidebar={toggleSidebar} />
      <LanguageSwitcher />
    </div>
  );
};

export default SidebarMenu;
