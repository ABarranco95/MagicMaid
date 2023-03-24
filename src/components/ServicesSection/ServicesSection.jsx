import React, { useState, useEffect } from 'react';
import { servicesData } from '../../data/mockData';
import { Link } from 'react-router-dom';
import styles from './ServicesSection.module.css';
import standardCleanImage from '../../assets/Standard.jpg';
import deepCleanImage from '../../assets/Deep.jpg';
import movingCleanImage from '../../assets/Moving.jpg';

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services data
    setServices(servicesData);
  }, []);

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>Our Services</h3>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <div className={styles.serviceCard}>
              <img className={styles.serviceImage} src={standardCleanImage} alt="Standard Clean" />
              <div className={styles.serviceContent}>
                <h4 className={styles.serviceTitle}>Standard Clean</h4>
                <p className={styles.serviceDescription}>Keep your home tidy and organized with our Standard Clean service. Our team of experts will clean and sanitize all areas of your home to ensure a clean and comfortable living space.</p>
                <Link to="/cleanings/standard-cleaning" className={styles.ctaButton}>Learn More</Link>

              </div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.serviceCard}>
              <img className={styles.serviceImage} src={deepCleanImage} alt="Deep Clean" />
              <div className={styles.serviceContent}>
                <h4 className={styles.serviceTitle}>Deep Clean</h4>
                <p className={styles.serviceDescription}>Get a thorough cleaning for your home with our Deep Clean service. We'll take care of every nook and cranny, making sure your home is sparkling clean and fresh.</p>
                <Link to="/cleanings/deep-cleaning" className={styles.ctaButton}>Learn More</Link>

              </div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.serviceCard}>
              <img className={styles.serviceImage} src={movingCleanImage} alt="Moving Clean" />
              <div className={styles.serviceContent}>
                <h4 className={styles.serviceTitle}>Moving Clean</h4>
                <p className={styles.serviceDescription}>Moving can be a hassle, but we're here to help make it easier. Our Moving Clean service ensures that your home is left spotless and ready for the next residents. We'll take care of the cleaning so you can focus on settling into your new space.</p>
                <Link to="/cleanings/moving-cleaning" className={styles.ctaButton}>Learn More</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
