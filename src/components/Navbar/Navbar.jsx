import React from 'react';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={logo} alt="Logo" />
          <h1 className={styles.brandName}>Magic Maid</h1>
        </div>
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            &times;
          </button>
          <ul className={styles.menuList}>
            <li>
              <a href="#">Cleanings</a>
            </li>
            <li>
              <a href="#">Book Now</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
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
