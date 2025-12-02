import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        {/* Marquee: Scrolling text for a dynamic effect */}
        <Box
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: '300px',
            mr: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              display: 'inline-block',
              animation: 'marquee 10s linear infinite',
            }}
          >
            Welcome to my portfolio | Full-Stack Developer | Passionate about React & UI/UX
          </Typography>
        </Box>
        <Button color="inherit" component={Link} to="/">About</Button>
        <Button color="inherit" component={Link} to="/skills">Skills</Button>
        <Button color="inherit" component={Link} to="/experience">Experience</Button>
        <Button color="inherit" component={Link} to="/education">Education</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/services">Services</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </AppBar>
  );
};

export default Header;