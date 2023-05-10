import React from 'react';
import styles from './HeroSection.module.css';
import heroBackgroundImage from '../../assets/heroBackgroundImage.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Home Sparkle Pros 
        </h1>
        <h4 className={styles.subheading}>
          Your Trusted Home Cleaning Team
        </h4>
        <div className={styles.ctaContainer}>
          <Link to="/booking-form" className={styles.ctaButton}>
            Book Online
          </Link>
          <Link to="/quote-form" className={styles.ctaButtonAlt}>
            Get Quote
          </Link>
        </div>
        {/* <div className={styles.phoneNumbers}>
          <span className={styles.phoneNumber}>Call us now: 559-785-2857</span>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;