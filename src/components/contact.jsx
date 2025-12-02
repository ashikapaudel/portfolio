import React from 'react';
import { Box, Typography, TextField, Button, Grid, Fade, IconButton, Stack, Divider } from '@mui/material';
import {
  Facebook,
  LinkedIn,
  Instagram,
  WhatsApp,
  Email,
  YouTube
} from '@mui/icons-material';
import { FaTiktok, FaDiscord } from "react-icons/fa6";


const Contact = () => {
  const socialLinks = {
    facebook: 'https://facebook.com/yourprofile',
    linkedin: 'https://www.linkedin.com/in/ashika-paudel-a8b1882a7/',
    instagram: 'https://www.instagram.com/?hl=en',
    whatsapp: 'https://wa.me/9768246535',
    tiktok: 'https://www.tiktok.com/@yourprofile',
    youtube: 'https://www.youtube.com/@ashikapaudel3226',
    discord: 'https://discord.com/channels/@me'
  };

  const handleSocialClick = (platform, url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ py: 4, maxWidth: 600, mx: 'auto', px: 2 }}>
        <Typography variant="h2" gutterBottom textAlign="center" sx={{ mb: 4 }}>
          Get In Touch
        </Typography>
        
        {/* Contact Form */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label="Your Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email Address" variant="outlined" type="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline rows={4} label="Your Message" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button 
              fullWidth 
              variant="contained" 
              color="primary" 
              size="large"
              startIcon={<Email />}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4 }}>
          <Typography variant="body2" color="text.secondary">OR</Typography>
        </Divider>

        {/* Social Media Icons */}
        <Box textAlign="center">
          <Typography variant="h6" gutterBottom color="text.secondary">
            Connect with me on
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" sx={{ mt: 2 }}>
            
            {/* LinkedIn */}
            <IconButton
              onClick={() => handleSocialClick('linkedin', socialLinks.linkedin)}
              sx={{
                border: '2px solid #0A66C2',
                color: '#0A66C2',
                '&:hover': { backgroundColor: '#0A66C2', color: 'white' }
              }}
              title="LinkedIn"
            >
              <LinkedIn />
            </IconButton>

            {/* Facebook */}
            <IconButton
              onClick={() => handleSocialClick('facebook', socialLinks.facebook)}
              sx={{
                border: '2px solid #1877F2',
                color: '#1877F2',
                '&:hover': { backgroundColor: '#1877F2', color: 'white' }
              }}
              title="Facebook"
            >
              <Facebook />
            </IconButton>

            {/* Instagram */}
            <IconButton
              onClick={() => handleSocialClick('instagram', socialLinks.instagram)}
              sx={{
                border: '2px solid #E4405F',
                color: '#E4405F',
                '&:hover': { backgroundColor: '#E4405F', color: 'white' }
              }}
              title="Instagram"
            >
              <Instagram />
            </IconButton>

            {/* WhatsApp */}
            <IconButton
              onClick={() => handleSocialClick('whatsapp', socialLinks.whatsapp)}
              sx={{
                border: '2px solid #25D366',
                color: '#25D366',
                '&:hover': { backgroundColor: '#25D366', color: 'white' }
              }}
              title="WhatsApp"
            >
              <WhatsApp />
            </IconButton>

            {/* TikTok */}
            <IconButton
              onClick={() => handleSocialClick('tiktok', socialLinks.tiktok)}
              sx={{
                border: '2px solid #000000',
                color: '#000000',
                '&:hover': { backgroundColor: '#000000', color: 'white' }
              }}
              title="TikTok"
            >
              <FaTiktok size={24} />
            </IconButton>

            {/* YouTube */}
            <IconButton
              onClick={() => handleSocialClick('youtube', socialLinks.youtube)}
              sx={{
                border: '2px solid #FF0000',
                color: '#FF0000',
                '&:hover': { backgroundColor: '#FF0000', color: 'white' }
              }}
              title="YouTube"
            >
              <YouTube />
            </IconButton>

            {/* Discord */}
            <IconButton
              onClick={() => handleSocialClick('discord', socialLinks.discord)}
              sx={{
                border: '2px solid #5865F2',
                color: '#5865F2',
                '&:hover': { backgroundColor: '#5865F2', color: 'white' }
              }}
              title="Discord"
            >
              <FaDiscord size={24} />
            </IconButton>
          </Stack>

          <Typography 
            variant="caption" 
            sx={{ mt: 2, display: 'block', color: 'text.secondary', fontStyle: 'italic' }}
          >
            LinkedIn preferred for professional inquiries
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
};

export default Contact;
