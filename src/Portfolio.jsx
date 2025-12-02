// src/Portfolio.js

import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
  { title: "Web Development", description: "We build responsive and dynamic websites." },
  { title: "Mobile Application Development", description: "Creating high-performance mobile applications." },
  { title: "Software Development", description: "Enterprise, Scalable and Reliable Software." },
  { title: "Digital Marketing", description: "Engage, Educate and Inform your audience." },
  { title: "Courses", description: "Professional practice based on industry environment." },
];

const Portfolio = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        My Portfolio
      </Typography>

      <Typography variant="h5" align="center" gutterBottom>
        Skill, Knowledge, Implementation and Opportunity
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Contact Me
      </Button>
    </Container>
  );
};

export default Portfolio;
