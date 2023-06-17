import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Typography, Container, Box, Card, CardMedia, CardContent, CardActionArea, Collapse, useMediaQuery, useTheme, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import standardCleaningImage from '../assets/standard-cleaning-checklist.png';
import deepCleaningImage from '../assets/deep-cleaning-checklist.png';
import moveCleaningImage from '../assets/move-in-out-checklist.png';

const ServiceChecklistPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState({ standard: false, deep: false, move: false });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const handleExpandClick = (type) => {
    setOpen({ ...open, [type]: !open[type] });
  };

  const handleLightboxOpen = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const checkLists = [
    {
      type: 'standard',
      title: 'Standard Home Cleaning Checklist',
      image: standardCleaningImage,
    },
    {
      type: 'deep',
      title: 'Deep Home Cleaning Checklist',
      image: deepCleaningImage,
    },
    {
      type: 'move',
      title: 'Move In/Out Cleaning Checklist',
      image: moveCleaningImage,
    },
  ];

  return (
    <Container>
      <Helmet>
        <title>Professional House Cleaning Service Checklists | Home Sparkle Pros</title>
        <meta
          name="description"
          content="Access the professional house cleaning service checklists provided by Home Sparkle Pros. View checklists for standard, deep, and move in/out cleaning in Fresno, Madera, and Clovis areas."
        />
      </Helmet>
      <Typography variant="h4" align="center" gutterBottom>
        Professional House Cleaning Service Checklists
      </Typography>
      <Typography variant="body1" gutterBottom>
        At Home Sparkle Pros, we provide professional house cleaning services tailored to meet your specific needs. Below, you'll find our service checklists that outline the tasks included in each type of clean we offer: standard, deep, and move in/out cleaning.
      </Typography>
      <Grid container spacing={isMobile ? 0 : 3} direction="column">
        {checkLists.map(({ type, title, image }) => (
          <Grid item xs={12} key={type}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
              <Card>
                <CardActionArea onClick={() => handleExpandClick(type)}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {title}
                      <ExpandMoreIcon />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Collapse in={open[type]} timeout="auto" unmountOnExit>
                  <CardMedia component="img" image={image} alt={`${title}`} sx={{ objectFit: 'contain', width: 'auto', maxHeight: 500, cursor: 'pointer' }} onClick={() => handleLightboxOpen(image)} />
                </Collapse>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
      {lightboxOpen && (
        <Lightbox
          mainSrc={lightboxImage}
          onCloseRequest={() => setLightboxOpen(false)}
          enableZoom={false}
        />
      )}
    </Container>
  );
};

export default ServiceChecklistPage;

