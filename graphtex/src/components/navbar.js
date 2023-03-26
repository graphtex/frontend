import React from 'react';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect } from 'react';
import Logo from './logo';

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
      style={{height: 120 }}
      className={`${styles.navbar} ${offset === 0 ? '' : styles.show_shadow}`}
    >
      <Logo/>
    </h1>
  );
};

export default NavBar