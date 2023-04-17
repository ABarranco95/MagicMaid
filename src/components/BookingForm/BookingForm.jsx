import React, { useEffect, useRef } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'setHeight' && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = '100vh';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.bookingForm}>
      <iframe
        ref={iframeRef}
        src="https://themagicmaidcleaning.bookingkoala.com/booknow/home_cleaning?embed=true&bar=false"
        style={{ border: 'none', height: '100vh' }}
        width="100%"
        scrolling="yes"
      ></iframe>
      <script src="https://themagicmaidcleaning.bookingkoala.com/resources/embed.js" defer></script>
    </div>
  );
};

export default BookingForm;
