import React from 'react';
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to="/">
            <img src={logo} alt="Home Sparkle Pros" />
          </Link>
        </div>
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            &times;
          </button>
          <ul className={styles.menuList}>
            <li>
              <Link to="/cleanings">Cleanings</Link>
            </li>
            <li>
              <Link to="/booking-form">Book Now</Link>
            </li>
            <li>
              <Link to="/gift-cards">Gift Cards</Link>
            </li>
            <li>
              <a href="tel:5597852857">Contact Us</a>
            </li>
          </ul>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
