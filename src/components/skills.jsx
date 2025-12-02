import React from 'react';
import { Box, Typography, Grid, Chip, Slide, Card, CardContent } from '@mui/material';
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = {
    "Frontend": ["JavaScript", "HTML", "React"],
    "Backend": ["Node.js", "Express.js", "PHP", "Java", "C"],
    "Tools & Platforms": ["Nodemon", "Apache", "NPM", "Postman"],
    "Design": ["Figma", "Adobe Lightroom"],
  };

  return (
    <Slide direction="up" in={true} timeout={1000}>
      <Box
        id="skills"
        sx={{
          py: 8,
          px: 3,
          background: "linear-gradient(135deg, rgba(15,15,15,0.95), rgba(31,31,31,0.95))",
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            mb: 5,
            color: "primary.main",
            textShadow: "0 0 10px rgba(138, 43, 226, 0.6)",
            fontWeight: 700
          }}
        >
          My Skills
        </Typography>

        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: "auto" }}>
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <Grid item xs={12} sm={6} md={6} key={category}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(28,28,28,0.9), rgba(45,45,45,0.9))",
                    border: "1px solid rgba(138,43,226,0.4)",
                    boxShadow: "0 0 15px rgba(138,43,226,0.25)",
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 0 25px rgba(255,69,0,0.5)",
                      transform: "translateY(-5px)"
                    }
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: "secondary.main",
                        textShadow: "0 0 8px rgba(255,69,0,0.5)"
                      }}
                    >
                      {category}
                    </Typography>

                    <Grid container spacing={1}>
                      {skills.map((skill, i) => (
                        <Grid item key={i}>
                          <Chip
                            label={skill}
                            sx={{
                              borderColor: "primary.main",
                              color: "white",
                              background:
                                "linear-gradient(135deg, rgba(138,43,226,0.2), rgba(255,69,0,0.2))",
                              "&:hover": {
                                background:
                                  "linear-gradient(135deg, rgba(255,69,0,0.5), rgba(138,43,226,0.5))",
                                transform: "scale(1.08)"
                              },
                              transition: "0.3s",
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Slide>
  );
};

export default Skills;
