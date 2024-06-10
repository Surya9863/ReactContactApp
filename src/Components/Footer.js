import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// Footer component definition
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#f8f9fa',
        bottom: 0,
        width: '100%',
        textAlign: 'center'
      }}
    >
      {/* Container to limit the width and center content */}
       <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary">
        © 2024 Surya Behara. All rights reserved.
        </Typography>
       </Container>
    </Box>
  );
};

export default Footer;
