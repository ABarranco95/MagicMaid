import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to="/">
            <img src={logo} alt="Home Sparkle Pros" />
          </Link>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            <li>
              <Link to="/booking-form" className={styles.ctaPrimary}>
                Book Now
              </Link>
            </li>
            <li>
              <Link to="/lead-form" className={styles.ctaSecondary}>
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
