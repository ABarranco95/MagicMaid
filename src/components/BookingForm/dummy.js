import React, { useState, useEffect, useRef } from 'react';
import styles from './BookingForm.module.css';
import Select from 'react-select';
import Footer from '../Footer/Footer';

const BookingForm = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const iframeRef = useRef(null);

  const setIframeHeight = () => {
    if (window.innerWidth <= 600) {  // smaller screens
      return '5900px';
    } else if (window.innerWidth > 600 && window.innerWidth <= 805) {  // mobile
      return '5600px';
    } else if (window.innerWidth > 805 && window.innerWidth <= 1050) { // tablet
      return '4700px';
    } else {  // desktop
      return '3940px';
    }
};



  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'setHeight' && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const renderIframe = (src) => (
    <iframe
      title="Booking Form"
      ref={iframeRef}
      src={src}
      style={{ border: 'none', height: setIframeHeight(), overflow: 'hidden' }}
      width="100%"
      scrolling="no"
      id="iFrameResizer0"
    ></iframe>
  );

 
  const options = [
    { value: 'Madera', label: 'Madera, CA' },
    { value: 'Fresno', label: 'Fresno, CA' },
    { value: 'Clovis', label: 'Clovis, CA' },
    { value: 'Raleigh', label: 'Raleigh, NC' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      borderBottom: '2px solid #333', // Change the color and thickness as per your preference
      borderRadius: '0',
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
        borderBottom: '2px solid #333',
      },
    }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? '#007bff' : 'white',
    padding: 10,
  }),
  input: (provided) => ({
    ...provided,
    outline: 'none',
  }),
};


  const handleChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };

  return (
    <div className={selectedCity ? styles.bookingForm : styles.bookingFormNoCity}>
      {!selectedCity ? (
        <>
          <header>
            <h1 className={styles.headerTitle}>Book a Cleaning in Your City</h1>
            <p className={styles.headerSubtitle}>Choose your city and we'll take care of the rest.</p>
          </header>
          <section className={styles.dropdownContainer}>
            <label htmlFor="city" className={styles.dropdownLabel}>Select your city:</label>
            <Select
              id="city"
              options={options}
              styles={customStyles}
              onChange={handleChange}
            />
          </section>
        </>
      ) : (
        // Render the iframe only when a city is selected
        <>
          {selectedCity === 'Raleigh'
            ? renderIframe("https://homesparklepros.bookingkoala.com/booknow/raleigh-house-cleaning?embed=true&bar=false")
            : renderIframe("https://homesparklepros.bookingkoala.com/booknow/home_cleaning?embed=true&bar=false")}
          {/* <Footer /> */}
        </>
      )}
      <script src="https://homesparklepros.bookingkoala.com/resources/embed.js" defer></script>
    </div>
  );
};

export default BookingForm
