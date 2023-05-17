import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Select from 'react-select';
import { Box, Typography } from '@mui/material';

const BookingForm = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const iframeRef = useRef(null);

  const setIframeHeight = () => {
    if (window.innerWidth <= 600) {  // smaller screens
      return '5700px';
    } else if (window.innerWidth > 600 && window.innerWidth <= 805) {  // mobile
      return '4900px';
    } else if (window.innerWidth > 805 && window.innerWidth <= 1050) { // tablet
      return '4000px';
    } else {  // desktop
      return '3600px';
    }
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

  const handleChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'setHeight' && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, [renderIframe]);

  return (
    <Box sx={{ mt: 10 }}>
      <Helmet>
        <title>Book Professional House Cleaning Services in Fresno, Madera, and Clovis, CA</title>
        <meta name="description" content="Schedule your house cleaning with HomeSparkle Pros today! Trusted, local cleaning experts in Fresno, Madera, and Clovis, CA. Get your free quote now!" />
      </Helmet>
      <Typography variant="h4">Book Professional House Cleaning Services in Fresno, Madera, and Clovis, CA</Typography>
      <Typography variant="h7">Choose your city and we'll take care of the rest.</Typography>
      {
        renderIframe("https://homesparklepros.bookingkoala.com/booknow/home_cleaning?embed=true&bar=false")
      }
      
    </Box>
  );
};

export default BookingForm;
