import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Ready for a Sparkling Clean Home in Fresno, Madera, and Clovis, CA?
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" component={Link} to="/booking-form" sx={{ mr: 1 }}>
          Book Now
        </Button>
        <Button variant="outlined" component={Link} to="/quote-form" sx={{ borderColor: '#000', color: '#000' }}>
          Get a Quote
        </Button>
      </Box>
    </Box>
  );
};

export default CallToActionSection;
