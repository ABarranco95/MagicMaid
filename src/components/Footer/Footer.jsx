import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#165085', color: '#fff', textAlign: 'center', py: 2, mt:10 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 3 }}>
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
              Service Areas
            </Typography>
            <Typography variant="body2" component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <li>Madera, CA</li>
              <li>Fresno, CA</li>
              <li>Clovis, CA</li>
            </Typography>
          </Box>
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <li>
                <a href="tel:+15597852857" style={{ color: '#fff', textDecoration: 'none' }}>
                  Fresno (559) 785-2857
                </a>
              </li>
              <li>
                <a href="mailto:homesparklepros@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
                  homesparklepros@gmail.com
                </a>
              </li>
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ color: '#fff' }}>
          &copy; 2023 Home Sparkle Pros. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ color: '#fff', mt: 2 }}>
          Here at Home Sparkle Pros, our goal is to change the way you think of a home cleaning service. No more worries, hassle, or stress when it comes to getting your house cleaned.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
