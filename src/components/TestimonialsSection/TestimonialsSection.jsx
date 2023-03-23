import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { testimonialsData } from '../../data/mockData';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>What Our Customers Say</h3>
        <div className={styles.gridContainer}>
          {testimonialsData.map((testimonial, index) => {
            return (
              <div className={styles.gridItem} key={index}>
                <div className={styles.testimonialCard}>
                  <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                  <div className={styles.testimonialRating}>
                  {[...Array(parseInt(testimonial.stars) || 0)].map((_, i) => (
    <FontAwesomeIcon key={i} icon={faStar} className={styles.starIcon} />
  ))}
                  </div>
                  <p className={styles.testimonialAuthor}>{testimonial.author}</p>
                  <p className={styles.testimonialPosition}>{testimonial.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
