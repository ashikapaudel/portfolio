import React from 'react';
import { Box, Typography, Avatar, Fade, Slide, Grid, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code'; // Icon for skills

const About = () => {
  const skills = ['React', 'JavaScript', 'Node.js', 'MySQL']; // Highlighted skills from your description

  return (
    <Fade in={true} timeout={1000}>
      <Box
        sx={{
          textAlign: 'center',
          py: 6,
          px: 2,
          background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(255, 69, 0, 0.1) 100%)', // Subtle gradient for attraction
          borderRadius: 4,
          boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)', // Glow effect from theme
          maxWidth: 800,
          mx: 'auto',
        }}
      >
        <Avatar
          sx={{
            width: 140,
            height: 140,
            mx: 'auto',
            mb: 3,
            bgcolor: 'secondary.main',
            border: '4px solid',
            borderColor: 'primary.main',
            boxShadow: '0 0 15px rgba(255, 69, 0, 0.5)', // Orange glow for eye-catching effect
          }}
        >
          <PersonIcon sx={{ fontSize: 70 }} />
        </Avatar>
        <Typography variant="h2" gutterBottom sx={{ color: 'primary.main' }}>
          Hi, I'm Ashika Paudel
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Full-Stack Developer | UI/UX Enthusiast
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 4, maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
          Passionate about crafting beautiful, functional web applications that solve real-world problems. With expertise in modern technologies like React, JavaScript, Node.js, and MySQL, I focus on clean code, intuitive design, and seamless user experiences. Let's build something amazing together!
        </Typography>
        <Slide direction="up" in={true} timeout={1200}>
          <Grid container spacing={1} justifyContent="center" sx={{ mb: 2 }}>
            {skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip
                  icon={<CodeIcon />}
                  label={skill}
                  color="primary"
                  variant="outlined"
                  sx={{
                    fontWeight: 600,
                    borderColor: 'secondary.main',
                    '&:hover': { backgroundColor: 'secondary.main', color: 'white' },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Slide>
      </Box>
    </Fade>
  );
};

export default About;