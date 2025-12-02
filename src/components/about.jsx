import React from 'react';
import myImg from '../assets/images/ashika.jpg';
import { Box, Typography, Avatar, Fade, Slide, Grid, Chip, Zoom } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const About = () => {
  const skills = ['React', 'JavaScript', 'Node.js', 'MySQL', 'Express', 'MongoDB'];

  return (
    <Fade in={true} timeout={1000}>
      <Box
        sx={{
          textAlign: 'center',
          py: { xs: 5, md: 7 },
          px: { xs: 2, md: 3 },
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 5,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 30px rgba(99,102,241,0.4)',
          maxWidth: 900,
          mx: 'auto',
          animation: 'fadeIn 1.5s ease',

          '@keyframes float': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-12px)' },
            '100%': { transform: 'translateY(0px)' },
          },
        }}
      >
        {/* Floating Avatar */}
        <Zoom in={true} timeout={1200}>
          <Avatar
            src={myImg}
            alt="Ashika Paudel"
            sx={{
              width: { xs: 110, sm: 130, md: 150 },
              height: { xs: 110, sm: 130, md: 150 },
              mx: 'auto',
              mb: 3,
              border: '4px solid',
              borderColor: 'primary.main',
              boxShadow: '0 0 25px rgba(139,92,246,0.6)',
              animation: 'float 4s ease-in-out infinite',
              objectFit: 'cover',
            }}
          />
        </Zoom>

        {/* Name */}
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: 'primary.main',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
            fontWeight: 700,
          }}
        >
          Hi, I'm Ashika Paudel
        </Typography>

        {/* Title */}
        <Slide direction="up" in={true} timeout={900}>
          <Typography
            variant="h5"
            color="text.secondary"
            gutterBottom
            sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}
          >
            Full-Stack Developer • Frontend  Enthusiast
          </Typography>
        </Slide>

        {/* About Text */}
        <Fade in={true} timeout={1400}>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              mb: 4,
              maxWidth: 650,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
            }}
          >
            I love creating modern, beautiful, and high-performance web applications.
            My focus is on writing clean code, intuitive user interfaces, and building
            seamless digital experiences using technologies like React, JavaScript,
            Node.js, and MySQL.
          </Typography>
        </Fade>

        {/* Quote */}
        <Fade in={true} timeout={1600}>
          <Box
            sx={{
              mt: 3,
              mb: 4,
              mx: 'auto',
              maxWidth: 600,
              p: { xs: 2, md: 2.5 },
              borderLeft: '5px solid',
              borderColor: 'secondary.main',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 2,
              fontStyle: 'italic',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              color: 'secondary.main',
              boxShadow: '0 0 20px rgba(99,102,241,0.2)',
            }}
          >
            “Always learning, always building.”
          </Box>
        </Fade>

        {/* Skill Chips */}
        <Slide direction="up" in={true} timeout={1500}>
          <Grid
            container
            spacing={{ xs: 1, sm: 1.5 }}
            justifyContent="center"
            sx={{ mb: 3 }}
          >
            {skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip
                  icon={<CodeIcon sx={{ fontSize: { xs: 18, md: 22 } }} />}
                  label={skill}
                  color="primary"
                  variant="outlined"
                  sx={{
                    fontWeight: 600,
                    px: { xs: 1, md: 1.5 },
                    py: { xs: 0.3, md: 0.5 },
                    fontSize: { xs: '0.75rem', md: '0.9rem' },
                    borderColor: 'secondary.main',
                    transition: '0.3s',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      transform: 'scale(1.1)',
                    },
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
