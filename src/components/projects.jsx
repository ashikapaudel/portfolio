import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardMedia, Grid, Typography, Chip, Button, Box } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

import bashyal from "../assets/images/bhojanalaya image.png";
import byd from "../assets/images/byd image.png";
import api from "../assets/images/api image.png";
import education from "../assets/images/education image .png";

const fallbackImage = "https://via.placeholder.com/400x230?text=Project+Image";

const projects = [
  {
    title: "Bashyal Bhojanalaya Ghar",
    description: "Food ordering system with table booking and order tracking.",
    tags: ["React", "Node.js", "MySQL"],
    image: bashyal,
    link: "https://bbgfood.com/"
  },
  {
    title: "BYD Construction",
    description: "Property listing and management platform.",
    tags: ["React", "Express", "MySQL"],
    image: byd,
    link: "https://bydbuilder.com/"
  },
  {
    title: "API ManPower",
    description: "Manpower management system with automation.",
    tags: ["React", "Express", "MySQL"],
    image: api,
    link: "https://apimanpower.com/"
  },
  {
    title: "Education Pvt.Ltd",
    description: "Student management system for institutions.",
    tags: ["React", "Node.js", "MySQL"],
    image: education,
    link: "https://educationpvt.com/"
  }
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Grid item xs={12} sm={6} md={4}> 
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: '#1f1f1f',
            border: '1px solid rgba(138, 43, 226, 0.4)',
            borderRadius: 2,
            boxShadow: '0 0 10px rgba(138, 43, 226, 0.3)',
            transition: '0.3s ease',
            '&:hover': {
              boxShadow: '0 0 18px rgba(255, 69, 0, 0.6)',
            }
          }}
        >
          <CardMedia
            component="img"
            height="220"   // ⭐ Increased height
            sx={{
              width: "100%",       // ⭐ Full width image
              objectFit: "contain", // ⭐ Image fits without cropping
              backgroundColor: "#111",
              p: 1
            }}
            image={project.image || fallbackImage}
            alt={project.title}
            onError={(e) => (e.target.src = fallbackImage)}
          />

          <CardContent sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
              {project.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {project.description}
            </Typography>

            <Box sx={{ mb: 2 }}>
              {project.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    mr: 1,
                    mb: 1,
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    fontSize: '0.75rem'
                  }}
                />
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<LaunchIcon />}
              href={project.link}
              target="_blank"
              sx={{
                mt: 'auto',
                background: 'linear-gradient(45deg, #8a2be2, #ff4500)',
                py: '4px'
              }}
            >
              View Project
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        px: 2,
        background: '#0f0f0f',
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
             My Projects
           </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"     // ⭐ Center align row
        sx={{ maxWidth: 1200, mx: 'auto' }} // ⭐ Cards start from center always
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
