// ServicesSection.js

import React from 'react';
import styles from './ServicesSection.module.css';
import standardCleanImage from '../../assets/Standard.jpg';
import deepCleanImage from '../../assets/Deep.jpg';
import movingCleanImage from '../../assets/Moving.jpg';

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>Our Services</h3>
        <div className={styles.serviceList}>
          <div className={styles.service}>
            <img className={styles.serviceImage} src={standardCleanImage} alt="Standard Cleaning Service" />
            <h4 className={styles.serviceTitle}>Standard Clean</h4>
            <ul className={styles.serviceTasks}>
              <li>Dusting surfaces</li>
              <li>Vacuuming and mopping floors</li>
              <li>Cleaning and sanitizing bathrooms</li>
              <li>Kitchen cleaning</li>
            </ul>
          </div>
          <div className={styles.service}>
            <img className={styles.serviceImage} src={deepCleanImage} alt="Deep Cleaning Service" />
            <h4 className={styles.serviceTitle}>Deep Clean</h4>
            <ul className={styles.serviceTasks}>
              <li>All tasks in Standard Clean</li>
              <li>Deep cleaning appliances</li>
              <li>Interior window cleaning</li>
              <li>Baseboards and door frames</li>
            </ul>
          </div>
          <div className={styles.service}>
            <img className={styles.serviceImage} src={movingCleanImage} alt="Moving Cleaning Service" />
            <h4 className={styles.serviceTitle}>Moving Clean</h4>
            <ul className={styles.serviceTasks}>
              <li>All tasks in Deep Clean</li>
              <li>Cleaning inside cabinets and closets</li>
              <li>Wall cleaning</li>
              <li>Garage cleaning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
