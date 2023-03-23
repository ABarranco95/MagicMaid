import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">Standard Cleaning</a></li>
            <li><a href="#">Deep Cleaning</a></li>
            <li><a href="#">Moving Cleaning</a></li>
          </ul>
        </div>
        <div className={styles.locations}>
          <h3>Locations</h3>
          <ul>
            <li>Madera</li>
            <li>Fresno</li>
            <li>Clovis</li>
          </ul>
        </div>
        <div className={styles.social}>
          <h3>Contact Us</h3>
          <ul>
            <li><a href="tel:+15597852857">(559) 785-2857</a></li>
            <li><a href="mailto:magicmaidhousecleaning@gmail.com">magicmaidhousecleaning@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copywrite}>
        <p>&copy; 2023 Magic Maid. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
