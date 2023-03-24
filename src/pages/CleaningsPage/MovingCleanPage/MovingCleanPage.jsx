import React from 'react';
import styles from './MovingCleanPage.module.css';
import movingCleanImage from '../../../assets/Moving.jpg';
import Footer from '../../../components/Footer/Footer';

const MovingCleanPage = () => {
  return (
    <>
     <div className={styles.movingClean}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Moving Cleaning</h1>
        <div className={styles.pageContent}>
          <img src={movingCleanImage} alt="Moving Cleaning" className={styles.pageImage} />
          <p className={styles.introText}>Moving can be a stressful and overwhelming experience, but at Your Company Name, we're here to help make the process easier. Our Moving Clean service ensures that your home is left spotless and ready for the next residents. We'll take care of the cleaning so you can focus on settling into your new space.</p>
          <h2 className={styles.serviceTitle}>What's included in our Moving Clean service?</h2>
          <ul className={styles.serviceList}>
            <li>Dusting and wiping all surfaces, including furniture, countertops, and shelves</li>
            <li>Cleaning and sanitizing bathrooms, including toilets, sinks, and showers or tubs</li>
            <li>Vacuuming and/or sweeping and mopping all floors, including carpets, rugs, and hardwood floors</li>
            <li>Cleaning kitchen appliances and surfaces, including stovetops, ovens, microwaves, and refrigerators</li>
            <li>Removing trash and recycling</li>
            <li>And more!</li>
          </ul>
          <p className={styles.outroText}>We use high-quality cleaning products and equipment to ensure that your space is left sparkling clean and fresh. Our team of experienced and highly trained cleaners is dedicated to providing the highest level of customer service and satisfaction.</p>
          <p className={styles.contactText}>Contact us today to schedule your Moving Clean service and experience the difference of working with a professional and reliable cleaning company in Fresno, Madera, and Clovis.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MovingCleanPage;
