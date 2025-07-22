// src/components/Resume.jsx
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const education = [
  {
    title: 'Master of Information Technology',
    institute: 'University of Cincinnati, OH',
    year: '2023 - 2025',
    description:
      'Focused on web application programming, machine learning, and HCI. GPA 3.7. Gained hands-on experience in dynamic tech environments.',
  },
  {
    title: 'B.Tech in Electrical and Electronics Engineering',
    institute: 'GMR Institute of Technology, India',
    year: '2017 - 2021',
    description:
      'Graduated with a GPA of 8.52/10. Led a major project on modular multilevel converters, enhancing problem-solving and collaboration skills.',
  },
];

const experience = [
  {
    title: 'Programmer Analyst',
    company: 'Cognizant, Bangalore',
    year: '2021 - 2023',
    description:
      'Built 250+ test cases, developed UI features using React.js, integrated REST APIs, and collaborated in Agile workflows for robust solutions.',
  },
];

export default function Resume() {
  return (
    <Box id="resume" sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Resume
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          {education.map((edu, i) => (
            <Paper key={i} sx={{ p: 2, mb: 2 }}>
              <Typography fontWeight="bold">{edu.title}</Typography>
              <Typography variant="subtitle2">{edu.institute}</Typography>
              <Typography variant="caption">{edu.year}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{edu.description}</Typography>
            </Paper>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Experience
          </Typography>
          {experience.map((exp, i) => (
            <Paper key={i} sx={{ p: 2, mb: 2 }}>
              <Typography fontWeight="bold">{exp.title}</Typography>
              <Typography variant="subtitle2">{exp.company}</Typography>
              <Typography variant="caption">{exp.year}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{exp.description}</Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
