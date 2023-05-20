import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Select from 'react-select';
import { Box, Typography } from '@mui/material';

const BookingForm = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const iframeRef = useRef(null);

  const setIframeHeight = () => {
    const width = window.innerWidth;
  
    if (width <= 540) { // Extra small devices (portrait phones)
      return '5950px';
    } else if (width > 480 && width <= 737) { // Small devices (large portrait phones, small landscape phones)
      return '5500px';
    } else if (width > 700 && width <= 720) { // Small medium devices (large landscape phones, small tablets)
      return '5400px';
    } else if (width > 720 && width <= 965) { // Medium devices (large tablets)
      return '4900px';
    } else if (width > 840 && width <= 971) { // Large medium devices (small desktops)
      return '4400px';
    } else if (width > 972 && width <= 1280) { // Large devices (medium desktops)
      return '4950px';
    } else if (width > 1080 && width <= 1300) { // Extra large devices (large desktops)
      return '4650px';
    } else if (width > 1300 && width <= 1768) { // 2X large devices (extra large desktops)
      return '4600px';
    } else { // 3X large devices (super large desktops)
      return '3500px';
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
    <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', width: '80%' }}>
      <Helmet>
        <title>Book Professional House Cleaning Services in Fresno, Madera, and Clovis, CA</title>
        <meta name="description" content="Schedule your house cleaning with HomeSparkle Pros today! Trusted, local cleaning experts in Fresno, Madera, and Clovis, CA. Get your free quote now!" />
      </Helmet>
      <Box sx={{ textAlign: 'center', marginTop: 10, marginLeft: 5,
      marginRight: 5 }}>
        <Typography variant="h5" >Experience Spotless Cleanliness with Our Professional House Cleaning Services</Typography>
        <Typography variant="body1" sx={{ marginTop: 5 }}>Serving Fresno, Madera, and Clovis, CA. Book now and we'll handle the rest. Your satisfaction is our guarantee.</Typography>
      </Box>
      {
        renderIframe("https://homesparklepros.bookingkoala.com/booknow/home_cleaning?embed=true&bar=false")
      }
      
    </Box>
  );
};

export default BookingForm;
