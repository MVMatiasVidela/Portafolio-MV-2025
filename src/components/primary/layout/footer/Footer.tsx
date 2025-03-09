import { Box, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Foot from '@/assets/svg/Footer.svg';
import Logo from '@/assets/svg/Logo.svg';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { mobile: 'column', tablet: 'column', laptop: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: { mobile: '2.4rem', tablet: '4.8rem', laptop: '4.8rem' }, // 24px -> 2.4rem, 48px -> 4.8rem
        paddingY: '2.4rem', // 24px -> 2.4rem
      }}
    >
      {/* Sección de iconos - Aparece primero en responsive */}
      <Box
        sx={{
          display: 'flex',
          gap: '1.2rem', // 12px -> 1.2rem
          order: { mobile: 1, tablet: 1, laptop: 3 },
        }}
      >
        <EmailIcon fontSize="large" />
        <LinkedInIcon fontSize="large" />
        <GitHubIcon fontSize="large" />
        <YouTubeIcon fontSize="large" />
      </Box>

      {/* Logo - Aparece en el medio en responsive */}
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

      {/* Texto de copyright - Aparece al final en responsive */}
      <Box sx={{ order: { mobile: 3, tablet: 3, laptop: 1 } }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: { mobile: '1.4rem', tablet: '1.6rem', laptop: '1.8rem' },
          }} // 14px -> 1.4rem, 16px -> 1.6rem, 18px -> 1.8rem
        >
          &copy; 2025 / Matías Videla / Portafolio
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
