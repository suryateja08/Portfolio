// src/Components/Projects.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  IconButton,
  Fade,
  Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    id: 1,
    title: "Machine learning-based credit score classifier",
    description: "Designed and implemented a machine learning model to classify customer credit scores into 'Good,' 'Standard,' and 'Poor' categories, achieving an 88% accuracy using Random Forest and ensemble learning techniques. Developed a real-time Flask web application for instant credit score predictions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format", // Financial/data analytics themed
    githubLink: "https://github.com/suryateja08/projects/tree/main/credit-score-classifier",
  },
  {
    id: 2,
    title: "US software engineering job's analysis",
    description: "Developed a machine learning model to classify salary ranges for software engineering roles in the US. Implemented and compared four ML algorithms—KNN, Logistic Regression, Decision Tree, and Random Forest—achieving 15% improvement in classification accuracy with Random Forest.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format", // Data analysis/charts themed
    githubLink: "https://github.com/suryateja08/projects/tree/main/us-jobs-analysis",
  },
  {
    id: 3,
    title: "Vehicle rental management system",
    description: "Designed and developed a responsive Vehicle Rental Management System using the MERN stack (MongoDB, Express, React, Node.js). Features include secure Stripe payment processing, Redux state management, and role-based dashboards for admin and users.",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop&auto=format", // Car rental/automotive themed
    githubLink: "https://github.com/suryateja08/projects/tree/main/vehicle-rental-system",
  },
  {
    id: 4,
    title: "Movement detection using OpenCV",
    description: "Created a real-time movement detection system leveraging OpenCV and Python to track and recognize activities from video streams. Applied deep learning models to improve detection accuracy, achieving an 80% increase in recognition precision in dynamic environments.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop&auto=format", // Computer vision/AI themed
    githubLink: "https://github.com/suryateja08/projects/tree/main/movement-detection-opencv",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 3 : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);
  if (visibleProjects.length < 3) {
    visibleProjects.push(...projects.slice(0, 3 - visibleProjects.length));
  }

  return (
    <Box
      id="projects"
      sx={{
        px: { xs: 3, md: 6 },
        pt: { xs: 8, md: 10 },
        pb: { xs: 3, md: 4 },
        color: "white",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: 'white',
          }}
        >
          Projects
        </Typography>

        {/* Carousel Container */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          {/* Left Arrow */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              left: { xs: -20, md: -50 },
              zIndex: 2,
              backgroundColor: 'rgba(58, 90, 107, 0.8)',
              color: 'white',
              width: 50,
              height: 50,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(26, 58, 75, 1)',
                transform: 'scale(1.1)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0 4px 15px rgba(255,255,255,0.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          {/* Cards Container */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              width: '100%',
              maxWidth: '1000px',
              justifyContent: 'center',
            }}
          >
            {visibleProjects.map((project, index) => (
              <Card
                key={`${project.id}-${currentIndex}-${index}`}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  flex: 1,
                  maxWidth: 320,
                  height: 400,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  transform: hoveredCard === project.id ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: hoveredCard === project.id 
                    ? '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)' 
                    : '0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: '100%',
                    background: `
                      linear-gradient(
                        135deg, 
                        rgba(58, 90, 107, 0.8), 
                        rgba(42, 74, 91, 0.8), 
                        rgba(26, 58, 75, 0.8)
                      ),
                      url(${project.image})
                    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Project Title */}
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      px: 2,
                      py: 1,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                      opacity: hoveredCard === project.id ? 0 : 1,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Hover Overlay with Description */}
                  <Fade in={hoveredCard === project.id} timeout={300}>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.95), rgba(32, 58, 67, 0.95), rgba(44, 83, 100, 0.95))',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 3,
                        opacity: hoveredCard === project.id ? 1 : 0,
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          color: 'white',
                          textAlign: 'center',
                          mb: 2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.95)',
                          textAlign: 'center',
                          lineHeight: 1.6,
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          borderRadius: '8px',
                          padding: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          mb: 2,
                        }}
                      >
                        {project.description}
                      </Typography>
                      
                      {/* GitHub Icon Button */}
                      <IconButton
                        component="a"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          width: 48,
                          height: 48,
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            transform: 'scale(1.1)',
                            borderColor: 'rgba(255, 255, 255, 0.4)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <LaunchIcon />
                      </IconButton>
                    </Box>
                  </Fade>
                </CardMedia>
              </Card>
            ))}
          </Box>

          {/* Right Arrow */}
          <IconButton
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              right: { xs: -20, md: -50 },
              zIndex: 2,
              backgroundColor: 'rgba(58, 90, 107, 0.8)',
              color: 'white',
              width: 50,
              height: 50,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(26, 58, 75, 1)',
                transform: 'scale(1.1)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0 4px 15px rgba(255,255,255,0.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* Carousel Indicators */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 4,
          }}
        >
          {Array.from({ length: projects.length - 2 }).map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: currentIndex === index ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: currentIndex === index ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)',
                  transform: 'scale(1.2)',
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
