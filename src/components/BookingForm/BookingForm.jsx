import React, { useState, useEffect, useRef } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [selectedCity, setSelectedCity] = useState('');

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

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const renderIframe = (src) => (
    <iframe
      ref={iframeRef}
      src={src}
      style={{ border: 'none', height: '100vh' }}
      width="100%"
      scrolling="yes"
    ></iframe>
  );

  return (
    <div className={selectedCity ? styles.bookingForm : styles.bookingFormNoCity}>
      {!selectedCity ? ( // Update this condition
        <div className={styles.dropdownContainer}>
          <h2>Book a Cleaning in Your City</h2>
          <select value={selectedCity} onChange={handleCityChange} className={styles.dropdown}>
            <option value="" disabled>Select a city</option>
            <option value="Madera">Madera, CA</option>
            <option value="Fresno">Fresno, CA</option>
            <option value="Clovis">Clovis, CA</option>
            <option value="Raleigh">Raleigh, NC</option>
          </select>
        </div>
      ) : (
        // Render the iframe only when a city is selected
        selectedCity === 'Raleigh'
          ? renderIframe("https://homesparklepros.bookingkoala.com/booknow/raleigh-house-cleaning?embed=true&bar=false")
          : renderIframe("https://homesparklepros.bookingkoala.com/booknow/home_cleaning?embed=true&bar=false")
      )}
      <script src="https://homesparklepros.bookingkoala.com/resources/embed.js" defer></script>
    </div>
  );
};

export default BookingForm;
