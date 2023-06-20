import React from 'react';
import { Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText, Grid, Button, Box, useMediaQuery, useTheme, Container, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import standardCleanImage from '../../assets/Standard.jpg';
import deepCleanImage from '../../assets/Deep.jpg';
import movingCleanImage from '../../assets/Moving.jpg';
import { Helmet } from 'react-helmet';

const ServicesSection = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  const services = [
    {
      name: "Standard Home Cleaning",
      image: standardCleanImage,
      tasks: [
        "Complete Dusting Ceiling to Floor",
        "Vacuuming and mopping floors for a tidy home",
        "Cleaning and sanitizing bathrooms for hygiene and comfort",
        "Kitchen cleaning for a pleasant cooking experience",
      ],
      path: "/get-a-free-quote",
    },
    {
      name: "Deep Home Cleaning",
      image: deepCleanImage,
      tasks: [
        "Includes all tasks in Standard Clean plus more",
        "Deep cleaning of kitchen appliances for a fresher kitchen",
        "Interior window cleaning for a clearer view",
        "Cleaning of baseboards and door frames",
      ],
      path: "/get-a-free-quote",
    },
    {
      name: "Move In/Out Cleaning",
      image: movingCleanImage,
      tasks: [
        "Thorough cleaning of inside cabinets and closets",
        "Professional appliance cleaning ",
        "Comprehensive garage cleaning and tidying",
        "Interior Home shines like new!"
      ],
      path: "/get-a-free-quote",
    },
  ];

  return (
    <Grid container component={Box} sx={{ overflow: 'hidden', bgcolor: '#165085', px: 2, paddingBottom: 5 }}>
      <Helmet>
        <title>Top-Rated Professional House Cleaning Services | Home Sparkle Pros</title>
        <meta name="description" content="Discover our range of top-rated professional cleaning services including standard, deep, and moving clean. Each service is tailored to your needs for homes in Fresno, Madera, and Clovis. Experience a sparkly clean home with Home Sparkle Pros." />
      </Helmet>
      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#FFFFFF', fontWeight: 600, p: { xs: 2, sm: 4, md: 6 }, marginTop: 6 }} >
          Our Most Popular Cleaning Services
        </Typography>
        <Typography variant="h6" align="center" gutterBottom sx={{ color: '#FFFFFF', fontWeight: 400, p: { xs: 2, sm: 4, md: 6 } }}>
          We are here to change the image of cleaning companies by offering fast, convenient services for customers of all sizes. At the very start of this
        </Typography>
        <Grid container spacing={3} justifyContent="center" >
          {services.map((service) => (
            <Grid item xs={12} sm={7} md={6} lg={4} key={service.name} >
              <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', minWidth: 280, maxWidth: 340, m: 1, borderRadius: 2, boxShadow: 5, backgroundColor: '#ffffff' }}>
              <CardMedia component="img" image={service.image} alt={`${service.name} - Home Sparkle Pros`} sx={{ objectFit: 'cover', height: 200, width: 'auto', borderRadius: '2px 2px 0 0' }} />
<CardContent sx={{ padding: '2rem' }}>
  <Typography variant="h5" align="center" sx={{ color: '#165085', fontWeight: 700 }}>{service.name}</Typography>
  <Divider sx={{ marginBottom: '1rem', marginTop: '1rem', height: '2px' }} />
  <List>
    {service.tasks.map((task, index) => (
      <React.Fragment key={index}>
        <ListItem>
          <ListItemText primary={task} sx={{ color: '#165085', fontWeight: 700, textDecoration: 'none' }}/>
        </ListItem>
        {index < service.tasks.length - 1 && <Divider sx={{ marginBottom: '1rem' }} />}
      </React.Fragment>
    ))}
  </List>
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: 4,
    }}
  >
    <Button
      variant="contained"
      color="secondary"
      component={Link}
      to={service.path}
      sx={{ textTransform: 'none', borderRadius: 28, minWidth: 200, py: 1 }}
    >
      Get A Quote
    </Button>
  </Box>
</CardContent>
</Card>
</Grid>
))}
</Grid>
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    my: 5,
  }}
>
  <Button
    variant="contained"
    color="secondary"
    component={Link}
    to="/get-a-free-quote"
    sx={{
      textTransform: 'none',
      borderRadius: 28,
      minWidth: 200,
      py: 1.5,
      backgroundColor: '#C8102E',
      mt: 3,
      mb: 2,
    }}
  >
    Get Free Quote
  </Button>
  <Typography
    variant="h6"
    align="center"
    sx={{
      color: '#fff',
      fontStyle: 'italic',
      fontWeight: 600,
      textDecoration: 'none',
      marginBottom: '0.5rem',
    }}
  >
    Call Now For A FREE Estimate
  </Typography>
  <Box
    sx={{
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 700,
      cursor: 'pointer',
    }}
  >
    <Link
      to="tel:5597852857"
      style={{
        color: 'inherit',
        textDecoration: 'inherit',
      }}
    >
     559-785-2857
    </Link>
  </Box>
</Box>


</Container>
</Grid>
);
};

export default ServicesSection;