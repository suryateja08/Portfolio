// src/App.js
import React from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Certifications from './Components/Certifications';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';

const theme = createTheme({
  palette: {
    background: {
      default: '#0f2027',
      paper: '#203a43',
    },
    text: {
      primary: '#ffffff',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
          color: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(to right, #1CB5E0, #000851)',
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(to right, #000851, #1CB5E0)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div 
        className="App"
        style={{
          background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
          minHeight: '100vh',
        }}
      >
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Experience />       
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
