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
        {/* <div className={styles.phoneNumbers}>
          <span className={styles.phoneNumber}>Madera, CA: (559) 785-2857</span>
          <span className={styles.phoneNumber}>Fresno, CA: (559) 785-2857</span>
          <span className={styles.phoneNumber}>Clovis, CA: (559) 785-2857</span>
          <span className={styles.phoneNumber}>Sacramento, CA: (279) 203-0447</span>
          <span className={styles.phoneNumber}>Raleigh, NC: (984) 777-8308</span>
        </div> */}
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
