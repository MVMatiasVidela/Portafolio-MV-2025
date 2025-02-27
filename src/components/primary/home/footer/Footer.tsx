import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'px',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginX: '42px',
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        paddingX: '12px',
        paddingTop: '20px',
        paddingBottom: '12px',
        background: 'linear-gradient(to top, #030712, #050C1F, #0C1C42)', // Ajustar los colores según el tema
        '&.dark': {
          background: 'linear-gradient(to top, #030712, #030712, #030712)', // Ajustar para el tema oscuro
        },
      }}
    >
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
      <Box
        sx={{
          borderTop: '2px solid',
          width: '80%',
          textAlign: 'center',
          pt: 4,
        }}
      >
        &copy; 2025 / Matías Videla / Portafolio
      </Box>
    </Box>
  );
};

export default Footer;
