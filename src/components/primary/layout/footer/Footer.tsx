import { Box, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '@/assets/svg/Logo.svg';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { mobile: 'column', tablet: 'column', laptop: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: { mobile: '2.4rem', tablet: '4.8rem', laptop: '4.8rem' }, 
        paddingY: '2.4rem', 
      }}
    >
     
      <Box
        sx={{
          display: 'flex',
          gap: '1.2rem', 
          order: { mobile: 1, tablet: 1, laptop: 3 },
        }}
      >
        <EmailIcon fontSize="large" />
        <LinkedInIcon fontSize="large" />
        <GitHubIcon fontSize="large" />
        <YouTubeIcon fontSize="large" />
      </Box>

    
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          order: { mobile: 2, tablet: 2, laptop: 2 },
        }}
      >
        <Logo />
      </Box>

    
      <Box sx={{ order: { mobile: 3, tablet: 3, laptop: 1 } }}>
        <Typography
          variant="body2"
         
        >
          &copy; 2025 / Matías Videla / Portafolio
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
