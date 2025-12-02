// import React from "react";
// import { motion } from "framer-motion";

// // Timeline components from MUI Lab
// import {
//   Timeline,
//   TimelineItem,
//   TimelineSeparator,
//   TimelineDot,
//   TimelineConnector,
//   TimelineContent
// } from "@mui/lab";

// // Regular UI components from MUI
// import { Typography } from "@mui/material";
// import WorkIcon from "@mui/icons-material/Work";

// const experiences = [
//   {
//     company: "Blackmoon IT Solutions",
//     position: "Software Developer",
//     duration: "2022 - Present",
//     description:
//       "Developing web & mobile applications for clients like Bashyal Bhojanalaya Ghar, BYD Construction, and API ManPower."
//   },
//   {
//     company: "Everest Engineering College",
//     position: "IT Student",
//     duration: "2020 - Present",
//     description:
//       "Currently pursuing Bachelor's degree in Information Technology."
//   }
// ];

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       style={{ padding: "80px 0", backgroundColor: "#f9f9f9" }}
//     >
//       <Typography variant="h2" align="center" gutterBottom>
//         Experience & Education
//       </Typography>

//       <Timeline position="alternate" sx={{ maxWidth: 800, margin: "0 auto" }}>
//         {experiences.map((exp, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <TimelineItem>
//               <TimelineSeparator>
//                 <TimelineDot color="primary">
//                   <WorkIcon />
//                 </TimelineDot>

//                 {index < experiences.length - 1 && <TimelineConnector />}
//               </TimelineSeparator>

//               <TimelineContent>
//                 <Typography variant="h6">{exp.company}</Typography>
//                 <Typography>{exp.position}</Typography>
//                 <Typography color="text.secondary">{exp.duration}</Typography>
//                 <Typography variant="body2" mt={1}>
//                   {exp.description}
//                 </Typography>
//               </TimelineContent>
//             </TimelineItem>
//           </motion.div>
//         ))}
//       </Timeline>
//     </section>
//   );
// };

// export default Experience;



import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Fade } from '@mui/material';

const Experience = () => {
  const experiences = [
    { title: 'Software Engineer', company: 'Tech Corp', duration: '2020 - Present' },
    { title: 'Junior Developer', company: 'Startup Inc', duration: '2018 - 2020' },
  ];

  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom textAlign="center">
          Experience
        </Typography>
        <List>
          {experiences.map((exp, index) => (
            <ListItem key={index}>
              <ListItemText primary={exp.title} secondary={`${exp.company} (${exp.duration})`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Fade>
  );
};

export default Experience;