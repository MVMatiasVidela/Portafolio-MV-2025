import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Foot from '@/assets/svg/Footer.svg';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { mobile: 'column', tablet: 'column', laptop: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: { mobile: '24px', tablet: '48px', laptop: '48px' },
        paddingY: '24px',
        position: 'relative',
       
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: { mobile: '14px', tablet: '16px', laptop: '18px' } }}
        >
          &copy; 2025 / Matías Videla / Portafolio
        </Typography>
      </Box>

      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Image
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1740584411/Group_5_2_l3a3uv.png"
          alt="Logo"
          width={200}
          height={50}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: '12px' }}>
        <EmailIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <YouTubeIcon />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          zIndex: -50,
          bottom: 0,
          left: 0,
          width: '100%',
         
        }}
      >
        <Foot style={{ width: '100%',  }} />
      </Box>
    </Box>
  );
};

export default Footer;
