import React from 'react';
import styles from './StandardCleanPage.module.css';
import standardCleanImage from '../../../assets/Standard.jpg';
import Footer from '../../../components/Footer/Footer';

const StandardCleanPage = () => {
  return (
    <>
    <div className={styles.standardClean}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Standard Cleaning</h1>
        <div className={styles.pageContent}>
          <img src={standardCleanImage} alt="Standard Cleaning" className={styles.pageImage} />
          <p className={styles.introText}>Keep your home tidy and organized with our Standard Clean service. Our team of experts will clean and sanitize all areas of your home to ensure a clean and comfortable living space.</p>
          <h2 className={styles.serviceTitle}>What's included in our Standard Clean service?</h2>
          <ul className={styles.serviceList}>
            <li>Dusting and wiping all surfaces, including furniture, countertops, and shelves</li>
            <li>Cleaning and sanitizing bathrooms, including toilets, sinks, and showers or tubs</li>
            <li>Vacuuming and/or sweeping and mopping all floors, including carpets, rugs, and hardwood floors</li>
            <li>Cleaning kitchen appliances and surfaces, including stovetops, ovens, microwaves, and refrigerators</li>
            <li>Removing trash and recycling</li>
            <li>And more!</li>
          </ul>
          <p className={styles.outroText}>We use high-quality cleaning products and equipment to ensure that your space is left sparkling clean and fresh. Our team of experienced and highly trained cleaners is dedicated to providing the highest level of customer service and satisfaction.</p>
          <p className={styles.contactText}>Contact us today to schedule your Standard Clean service and experience the difference of working with a professional and reliable cleaning company in Fresno, Madera, and Clovis.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default StandardCleanPage;
