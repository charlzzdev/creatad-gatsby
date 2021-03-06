import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
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
        <Link to="/#" className="logo"><Img fluid={logoSrc} alt="Logo" /></Link>
        <div className="menu" role="button" tabIndex="0">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav>
          <Link to="/#bemutatkozas">Bemutatkozás</Link>
          <Link to="/#referenciak">Referenciák</Link>
          <Link to="/#kapcsolat">Kapcsolat</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
