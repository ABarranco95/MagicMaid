import React from 'react';
import { Typography, Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LeadForm from '../components/LeadForm/LeadForm';

const ContactUsPage = () => {
  const styles = {
    pageContainer: { padding: '20px' },
    pageTitle: { textAlign: 'center', marginBottom: '20px' },
    description: { marginTop: '20px', lineHeight: '1.5' },
    contactForm: { marginTop: '30px', display: 'flex', flexDirection: 'column' },
    contactField: { marginTop: '10px' },
    submitButton: { marginTop: '20px' },
  };

  return (
    <div style={styles.pageContainer}>
      <Typography variant="h2" style={styles.pageTitle}>
        Contact Home Sparkle Pros
      </Typography>
      <Typography variant="body1" style={styles.description}>
        We are always here to help. If you have questions, comments, or would like to schedule a service, feel free to contact us by phone or fill out the contact form below. We look forward to hearing from you.
      </Typography>
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        {/* <Typography variant="h5" style={{ marginBottom: '10px' }}>
          Contact Information
        </Typography> */}
        <List>
          {/* <ListItem>
            <PhoneIcon />
            <ListItemText primary="559-785-2857" />
          </ListItem> */}
          <LeadForm />
        </List>
      </Paper>
      <Typography variant="h4" style={{ ...styles.pageTitle, ...{ fontSize: '1.6rem', marginTop: '30px' } }}>
        Contact Us
      </Typography>
    </div>
  );
};

export default ContactUsPage;
