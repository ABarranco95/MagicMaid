import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>Magic Maid</a>
      <div className={styles.phone}>(559) 785-2857</div>
    </header>
  );
};

export default Header;
