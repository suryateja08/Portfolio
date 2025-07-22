import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Scube Innovations",
      location: "Leander, Texas",
      period: "February 2025 – Present",
      description: `Contributed to the development of a B2B SaaS onboarding and analytics platform by designing responsive front-end interfaces and building scalable 
      backend services. Helped architect state management with Redux Toolkit and React Context API to streamline data flow across complex modules. Supported secure API 
      development and integrated cloud deployments using Microsoft Azure, Docker, and Kubernetes. Collaborated with DevOps and engineering teams to optimize CI/CD pipelines, 
      improve performance, and ensure production readiness.`,
    },
    {
      title: "Software Developer Intern",
      company: "SS&C Health",
      location: "Kansas City, Kansas", 
      period: "February 2024 – December 2024",
      description: `Helped enhance a healthcare claims processing platform by building dynamic user interfaces and integrating RESTful APIs with backend services. Improved 
      user input validation and data accuracy, reducing claim rejections. Strengthened application reliability through unit testing, API testing, and performance tuning. 
      Assisted with cloud deployment and infrastructure tasks using AWS services including EC2, Lambda, and S3, while implementing secure role-based access control with JWT.`,
    },
    {
      title: "Software Engineer", 
      company: "Cognizant",
      location: "Bangalore, India",
      period: "October 2021–July 2023",
      description: `Worked on large-scale enterprise applications by developing reusable front-end components and robust backend services using React.js, Spring Boot, and 
      Node.js. Streamlined deployment processes by integrating CI/CD workflows and supporting AWS-based infrastructure. Collaborated with UI/UX designers to ensure accessibility
      and responsiveness, and contributed to improving team workflows through Git-based version control and automated testing strategies.`,
    }
  ];

  return (
    <Box
      id="experience"
      sx={{
        px: { xs: 3, md: 6 },
        pt: { xs: 8, md: 10 }, // Further increased top padding for optimal navbar clearance
        pb: { xs: 3, md: 4 },
        color: "white",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 3,
          textAlign: "center",
          fontSize: { xs: "2rem", md: "2.5rem" },
          letterSpacing: "2px",
        }}
      >
        Experience
      </Typography>

      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {experiences.map((experience, index) => (
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
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              },
            }}
          >
            <Box sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "flex-start", 
              mb: 2,
              flexWrap: "wrap",
              gap: 2
            }}>
              <Box sx={{ flex: 1, minWidth: "250px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: "#ffffff",
                    mb: 0.5,
                    lineHeight: 1.2,
                  }}
                >
                  {experience.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#1CB5E0",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    mb: 0.3,
                  }}
                >
                  {experience.company}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#b0bec5",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                  }}
                >
                  {experience.location}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", minWidth: "fit-content" }}>
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
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    minWidth: "180px",
                  }}
                >
                  {experience.period}
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
              {experience.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
