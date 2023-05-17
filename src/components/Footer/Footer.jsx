import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <h3>Our Services</h3>
          <ul>
            <li><a href="/cleanings/standard-cleaning">Standard Cleaning</a></li>
            <li><a href="/cleanings/deep-cleaning">Deep Cleaning</a></li>
            <li><a href="/cleanings/moving-cleaning">Moving Cleaning</a></li>
          </ul>
        </div>
        <div className={styles.locations}>
          <h3>Locations</h3>
          <ul>
            <li>Madera, CA</li>
            <li>Fresno, CA</li>
            <li>Clovis, CA</li>
          </ul>
        </div>
        <div className={styles.social}>
          <h3>Contact Us</h3>
          <ul>
            <li><a href="tel:+15597852857"> Fresno (559) 785-2857</a></li>
            <li><a href="mailto:homesparklepros@gmail.com">homesparklepros@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copywrite}>
        <p>&copy; 2023 Home Sparkle Pros. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
