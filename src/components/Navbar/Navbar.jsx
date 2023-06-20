import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../assets/logo.svg';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

const drawerWidth = 240;

const navItems = [
  { title: 'Home', path: '/' },
  // { title: 'About', path: '/about' },
  { title: 'Residential Cleaning', path: '/services/standard-cleaning' },
  // { title: 'Areas Served', path: '/areas-served' },
  { title: 'Cleaning Checklist', path: '/service-checklists' },
  { title: 'Contact', path: '/contact-us' },
];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#165085', color: '#fff' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
        <Link to="/">
          <img src={logo} alt="Company Logo" style={{ height: '65px', width: 'auto', objectFit: 'contain' }} />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column-reverse', md: 'column' },
      '& .MuiAppBar-root': {
        marginBottom: { xs: 0, md: 0 },
      },
    }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="static" sx={{ backgroundColor: '#fff', pb: 0, color: '#fff', boxShadow: 'none',  }}>
        <Container maxWidth='lg'>

        
          <Toolbar sx={{ 
            backgroundColor: '#fff', 
            display: 'flex', 
            justifyContent: { xs: 'space-between', md: 'space-between' },
            '& .logo': {
              marginBottom: { xs: 2, md: 2}    ,
              marginTop: { xs: 2, md: 2}             },
              }}
            >
              <Link to="/" className="logo">
                <img src={logo} alt="Company Logo" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
              </Link>
              <Link to="/book-a-service"  style={{
        color: 'inherit',
        textDecoration: 'inherit',
      }}>
                <Button             
                  variant="outlined" 
                  sx={{ 
                    borderRadius: 28, 
                    borderColor: 'red', 
                    color: 'red', 
                    textTransform: 'none', 
                    minWidth: 170, 
                    height: 50,
                    py: 1, 
                    display: { xs: 'none', md: 'block' },
                    '&:hover': {
                      backgroundColor: 'red',
                      color: '#fff',
                    }
                  }}
                >
                  Book Now
                </Button>
              </Link>
            </Toolbar>
            </Container>
          </AppBar>
        </Box>
      
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="static" sx={{ backgroundColor: '#165085', pb: 2, color: '#fff', boxShadow: 'none' }}>
          <Container>
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                >
                  <MenuIcon sx={{ color: mobileOpen ? theme.palette.secondary.main : '#fff' }} />
                </IconButton>
                <Typography variant="button" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }, textAlign: 'center', fontSize: '1.2em', marginX: '0.5em' }}>
                  {navItems.map((item, index) => (
                    <Link key={index} to={item.path} style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>
                      {item.title}
                    </Link>
                  ))}
                </Typography>
              </Box>
            </Toolbar>
            </Container>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              anchor={'right'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </Box>
    );
};

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

