import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import movingCleanImage from "../../../assets/Deep.jpg"

const MovingCleanPage = () => {
  const styles = {
    pageContainer: { padding: '20px' },
    pageTitle: { textAlign: 'center', marginBottom: '20px' },
    pageImage: { width: '100%', objectFit: 'cover' },
    description: { marginTop: '20px', lineHeight: '1.5' },
  };

  return (
    <div style={styles.pageContainer}>
      <Typography variant="h2" style={styles.pageTitle}>
        Moving Cleaning Service in Fresno, Clovis, Madera, CA
      </Typography>
      <img src={movingCleanImage} alt="Moving Cleaning Service" style={styles.pageImage} />
      <Typography variant="body1" style={styles.description}>
        Home Sparkle Pros provides a comprehensive moving cleaning service for those transitioning into or out of a home. Our service includes all tasks in the Deep Clean, plus cleaning inside cabinets and closets, wall cleaning, and garage cleaning.
      </Typography>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Our Moving Cleaning Includes:
      </Typography>
      <Paper style={{ marginTop: '20px' }}>
        <List>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="All tasks in Deep Clean" />
          </ListItem>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="Cleaning inside cabinets and closets" />
          </ListItem>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="Wall cleaning" />
          </ListItem>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="Garage cleaning" />
          </ListItem>
        </List>
      </Paper>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Making Your Move Easier
      </Typography>
      <Typography variant="body1" style={styles.description}>
        We understand that moving can be stressful. Our goal is to make the transition easier by providing a thorough cleaning of your home. Let us handle the cleaning so you can focus on settling into your new space.
      </Typography>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Contact Us Today for a Moving Clean
      </Typography>
      <Typography variant="body1" style={styles.description}>
        Ready to make your move smoother with our moving clean service? Get in touch with us today at 559-785-2857 or email us at homesparklepros@gmail.com. We are ready to serve you in Fresno, Clovis, and Madera, CA.
      </Typography>
    </div>
  );
};

export default MovingCleanPage;
