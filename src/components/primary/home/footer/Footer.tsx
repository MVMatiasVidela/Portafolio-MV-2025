import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
       
       
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: '48px',
       
      
      }}
    >
      <Box
      >
        <Typography variant='h6'>

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
    </Box>
  );
};

export default Footer;
