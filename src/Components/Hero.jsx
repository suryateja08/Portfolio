// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Stack,
  Avatar,
  IconButton,
  Button,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import Typed from 'typed.js';

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'UI/UX Designer', 'Passionate Learner'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 3, md: 4 },
        py: { xs: 4, md: 2 },
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        // Professional developer workspace background
        backgroundImage: `
          linear-gradient(rgba(15, 32, 39, 0.8), rgba(32, 58, 67, 0.8)),
          url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Name */}
      <Typography 
        variant="h3" 
        fontWeight="bold" 
        sx={{ 
          mb: 1,
          fontSize: { xs: '2rem', md: '2.5rem' },
        }}
      >
        Teja Chennapragada
      </Typography>

      {/* Typed Title */}
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 3,
          fontSize: { xs: '1.1rem', md: '1.25rem' },
        }}
      >
        I'm a <span ref={el} style={{ fontWeight: 'bold' }} />
      </Typography>

      {/* Avatar and Profile Section - Better Balanced Layout */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        justifyContent="center"
        sx={{ 
          maxWidth: '1200px', 
          mb: 3,
          width: '100%',
          mx: 'auto',
        }}
      >
        {/* Avatar */}
        <Avatar
          alt="Teja Chennapragada"
          src={`${process.env.PUBLIC_URL}/profile-img.jpg`}
          sx={{
            width: { xs: 160, md: 200 },
            height: { xs: 160, md: 200 },
            border: '4px solid white',
            boxShadow: 4,
            flexShrink: 0,
          }}
        />

        {/* Profile Paragraph */}
        <Box sx={{ 
          flex: 1, 
          maxWidth: { xs: '100%', md: '650px' },
          textAlign: { xs: 'center', md: 'justify' },
        }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              fontWeight: 300,
              textAlign: { xs: 'center', md: 'justify' },
              px: { xs: 2, md: 0 },
            }}
          >
            I believe great software is built at the intersection of creativity and precision—and I bring that philosophy into
            every line of code I write. As a Full Stack Developer, I thrive on building seamless, responsive user experiences
            while ensuring the backend logic is as robust as the frontend is intuitive. From architecting scalable APIs with
            Spring Boot to crafting dynamic interfaces in React.js, I focus on delivering applications that are both performant
            and user-centric. My drive to continually learn and adapt keeps me in sync with evolving technologies and industry
            best practices—turning complex challenges into clean, maintainable solutions.
          </Typography>
        </Box>
      </Stack>

      {/* Social Icons and Resume Button */}
      <Stack direction="row" spacing={3} justifyContent="center" mt={2} alignItems="center">
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/teja-c/"
          target="_blank"
          sx={{ 
            color: 'white',
            '&:hover': {
              color: '#0e76a8',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          component="a"
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          download="Teja_Chennapragada_Resume.pdf"
          sx={{
            backgroundColor: "#1CB5E0",
            color: "white",
            fontWeight: 600,
            px: 3,
            py: 1.5,
            borderRadius: "25px",
            textTransform: "none",
            fontSize: "1rem",
            boxShadow: "0 4px 15px rgba(28, 181, 224, 0.3)",
            '&:hover': {
              backgroundColor: "#000851",
              transform: 'translateY(-2px)',
              boxShadow: "0 8px 25px rgba(28, 181, 224, 0.4)",
            },
            transition: 'all 0.3s ease',
            ml: 2,
          }}
        >
          Resume
        </Button>
      </Stack>
    </Box>
  );
}
