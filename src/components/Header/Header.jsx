import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import styles from './Header.module.css';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} className={styles.header}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography variant="h5" className={styles.logo}>
            <a href="/" className={styles.logoLink}>Magic Maid</a>
          </Typography>
          <div className={styles.spacer}></div>
          <Typography variant="subtitle1" className={styles.phone}>
            <a href="tel:+15597852857" className={styles.phoneLink}>(559) 785-2857</a>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
