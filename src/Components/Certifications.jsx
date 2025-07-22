// src/Components/Certifications.jsx
import React from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';

const certificationsData = [
  {
    title: "AWS Certified Developer – Associate, Amazon Web Services (AWS) - July 2025",
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/330652dae88e44988ffe32b3911b7d73",
  },
  {
    title: "Software Engineering Job Simulation, JPMorgan Chase & Co (Forage) - June 2025",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_mWCijH7EqgigMw89r_1750802167898_completion_certificate.pdf", 
  },
];

export default function Certifications() {
  return (
    <Box
      id="certifications"
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
            Certifications
          </Typography>
        </Box>

        {/* Certifications List */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Paper
            sx={{
              p: 4,
              maxWidth: '900px',
              width: '100%',
              backgroundColor: 'rgba(28, 40, 51, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            {certificationsData.map((cert, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: index === certificationsData.length - 1 ? 0 : 2.5,
                  paddingLeft: 1,
                }}
              >
                <Box
                  sx={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#1CB5E0',
                    borderRadius: '50%',
                    mr: 2,
                    mt: 1,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  component="a"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: 1.6,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#1CB5E0',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {cert.title}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
