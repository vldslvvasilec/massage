import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import './header.scss'; // Импортируйте стили для компонента

const ScrollToTopButton = () => {
  // Состояние, отвечающее за отображение кнопки
  const [isVisible, setIsVisible] = useState(false);

  // Функция для обработки клика по кнопке
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Функция для обработки события прокрутки
  const handleScroll = () => {
    const offset = 100; // Пороговое значение в пикселях
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollPosition > offset);
  };

  // Хук, который добавляет обработчик события прокрутки при монтировании и удаляет его при размонтировании
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
