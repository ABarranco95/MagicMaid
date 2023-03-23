import React, { useState, useEffect } from 'react';
import { servicesData } from '../../data/mockData';
import styles from './ServicesSection.module.css';

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
          {services.map((service, index) => {
            return (
              <div className={styles.gridItem} key={index}>
                <div className={styles.serviceCard}>
                  <img className={styles.serviceImage} src={service.imageUrl} alt={service.title} />
                  <div className={styles.serviceContent}>
                    <h4 className={styles.serviceTitle}>{service.title}</h4>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    <button className={styles.ctaButton}>Learn More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
