import React from 'react';
import { Typography, Box } from '@mui/material';
import HousekeepingIcon from '@mui/icons-material/Housekeeping';

const AboutUsPage = () => {
  const styles = {
    pageContainer: { padding: '20px' },
    pageTitle: { textAlign: 'center', marginBottom: '20px' },
    description: { marginTop: '20px', lineHeight: '1.5' },
  };

  return (
    <div style={styles.pageContainer}>
      <Typography variant="h2" style={styles.pageTitle}>
        About Home Sparkle Pros
      </Typography>
      <Box display="flex" alignItems="center" style={styles.description}>
        <HousekeepingIcon style={{ marginRight: '10px' }} />
        <Typography variant="body1">
          At Home Sparkle Pros, we specialize in top-notch home cleaning services in Fresno, Clovis, and Madera, CA. We're dedicated to making homes shine while providing excellent customer service.
        </Typography>
      </Box>
      <Typography variant="body1" style={styles.description}>
        As a leading cleaning business in the area, we offer a variety of services tailored to our clients' needs, from standard cleaning to deep cleaning and moving cleaning. Our trained and skilled team is committed to delivering quality results that exceed expectations. We believe in integrity, consistency, and attention to detail in every job we do.
      </Typography>
      <Typography variant="body1" style={styles.description}>
        Our mission is to provide a superior cleaning experience for our clients while fostering a culture of respect and appreciation for our team. When you choose Home Sparkle Pros, you're not just getting a clean house - you're investing in a cleaner, healthier, and happier living space.
      </Typography>
    </div>
  );
};

export default AboutUsPage;
