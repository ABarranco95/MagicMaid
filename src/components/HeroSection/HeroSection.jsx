import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import heroBackgroundImage from '../../assets/heroBackgroundImage.jpg';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        p: { xs: 2, sm: 4, md: 8 },
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      }}
    >
      <Helmet>
        <title>Home Cleaning Services in Fresno, Madera, and Clovis, CA | Home Sparkle Pros</title>
        <meta name="description" content="Home Sparkle Pros provides trusted, professional home cleaning services in Fresno, Madera, and Clovis, CA. Book online or get a free quote today!" />
      </Helmet>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'rgba(0, 0, 0, 0.4)',
        }}
      ></Box>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
        Home Sparkle Pros
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Trusted Home Cleaning Services in Fresno, Madera, and Clovis, CA
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/book-a-service"
          sx={{ textTransform: 'none' }}
        >
          Book Online
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          component={Link}
          to="/get-a-free-quote"
          sx={{ textTransform: 'none', borderColor: '#fff' }}
        >
          Get a Free Quote
        </Button>
      </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
