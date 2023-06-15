import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet';
import heroBackgroundImage from '../../assets/heroBackgroundImage.jpg';

const HeroSection = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid container component={Box} sx={{ overflow: 'hidden', bgcolor: '#ffffff', px: 2 }}>
      <Helmet>
        <title>Home Cleaning Services in Fresno, Madera, and Clovis, CA | Home Sparkle Pros</title>
        <meta name="description" content="Home Sparkle Pros provides trusted, professional home cleaning services in Fresno, Madera, and Clovis, CA. Book online or get a free quote today!" />
      </Helmet>

      <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: matchesMD ? 'flex-start' : 'center',
            textAlign: matchesMD ? 'left' : 'center',
            p: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Typography variant={matchesMD ? 'h3' : 'h3'} align="inherit" gutterBottom sx={{ color: '#165085', fontWeight: 'fontWeightBold' }}>
          Experience The Difference Of A Sparkling Clean Home Without The Stress
          </Typography>
          <Typography variant="h6" align="inherit" gutterBottom sx={{ color: '#165085' }}>
            With <span style={{ textDecoration: 'underline' }}>Numerous Happy Home Owners Served:</span><br/>
            Your #1 Choice in Quality &amp; Reliability for House Cleaning Professionals Servicing Fresno, Clovis, and Madera
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'center',
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/get-a-free-quote"
              sx={{ textTransform: 'none', borderRadius: 28, minWidth: 200, py: 1 }}
            >
              Get A Quote
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              component={Link}
              to="/get-a-free-quote"
              sx={{
                textTransform: 'none',
                borderRadius: 28,
                minWidth: 200,
                py: 1,
                borderColor: '#fff',
              }}
            >
              Call Now For A FREE Estimate
            </Button>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
        <Box
          sx={{
            height: {xs: '30vh', md: '60vh'},
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${heroBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
