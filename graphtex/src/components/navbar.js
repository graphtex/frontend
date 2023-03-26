import React from 'react';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect } from 'react';

export const NavBar = () => {
  /* this state is to show shadow on scroll*/
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <h1
      className={`${styles.navbar} ${offset === 0 ? '' : styles.show_shadow}`}
    >
      <span style={{ color: '#087f5b' }}>Graph</span>TeX
    </h1>
  );
};

export default NavBar