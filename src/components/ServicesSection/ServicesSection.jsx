import React from 'react';
import { Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText, Grid, Button, Box, useMediaQuery, useTheme, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import GradeIcon from '@mui/icons-material/Grade';
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
        { icon: <GradeIcon />, description: "Complete Dusting Ceiling to Floor" },
        { icon: <GradeIcon />, description: "Vacuuming and mopping floors for a tidy home" },
        { icon: <GradeIcon />, description: "Cleaning and sanitizing bathrooms for hygiene and comfort" },
        { icon: <GradeIcon />, description: "Kitchen cleaning for a pleasant cooking experience" },
      ],
      path: "/get-a-free-quote",
    },
    {
      name: "Deep Home Cleaning",
      image: deepCleanImage,
      tasks: [
        { icon: <GradeIcon />, description: "Includes all tasks in Standard Clean plus more" },
        { icon: <GradeIcon />, description: "Deep cleaning of kitchen appliances for a fresher kitchen" },
        { icon: <GradeIcon />, description: "Interior window cleaning for a clearer view" },
        { icon: <GradeIcon />, description: "Cleaning of baseboards and door frames" },
      ],
      path: "/get-a-free-quote",
    },
    {
      name: "Move In/Out Cleaning",
      image: movingCleanImage,
      tasks: [
        { icon: <GradeIcon />, description: "Thorough cleaning of inside cabinets and closets" },
        { icon: <GradeIcon />, description: "Professional wall cleaning services" },
        { icon: <GradeIcon />, description: "Comprehensive garage cleaning and tidying" },
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
    <Typography variant="h4" align={matchesMD ? 'left' : 'center'} gutterBottom sx={{ color: '#FFFFFF', fontWeight: 600, p: { xs: 2, sm: 4, md: 6 } }}>
      Our Most Popular Cleaning Services
    </Typography>
    <Typography variant="h6" align={matchesMD ? 'left' : 'center'} gutterBottom sx={{ color: '#FFFFFF', fontWeight: 400, p: { xs: 2, sm: 4, md: 6 } }}>
      We are here to change the image of cleaning companies by offering fast, convenient services for customers of all sizes. At the very start of this
    </Typography>
    <Grid container spacing={3}>
      {services.map((service) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={service.name}>
          <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', minWidth: 280, maxWidth: 340, m: 1, borderRadius: 2, boxShadow: 5, backgroundColor: '#ffffff' }}>
                <CardMedia component="img" image={service.image} alt={`${service.name} - Home Sparkle Pros`} sx={{ objectFit: 'cover', height: 160, width: 'auto', borderRadius: '2px 2px 0 0' }} />
                <CardContent sx={{ padding: '2rem', textAlign: matchesMD ? 'left' : 'center' }}>
                  <Typography variant="h5" align="inherit" sx={{ color: '#165085', fontWeight: 700, marginBottom: '1rem' }}>{service.name}</Typography>
                  <List>
                    {service.tasks.map((task, index) => (
                      <ListItem key={index}>
                        {task.icon}
                        <ListItemText primary={task.description} sx={{ color: '#165085', fontWeight: 700, textDecoration: 'none' }}/>
                      </ListItem>
                    ))}
                  </List>
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
          }}
        >
          Call Now For A FREE Estimate
          <Link
            href="tel:+15596602655"
            sx={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            | 559-660-2655
          </Link>
        </Typography>
      </Box>
    </Container>
    
    </Grid>
  );
};

export default ServicesSection;

