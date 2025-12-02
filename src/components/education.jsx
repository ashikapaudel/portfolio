import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Slide } from '@mui/material';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor in Engineering of Information Technology (Ongoing)',
      school: 'Everest Engineering College',
      location: 'Sanepa, Lalitpur',
      year: 'Batch 2022 (Currently in 8th Semester)',
    },
    {
      degree: '+2 (National Examination Board)',
      school: 'Kathmandu Institute Science and Technology',
      location: 'Kamalpokhari, Kathmandu',
      year: 'Passed 2021',
    },
    {
      degree: 'Secondary Education Examination (SEE/10th Grade)',
      school: 'Gurans Secondary School',
      location: 'Madhuban 06, Bardiya',
      year: 'Passed 2019',
    },
  ];

  return (
    <Slide direction="up" in={true} timeout={1000}>
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom textAlign="center">
          Education
        </Typography>
        <List>
          {education.map((edu, index) => (
            <ListItem key={index} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <ListItemText
                primary={`${edu.degree} - ${edu.school}`}
                secondary={`${edu.location} | ${edu.year}`}
                primaryTypographyProps={{ variant: 'h6', color: 'primary' }}
                secondaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Slide>
  );
};

export default Education;