import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper' }}>
      <Typography variant="body2" color="text.secondary">
        © 2023 My Portfolio. Built with React & Material UI.
      </Typography>
      <Link href="https://github.com/ashikapaudel" color="primary" sx={{ ml: 1 }}>
        GitHub
      </Link>
      <Link href="https://www.linkedin.com/in/ashika-paudel-a8b1882a7/" color="primary" sx={{ ml: 1 }}>
        LinkedIn
      </Link>
    </Box>
  );
};

export default Footer;