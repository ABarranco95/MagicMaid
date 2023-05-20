import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import deepCleanImage from "../../../assets/Deep.jpg"

const DeepCleanPage = () => {
  const styles = {
    pageContainer: { padding: '20px' },
    pageTitle: { textAlign: 'center', marginBottom: '20px' },
    pageImage: { width: '100%', objectFit: 'cover' },
    description: { marginTop: '20px', lineHeight: '1.5' },
  };

  return (
    <div style={styles.pageContainer}>
      <Typography variant="h2" style={styles.pageTitle}>
        Deep Cleaning Service in Fresno, Clovis, Madera, CA
      </Typography>
      <img src={deepCleanImage} alt="Deep Cleaning Service" style={styles.pageImage} />
      <Typography variant="body1" style={styles.description}>
        Home Sparkle Pros specializes in providing deep cleaning services for those who require an extra level of care. Our service includes all tasks in the standard clean plus deep cleaning appliances, interior window cleaning, and attention to baseboards and door frames.
      </Typography>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Our Deep Cleaning Includes:
      </Typography>
      <Paper style={{ marginTop: '20px' }}>
        <List>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="All tasks in Standard Clean" />
          </ListItem>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="Deep cleaning appliances" />
          </ListItem>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="Interior window cleaning" />
          </ListItem>
          <ListItem>
            <HomeIcon />
            <ListItemText primary="Baseboards and door frames" />
          </ListItem>
        </List>
      </Paper>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Why Our Deep Cleaning Service Stands Out
      </Typography>
      <Typography variant="body1" style={styles.description}>
        Our team at Home Sparkle Pros is meticulously trained to handle a deep clean. We use the latest cleaning techniques and eco-friendly solutions to ensure your home not only looks clean but feels deeply refreshed. We go the extra mile, so you don't have to.
      </Typography>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        What Our Clients Say
      </Typography>
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="body1" style={styles.description}>
          "The deep cleaning service from Home Sparkle Pros is second to none. They were extremely thorough and left no stone unturned. My home feels brand new!" - John Smith, Clovis, CA
        </Typography>
      </Paper>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Contact Us Today for a Deep Clean
      </Typography>
      <Typography variant="body1" style={styles.description}>
        Ready for a deep clean? Get in touch with us today at 559-785-2857 or email us at homesparklepros@gmail.com. Our professional cleaning team is ready to serve you in Fresno, Clovis, and Madera, CA.
      </Typography>
    </div>
  );
};

export default DeepCleanPage;

