import React from 'react';
import styles from './CallToActionSection.module.css';

const CallToActionSection = () => {
  return (
    <div className={`${styles.callToAction} testimonialCard`}>
      <h4 className={styles.sectionTitle}>Ready for a Sparkling Clean Home?</h4>
      <div className={styles.buttonsContainer}>
        <a href="https://themagicmaidcleaning.bookingkoala.com/booknow/home_cleaning" className={styles.ctaButton}>
          Book Now
        </a>
        <a href="/get-a-quote" className={styles.ctaButton}>
          Get a Quote
        </a>
      </div>
    </div>
  );
};

export default CallToActionSection;