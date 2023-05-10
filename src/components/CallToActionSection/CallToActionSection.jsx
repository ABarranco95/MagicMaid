import React from 'react';
import styles from './CallToActionSection.module.css';

const CallToActionSection = () => {
  return (
    <div className={`${styles.callToAction} testimonialCard`}>
      <h4 className={styles.sectionTitle}>Ready for a Sparkling Clean Home?</h4>
      <div className={styles.buttonsContainer}>
        <a href="/booking-form" className={styles.ctaButton}>
          Book Now
        </a>
        <a href="/quote-form" className={styles.ctaButtonAlt}>
          Get Quote
        </a>
      </div>
    </div>
  );
};

export default CallToActionSection;