import React from 'react';
import styles from './DeepCleanPage.module.css';
import deepCleanImage from '../../../assets/Deep.jpg';
import Footer from '../../../components/Footer/Footer';

const DeepCleanPage = () => {
  return (
    <>

    
    <div className={styles.deepClean}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Deep Cleaning</h1>
        <div className={styles.pageContent}>
          <img src={deepCleanImage} alt="Deep Cleaning" className={styles.pageImage} />
          <p className={styles.introText}>Our Deep Clean service is perfect for those who want a thorough cleaning of their home. We'll take care of every nook and cranny, making sure your space is left sparkling clean and fresh. Whether you're looking to do a seasonal clean or just need a little extra help getting your home in top shape, our team of experts is here to help.</p>
          <h2 className={styles.serviceTitle}>What's included in our Deep Clean service?</h2>
          <ul className={styles.serviceList}>
            <li>Dusting and wiping all surfaces, including furniture, countertops, and shelves</li>
            <li>Cleaning and sanitizing bathrooms, including toilets, sinks, and showers or tubs</li>
            <li>Vacuuming and/or sweeping and mopping all floors, including carpets, rugs, and hardwood floors</li>
            <li>Cleaning kitchen appliances and surfaces, including stovetops, ovens, microwaves, and refrigerators</li>
            <li>Washing interior windows and mirrors</li>
            <li>And more!</li>
          </ul>
          <p className={styles.outroText}>We use high-quality cleaning products and equipment to ensure that your space is left sparkling clean and fresh. Our team of experienced and highly trained cleaners is dedicated to providing the highest level of customer service and satisfaction.</p>
          <p className={styles.contactText}>Contact us today to schedule your Deep Clean service and experience the difference of working with a professional and reliable cleaning company in Fresno, Madera, and Clovis.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DeepCleanPage;
