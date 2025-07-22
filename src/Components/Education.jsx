// src/Components/Education.jsx
import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";

const educationData = [
  {
    year: "August 2023 - December 2024",
    degree: "Masters, major: Information Technology",
    institution: "UNIVERSITY OF CINCINNATI",
    location: "Cincinnati, Ohio, USA",
    description: `Completed a comprehensive graduate program focused on emerging areas such as machine learning, data mining, web development, and cybersecurity. Gained a strong foundation in system administration, 
    human-computer interaction, and infrastructure sustainability, enabling me to design and manage secure, scalable IT systems. This education, integrated with real-world experience, strengthened my technical 
    versatility and ability to deliver innovative, technology-driven solutions across diverse domains.`,
  },
  {
    year: "August 2017 - August 2021",
    degree: "Bachelors, major: Electrical & Electronics Engineering",
    institution: "GMR Institute of Technology",
    location: "Rajam, India",
    description: `Completed an undergraduate program with a solid foundation in electronics, electrical systems, and software fundamentals. Developed interest and skills in programming through coursework such as 
    Object-Oriented Programming using Java, Database Management Systems, and MATLAB. This interdisciplinary education laid the groundwork for my transition into software development and strengthened my analytical and problem-solving abilities.`,
  },
];

export default function Education() {
  return (
    <Box
      id="education"
      sx={{
        px: { xs: 3, md: 6 },
        pt: { xs: 8, md: 10 }, // Further increased top padding for optimal navbar clearance
        pb: { xs: 3, md: 4 },
        color: "white",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 3,
              color: "white",
              fontSize: { xs: "2rem", md: "2.5rem" },
              letterSpacing: "2px",
            }}
          >
            Education
          </Typography>
        </Box>

        {/* Education Timeline */}
        <Box
          sx={{
            maxWidth: "1000px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {educationData.map((edu, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                p: 4,
                backgroundColor: "#1c2a35",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                color: "white",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                },
              }}
            >
              {/* Header with University and Date */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1, minWidth: "250px" }}>
                  {/* University Name */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#ffffff",
                      mb: 0.5,
                      fontSize: "1.3rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {edu.institution}
                  </Typography>

                  {/* Degree */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#1CB5E0",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      mb: 0.3,
                    }}
                  >
                    {edu.degree}
                  </Typography>

                  {/* Location */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#b0bec5",
                      fontSize: "0.95rem",
                      fontStyle: "italic",
                    }}
                  >
                    {edu.location}
                  </Typography>
                </Box>

                {/* Date in Red Box */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    minWidth: "fit-content",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#ff7043",
                      fontSize: "1rem",
                      fontWeight: 600,
                      backgroundColor: "rgba(255, 112, 67, 0.1)",
                      px: 2.5,
                      py: 0.8,
                      borderRadius: "25px",
                      border: "1px solid rgba(255, 112, 67, 0.3)",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {edu.year}
                    {edu.expectedGraduation && (
                      <Typography
                        component="div"
                        variant="caption"
                        sx={{
                          fontSize: "0.7rem",
                          fontStyle: "italic",
                          color: "rgba(255, 112, 67, 0.8)",
                          mt: 0.2,
                        }}
                      >
                        [{edu.expectedGraduation}]
                      </Typography>
                    )}
                  </Typography>
                </Box>
              </Box>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: "#d0d0d0",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  textAlign: "justify",
                }}
              >
                {edu.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
