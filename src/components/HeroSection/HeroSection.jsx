import React from 'react';
import styles from './HeroSection.module.css';
import heroBackgroundImage from '../../assets/heroBackgroundImage.jpg';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <img
        src={heroBackgroundImage}
        alt="Hero background"
        className={styles.heroImage}
      />
      <div className={styles.content}>
        <h1 className={styles.heading}>The Best Home Cleaning Service in Fresno, CA</h1>
        <h4 className={styles.subheading}>High-Quality Cleaning with Unbeatable Customer Satisfaction</h4>
        <p className={styles.description}>
          At Magic Maid, we take pride in providing the highest quality cleaning services in the Fresno, CA area. Our team of experienced cleaners are dedicated to making your home look and feel its best.
        </p>
        <div className={styles.ctaContainer}>
          <a href="https://themagicmaidcleaning.bookingkoala.com/booknow/home_cleaning" className={styles.ctaButton}>Book Online Now</a>
          <a href="tel:5597852857" className={styles.phoneButton}>Call us: (559) 785-2857</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
