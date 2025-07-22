import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function Skills() {
  const leftColumn = [
    {
      title: "Programming Languages",
      items: [
        "Java (JDK 8/11)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Python",
        "SQL",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Frontend Development",
      items: [
        "React.js",
        "Redux Toolkit",
        "Redux Thunk",
        "Redux Saga",
        "React Router v6",
        "Material UI",
        "Bootstrap",
        "Styled Components",
      ],
    },
    {
      title: "Backend Development",
      items: [
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Spring AOP",
        "Node.js",
        "REST APIs",
        "Swagger",
      ],
    },
    {
      title: "Databases & Storage",
      items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "H2"],
    },
  ];

  const rightColumn = [
    {
      title: "Testing & Debugging",
      items: [
        "JUnit",
        "Mockito",
        "Jest",
        "React Testing Library",
        "Postman",
        "Talend API Tester",
      ],
    },
    {
      title: "Security & Authentication",
      items: ["Spring Security", "JWT", "Role-Based Access Control"],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "Azure",
        "AWS (EC2, S3, Lambda)",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Eclipse",
        "JIRA",
        "Figma",
        "Power BI",
      ],
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        px: { xs: 3, md: 6 },
        pt: { xs: 8, md: 10 }, // Further increased top padding for optimal navbar clearance
        pb: { xs: 3, md: 4 },
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 5,
          textAlign: "center",
          fontSize: { xs: "2rem", md: "2.5rem" },
          letterSpacing: "2px",
        }}
      >
        Skills
      </Typography>

      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch", // This ensures equal height columns
        }}
      >
        {/* Left Column (4 cards) */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {leftColumn.map((category, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                mb: 3,
                p: 3,
                backgroundColor: "#1c2a35",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
                flex: 1, // This makes all cards in the column equal height
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  mb: 1.5,
                  color: "#ffffff",
                }}
              >
                {category.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#d0d0d0",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  flex: 1, // This makes the content fill remaining space
                }}
              >
                {category.items.join(", ")}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Right Column (4 cards) */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {rightColumn.map((category, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                mb: 3,
                p: 3,
                backgroundColor: "#1c2a35",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
                flex: 1, // This makes all cards in the column equal height
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  mb: 1.5,
                  color: "#ffffff",
                }}
              >
                {category.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#d0d0d0",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  flex: 1, // This makes the content fill remaining space
                }}
              >
                {category.items.join(", ")}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
