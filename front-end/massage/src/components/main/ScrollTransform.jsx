import React, { useState, useEffect, useRef } from 'react';

const ScrollTransform = ({ children, initialTransform }) => {
  const [activated, setActivated] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current && !activated) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.9) {
        setActivated(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activated]);


  const { x = 0, y = 0 } = initialTransform || {};

  const style = {
    transform: activated ? 'translate(0, 0)' : `translate(${x}px, ${y}px)`,
    opacity: activated ? 1 : 0,
    transition: 'transform .6s ease, opacity 0.6s ease',
  };

  if (!React.isValidElement(children)) {
    console.error("ScrollTransform expects a single valid React element as a child.");
    return null;
  }

  return React.cloneElement(children, { ref, style });
};

export default ScrollTransform;
