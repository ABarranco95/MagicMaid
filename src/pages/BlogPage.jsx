import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

const BlogPage = () => {
  const styles = {
    pageContainer: { padding: '20px' },
    pageTitle: { textAlign: 'center', marginBottom: '20px' },
    blogCard: { marginTop: '20px' },
    cardTitle: { marginBottom: '10px' },
    cardBody: {},
  };

  return (
    <div style={styles.pageContainer}>
      <Typography variant="h2" style={styles.pageTitle}>
        Home Sparkle Pros Blog
      </Typography>
      <Card style={styles.blogCard}>
        <CardContent>
          <Typography variant="h5" style={styles.cardTitle}>
            Blog Post Title 1
          </Typography>
          <Typography variant="body1" style={styles.cardBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Card>
      <Card style={styles.blogCard}>
        <CardContent>
          <Typography variant="h5" style={styles.cardTitle}>
            Blog Post Title 2
          </Typography>
          <Typography variant="body1" style={styles.cardBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Card>
      <Card style={styles.blogCard}>
        <CardContent>
          <Typography variant="h5" style={styles.cardTitle}>
            Blog Post Title 3
          </Typography>
          <Typography variant="body1" style={styles.cardBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPage;
