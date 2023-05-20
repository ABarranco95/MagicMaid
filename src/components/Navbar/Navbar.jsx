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
import logo from '../../assets/logo.svg'
const drawerWidth = 240;
const navItems = ['Services', 'Contact Us'];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
        <Link to="/">
          <img src={logo} alt="Company Logo" style={{ height: '65px', width: 'auto', objectFit: 'contain' }} />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky" color="default" sx={{ backgroundColor: theme.palette.background.default, paddingBottom: 2 }}>
        <Toolbar sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!matches && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            )}
            {matches && (
              <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                {navItems.map((item) => (
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button key={item} sx={{ color: theme.palette.text.primary, mr: 2 }}>
                      {item}
                    </Button>
                  </Link>
                ))}
              </Box>
            )}
          </Box>
          <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <Link to="/">
              <img src={logo} alt="Company Logo" style={{ height: '65px', width: 'auto', objectFit: 'contain' }} />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
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
  );
  
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
