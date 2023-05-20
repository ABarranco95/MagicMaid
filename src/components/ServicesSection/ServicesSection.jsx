import React from 'react';
import { Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText, Grid, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import DustIcon from '@mui/icons-material/DeleteSweep';
import MopIcon from '@mui/icons-material/FormatColorFill';
import BathIcon from '@mui/icons-material/Bathtub';
import KitchenIcon from '@mui/icons-material/Kitchen';
import standardCleanImage from '../../assets/Standard.jpg';
import deepCleanImage from '../../assets/Deep.jpg';
import movingCleanImage from '../../assets/Moving.jpg';
import { Helmet } from 'react-helmet';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    marginBottom: '2rem',
    textDecoration: 'none',
    color: 'black',
  },
  media: {
    objectFit: 'cover',
    height: 140,
  },
  cardContent: {
    padding: '2rem',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'black',
  },
  listItemText: {
    '& a': {
      textDecoration: 'none',
    },
  },
  serviceType: {
    marginBottom: '1rem',
    textDecoration: 'none',
    color: 'black',
    '& a': {
      textDecoration: 'none',
    },
  },
  button: {
    marginTop: '1rem',
    width: '100%',
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  moreInfoLink: {
    textDecoration: 'none',
    color: 'black',
    alignSelf: 'flex-end',
  },
  listItemText: {
    '& a': {
      textDecoration: 'none',
    },
  },
};

const ServicesSection = () => {
  const services = [
    {
      name: "Standard Clean",
      image: standardCleanImage,
      tasks: [
        { icon: <DustIcon />, description: "Dusting surfaces for a clean, dust-free environment" },
        { icon: <MopIcon />, description: "Vacuuming and mopping floors for a tidy home" },
        { icon: <BathIcon />, description: "Cleaning and sanitizing bathrooms for hygiene and comfort" },
        { icon: <KitchenIcon />, description: "Kitchen cleaning for a pleasant cooking experience" },
      ],
      path: "/services/standard-clean",
    },
    {
      name: "Deep Clean",
      image: deepCleanImage,
      tasks: [
        { icon: <DustIcon />, description: "Includes all tasks in Standard Clean plus more" },
        { icon: <KitchenIcon />, description: "Deep cleaning of kitchen appliances for a fresher kitchen" },
        { icon: <BathIcon />, description: "Interior window cleaning for a clearer view" },
        { icon: <MopIcon />, description: "Cleaning of baseboards and door frames" },
      ],
      path: "/services/deep-clean",
    },
    {
      name: "Moving Clean",
      image: movingCleanImage,
      tasks: [
        { icon: <KitchenIcon />, description: "Thorough cleaning of inside cabinets and closets" },
        { icon: <DustIcon />, description: "Professional wall cleaning services" },
        { icon: <MopIcon />, description: "Comprehensive garage cleaning and tidying" },
      ],
      path: "/services/moving-clean",
    },
  ];
  
  return (
    <Box sx={{ padding: '2rem' }}>
      <Helmet>
      <title>Top-Rated Professional House Cleaning Services | Home Sparkle Pros</title>
        <meta name="description" content="Discover our range of top-rated professional cleaning services including standard, deep, and moving clean. Each service is tailored to your needs for homes in Fresno, Madera, and Clovis. Experience a sparkly clean home with Home Sparkle Pros." />
      </Helmet>
      <Typography variant="h4" sx={styles.title}>Our Services</Typography>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={service.name}>
            <Card sx={styles.card}>
            <Link to={service.path} sx={{ textDecoration: 'none', color: 'inherit' }}>

                <CardMedia component="img" image={service.image} alt={`${service.name} - Home Sparkle Pros`} sx={styles.media} />
                <CardContent sx={styles.cardContent}>
                  <Typography variant="h5" sx={styles.serviceType}>{service.name}</Typography>
                  <List>
                    {service.tasks.map((task, index) => (
                      <ListItem key={index}>
                        {task.icon}
                        <ListItemText primary={task.description} sx={{ textDecoration: 'none !important' }} />


                      </ListItem>
                    ))}
                  </List>
                  <Button variant="contained" color="primary" sx={styles.button}>Book Now</Button>
<Button variant="outlined" color="secondary" sx={{...styles.button, color: 'black', borderColor: 'black'}}>Get Free Quote</Button>
<Link to={service.path} sx={styles.moreInfoLink}>More Info</Link>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;

