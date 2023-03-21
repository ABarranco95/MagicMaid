import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia, CardActions, Avatar, Box, Rating, Paper } from '@mui/material';
import { Phone, CheckCircle } from '@mui/icons-material';
import styles from './HomePage.module.css';
import { testimonialsData, servicesData } from '../../data/mockData';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </Container>
  );
};

// Hero Section
const HeroSection = () => (
  <Paper elevation={0} className={styles.hero}>
    <Typography variant="h2" align="center" gutterBottom>
      Magic Maid
    </Typography>
    <Typography variant="h5" align="center" gutterBottom>
      Professional Home Cleaning Services
    </Typography>
    <Box display="flex" justifyContent="center" mt={4}>
      <Button variant="contained" color="primary" startIcon={<Phone />} href="tel:5597852857">
        Call (559) 785-2857
      </Button>
    </Box>
  </Paper>
);

// Services Section
const ServicesSection = () => (
  <div className={styles.services}>
    <Typography variant="h4" align="center" gutterBottom className={styles.sectionTitle}>
      Our Services
    </Typography>
    <Grid container spacing={3}>
      {servicesData.map((service, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" height="140" image={service.imageUrl} alt={service.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

// Testimonials Section
const TestimonialsSection = () => (
  <div className={styles.testimonials}>
    <Typography variant="h4" align="center" gutterBottom className={styles.sectionTitle}>
      Testimonials
    </Typography>
    <Grid container spacing={3}>
      {testimonialsData.map((testimonial, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                <Avatar src={testimonial.imageUrl} alt={testimonial.name} />
              </Box>
              <Typography gutterBottom variant="h5" component="div">
                {testimonial.name}
              </Typography>
              <Rating value={testimonial.rating} readOnly />
              <Typography variant="body2" color="text.secondary">
                {testimonial.quote}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

// CallToAction Section
const CallToActionSection = () => (
    <div className={styles.callToAction}>
      <Typography variant="h4" align="center" gutterBottom className={styles.sectionTitle}>
        Ready for a Sparkling Clean Home?
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          href="https://magicmaidhousecleaning.com/booknow/home_cleaning"
          className={styles.ctaButton}
        >
          Book Online Now
        </Button>
        <Button variant="outlined" color="primary" className={styles.ctaButton}>
          <Phone fontSize="small" /> (559) 785-2857
        </Button>
      </Box>
    </div>
  );
  

export default HomePage;

