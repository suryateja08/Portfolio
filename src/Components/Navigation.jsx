// src/Components/Navigation.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@mui/material';

// Smooth scrolling function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export default function Navigation() {

  const navItems = [
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },  
    { label: 'Education', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.95), rgba(32, 58, 67, 0.95), rgba(44, 83, 100, 0.95))',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 }, minHeight: '64px' }}>
        {/* Logo/Name */}
        <Typography
          variant="h6"
          component="div"
          onClick={() => scrollToSection('hero')}
          sx={{
            fontWeight: 'bold',
            color: '#1CB5E0',
            cursor: 'pointer',
            fontSize: '1.2rem',
            letterSpacing: '0.5px',
            '&:hover': {
              color: '#0e76a8',
            },
            transition: 'color 0.3s ease',
          }}
        >
          TEJA CHENNAPRAGADA
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {navItems.map((item) => (
            <Typography
              key={item.id}
              component="div"
              onClick={() => scrollToSection(item.id)}
              sx={{
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                '&:hover': {
                  color: '#1CB5E0',
                },
                transition: 'color 0.3s ease',
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
