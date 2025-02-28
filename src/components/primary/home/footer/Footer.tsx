import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

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
        borderTop: '1px solid #282F3C', // Separador superior
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

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1740584411/Group_5_2_l3a3uv.png"
          alt="Logo"
          width={200}
          height={50}
        />
      </Box>
    </Box>
  );
};

export default Footer;
