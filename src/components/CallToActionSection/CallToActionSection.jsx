import React from 'react';
import { FaPhone } from 'react-icons/fa';
import styles from './CallToActionSection.module.css';

const CallToActionSection = () => {
  return (
    <div className={`${styles.callToAction} testimonialCard`}>
      <h4 className={styles.sectionTitle}>Ready for a Sparkling Clean Home?</h4>
      <div className={styles.buttonsContainer}>
        <a href="https://themagicmaidcleaning.bookingkoala.com/booknow/home_cleaning" className={styles.ctaButton}>
          Book Online Now
        </a>
        <a href="tel:5597852857" className={styles.ctaButton}>
          <FaPhone className={styles.phoneIcon} />
          (559) 785-2857
        </a>
      </div>
    </div>
  );
};

export default CallToActionSection;
