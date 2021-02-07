import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';

import './index.scss';

const Header = ({ logoSrc }) => {
  const [headerClassName, setHeaderClassName] = useState('');

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 50) {
      setHeaderClassName('header-thin');
    } else {
      setHeaderClassName('');
    }
  };

  useEffect(() => {
    handleScroll();
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={headerClassName}>
      <div className="container">
        <a href="#" className="logo"><Img fluid={logoSrc} alt="Logo" /></a>
        <div className="menu" role="button" tabIndex="0">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav>
          <a href="#bemutatkozas">Bemutatkozás</a>
          <a href="#referenciak">Referenciák</a>
          <a href="#blog">Blog</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
