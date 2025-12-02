import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Slide, Fade } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'Building responsive, dynamic websites and full-stack applications using React, JavaScript, HTML, CSS, and Node.js.',
      icon: <WebIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      skills: ['JavaScript', 'React', 'HTML', 'Node.js'],
    },
    {
      title: 'Backend Development',
      description:
        'Creating powerful server-side applications using Express.js, PHP, Java, and APIs to ensure secure and scalable systems.',
      icon: <CodeIcon sx={{ fontSize: 60, color: 'secondary.main' }} />,
      skills: ['Express.js', 'PHP', 'Java', 'API Integration'],
    },
    {
      title: 'UI/UX Design',
      description:
        'Crafting clean and user-focused designs in Figma with modern layouts, prototypes, and responsive design principles.',
      icon: <DesignServicesIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      skills: ['Figma', 'Wireframes', 'Prototypes'],
    },
    {
      title: 'Tools & Optimization',
      description:
        'Improving workflows using tools like Nodemon, Apache, Git, and optimizing overall project performance.',
      icon: <BuildIcon sx={{ fontSize: 60, color: 'secondary.main' }} />,
      skills: ['Git', 'Nodemon', 'Apache'],
    },
  ];

  return (
    <Fade in={true} timeout={900}>
      <Box
        sx={{
          py: 8,
          px: 2,
          background: '#0f0f0f',
          minHeight: '100vh',
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            // color: 'primary.main',
            fontWeight: 700,
            mb: 6,
            // textShadow: '0px 0px 15px rgba(138, 43, 226, 0.5)',
          }}
        >
          My Services
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: 1400,
            mx: 'auto',
            justifyContent: 'center',
          }}
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Slide direction="up" in={true} timeout={900 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(28, 28, 28, 0.95)',
                    border: '1px solid rgba(138, 43, 226, 0.4)',
                    borderRadius: 3,
                    padding: 2,
                    boxShadow: '0px 0px 12px rgba(138, 43, 226, 0.25)',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0px 0px 25px rgba(255, 69, 0, 0.6)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    {service.icon}

                    <Typography
                      variant="h5"
                      sx={{
                        mt: 2,
                        fontWeight: 600,
                        color: 'primary.main',
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        mb: 2,
                        color: '#ccc',
                        lineHeight: 1.5,
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Typography variant="body2" sx={{ fontWeight: 500, color: 'secondary.main' }}>
                      Skills: {service.skills.join(', ')}
                    </Typography>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
};

export default Services;
