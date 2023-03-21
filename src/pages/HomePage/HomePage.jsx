import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Magic Maid</h1>
      <h2 className={styles.subheading}>Professional Home Cleaning Services</h2>
      <p className={styles.text}>
        Welcome to Magic Maid, your go-to home cleaning service provider in
        Fresno, CA, and surrounding areas like Clovis, CA and Madera, CA. We
        offer <span className={styles.highlight}>recurring or one-time cleans</span>, including
        professional standard, deep, and moving deep cleaning services. Our
        cleaners have a minimum of <span className={styles.highlight}>2+ years of professional
        experience</span> and high clean satisfactions!
      </p>
      <p className={styles.text}>
        We have high flexibility and allow <span className={styles.highlight}>online booking</span>! We
        aim to provide the best home cleaning professional services and focus
        on high customer satisfaction with our detailed cleaning. We offer a
        <span className={styles.highlight}>Customer Happy Guarantee</span>!
      </p>
      <a href="/booking" className={styles.button}>Book a Cleaning Now</a>
    </div>
  );
};

export default HomePage;
