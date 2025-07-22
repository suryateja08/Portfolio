// src/Components/Contact.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  IconButton,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success', // 'success' | 'error'
  });

  // EmailJS configuration
  const SERVICE_ID = 'service_frh01z6';
  const TEMPLATE_ID = 'template_m4oqgao';
  const PUBLIC_KEY = '54XGXb7ozqIqAy1uz';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Teja Chennapragada', // Your name
        },
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      
      // Show success notification
      setNotification({
        open: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        severity: 'success',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Show error notification
      setNotification({
        open: true,
        message: 'Failed to send message. Please try again or contact me directly.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Box
      id="contact"
      sx={{
        color: 'white',
        pt: { xs: 8, md: 10 }, // Further increased top padding for optimal navbar clearance
        pb: { xs: 3, md: 4 },
        px: { xs: 3, md: 6 },
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'stretch',
          }}
        >
          {/* Left Column - Contact Info */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: 'white',
                mb: 2,
              }}
            >
              Contact Me
            </Typography>

            {/* Email */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <EmailIcon sx={{ color: '#ff7043', fontSize: '1.8rem' }} />
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.1rem',
                  color: 'white',
                }}
              >
                tejac08221@gmail.com
              </Typography>
            </Box>

            {/* Phone */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <PhoneIcon sx={{ color: '#ff7043', fontSize: '1.8rem' }} />
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.1rem',
                  color: 'white',
                }}
              >
                +1 (513) 348-6366
              </Typography>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/teja-c/"
                target="_blank"
                sx={{
                  color: '#b0bec5',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    color: '#0e76a8',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LinkedInIcon />
              </IconButton>
              
            </Box>

            {/* Download CV Button */}
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              component="a"
              href="/Portfolio/resume.pdf"
              download="Teja_Chennapragada_Resume.pdf"
              sx={{
                mt: 3,
                backgroundColor: '#ff7043',
                color: 'white',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                textTransform: 'none',
                fontSize: '1rem',
                alignSelf: 'flex-start',
                '&:hover': {
                  backgroundColor: '#f4511e',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Download CV
            </Button>
          </Box>

          {/* Right Column - Contact Form */}
          <Box sx={{ flex: 1 }}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                backgroundColor: "#1c2a35",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {/* Name Field */}
              <TextField
                fullWidth
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1CB5E0',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    opacity: 1,
                  },
                }}
              />

              {/* Email Field */}
              <TextField
                fullWidth
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1CB5E0',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    opacity: 1,
                  },
                }}
              />

              {/* Message Field */}
              <TextField
                fullWidth
                name="message"
                placeholder="Your Message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1CB5E0',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    opacity: 1,
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  backgroundColor: loading ? 'rgba(255, 112, 67, 0.6)' : '#ff7043',
                  color: 'white',
                  fontWeight: 600,
                  py: 1.5,
                  borderRadius: '25px',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: loading ? 'rgba(255, 112, 67, 0.6)' : '#f4511e',
                    transform: loading ? 'none' : 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Paper>
          </Box>
        </Box>

        {/* Success/Error Notification */}
        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={notification.severity}
            sx={{
              width: '100%',
              backgroundColor: notification.severity === 'success' ? '#4caf50' : '#f44336',
              color: 'white',
            }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
