import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, TextField, Box, Typography, Grid, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import axios from 'axios';

const LeadForm = () => {
  const [status, setStatus] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      type_of_service_needed: '',
      how_many_bedrooms: '',
      how_many_bathrooms: '',
      sq_ft: '',
      any_extras_needed: '',
    },
    onSubmit: (values) => {
      axios
        .post('https://hooks.zapier.com/hooks/catch/15294445/3hzibvg/', values)
        .then((response) => {
          console.log(response);
          setStatus('Your form has been submitted successfully!');
          formik.resetForm();
        })
        .catch((error) => {
          console.error(error);
          setStatus('An error occurred. Please try again.');
        });
    },
  });

  const bedrooms = Array.from({ length: 10 }, (_, i) => i + 1);
  const bathrooms = Array.from({ length: 11 }, (_, i) => (i / 2).toFixed(1));
  const sqftOptions = Array.from({ length: 11 }, (_, i) => (i * 500) + (i === 10 ? '+' : ''));

  return (
    <Grid container justifyContent="center">

    
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 5, maxWidth: '1100px', margin: '10 auto', mx: 5 }}>
      <Typography variant="h4" gutterBottom>
        Allow Us To Give You Back Your Time!
        Tell Us How We Can Help!
      </Typography>
      {status && <Typography variant="h6" gutterBottom>{status}</Typography>}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="address"
            name="address"
            label="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel required id="type_of_service_needed-label">What are you looking for?</InputLabel>
            <Select
              labelId="type_of_service_needed-label"
              id="type_of_service_needed"
              name="type_of_service_needed"
              value={formik.values.type_of_service_needed}
              onChange={formik.handleChange}
              label="What are you looking for?"
            >
              <MenuItem value="Standard Home Cleaning">Standard Home Cleaning</MenuItem>
              <MenuItem value="Deep Home Cleaning">Deep Home Cleaning</MenuItem>
              <MenuItem value="Move In/Out Cleaning">Move In/Out Cleaning</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel required id="how_many_bedrooms-label">How Many Bedrooms / Offices / Dens</InputLabel>
            <Select
              labelId="how_many_bedrooms-label"
              id="how_many_bedrooms"
              name="how_many_bedrooms"
              value={formik.values.how_many_bedrooms}
              onChange={formik.handleChange}
              label="How Many Bedrooms / Offices / Dens"
            >
              {bedrooms.map((value) => (
                <MenuItem key={value} value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel required id="how_many_bathrooms-label">How Many Bathrooms</InputLabel>
            <Select
              labelId="how_many_bathrooms-label"
              id="how_many_bathrooms"
              name="how_many_bathrooms"
              value={formik.values.how_many_bathrooms}
              onChange={formik.handleChange}
              label="How Many Bathrooms"
            >
              {bathrooms.map((value) => (
                <MenuItem key={value} value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel required id="sq_ft-label">Estimated SQ Footage</InputLabel>
            <Select
              labelId="sq_ft-label"
              id="sq_ft"
              name="sq_ft"
              value={formik.values.sq_ft}
              onChange={formik.handleChange}
              label="Estimated SQ Footage"
            >
              {sqftOptions.map((value) => (
                <MenuItem key={value} value={value}>{value} sq ft</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="any_extras_needed"
            name="any_extras_needed"
            label="Anything you wish to share or feel like we need to know about the property?"
            value={formik.values.any_extras_needed}
            onChange={formik.handleChange}
            variant="outlined"
            multiline
  rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ textTransform: 'none', borderRadius: 28, py: 1, mt: 5, height: 55, fontSize: '16px' }}
          >
            GET A QUOTE
          </Button>
        </Grid>
      </Grid>
    </Box>
    </Grid>
  );
};

export default LeadForm;

