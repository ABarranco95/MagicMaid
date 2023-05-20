import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import standardCleanImage from "../../../assets/Standard.jpg"

const StandardCleanPage = () => {
  const styles = {
    pageContainer: { padding: '20px' },
    pageTitle: { textAlign: 'center', marginBottom: '20px' },
    pageImage: { width: '100%', objectFit: 'cover' },
    description: { marginTop: '20px', lineHeight: '1.5' },
  };

  return (
    <div style={styles.pageContainer}>
      <Typography variant="h2" style={styles.pageTitle}>
        Standard Cleaning Service in Fresno, Clovis, Madera, CA
      </Typography>
      <img src={standardCleanImage} alt="Standard Cleaning Service" style={styles.pageImage} />
      <Typography variant="body1" style={styles.description}>
        At Home Sparkle Pros, we offer a comprehensive standard cleaning service tailored to meet your needs. Whether it's dusting surfaces, vacuuming, mopping floors, or cleaning and sanitizing bathrooms and kitchens, our professionals ensure your home sparkles from corner to corner.
      </Typography>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Our Standard Cleaning Includes:
      </Typography>
      <Paper style={{ marginTop: '20px' }}>
        <List>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="Dusting surfaces" />
          </ListItem>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="Vacuuming and mopping floors" />
          </ListItem>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="Cleaning and sanitizing bathrooms" />
          </ListItem>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="Kitchen cleaning" />
          </ListItem>
        </List>
      </Paper>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Why Choose Our Standard Cleaning Service?
      </Typography>
      <Typography variant="body1" style={styles.description}>
        Our standard cleaning service is designed to maintain a clean and healthy environment in your home. We utilize eco-friendly cleaning solutions and advanced techniques to remove dust, dirt, and grime from every nook and cranny. With our service, you can enjoy peace of mind knowing that your home is being cared for by the professionals at Home Sparkle Pros.
      </Typography>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Customer Testimonial
      </Typography>
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="body1" style={styles.description}>
          "I've been using Home Sparkle Pros' standard cleaning service for over a year now, and I couldn't be happier. They're thorough, reliable, and always leave my home sparkling clean. I highly recommend their services." - Jane Doe, Fresno, CA
        </Typography>
      </Paper>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Ready for a Sparkling Clean Home?
        </Typography>
      <Typography variant="body1" style={styles.description}>
        Call us today at 559-785-2857 or email us at homesparklepros@gmail.com to schedule your standard cleaning service. We look forward to bringing the sparkle back to your home!
      </Typography>
    </div>
  );
};

export default StandardCleanPage;

