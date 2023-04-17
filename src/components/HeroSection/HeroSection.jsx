import React from 'react';
import styles from './HeroSection.module.css';
import heroBackgroundImage from '../../assets/heroBackgroundImage.jpg';

const HeroSection = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Magic Maid: Your Trusted Home Cleaning Partner
        </h1>
        <h4 className={styles.subheading}>
          Professional Cleaning Services Tailored to Your Needs
        </h4>
        <div className={styles.ctaContainer}>
          <a
            href="/booking-form"
            className={styles.ctaButton}
          >
            Book Online Now
          </a>
          <a href="/quote-form" className={styles.ctaButtonAlt}>
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
