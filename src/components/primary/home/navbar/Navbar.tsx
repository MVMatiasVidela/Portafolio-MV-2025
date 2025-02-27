'use client';
import { Box, Button, IconButton, Link, Typography } from '@mui/material';
import Image from 'next/image';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = ({ toggleTheme, isDarkMode }: any) => {
  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        zIndex: 50,
        position: 'fixed',
        top: 0,
        width: '100%',
        backdropFilter: 'blur(10px)',
        paddingX: '48px',
        paddingY: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <Image
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1740584411/Group_5_2_l3a3uv.png"
          alt="Logo"
          width={150}
          height={50}
        />
      </div>

      <Box
        sx={{
          display: 'flex',
          gap: '36px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            fontSize: '20px',
            color: 'white',
          }}
        >
          <Link href="#home" underline="none">
            <Typography variant="body1" sx={{ color: '#D4E6FD' }}>
              Inicio
            </Typography>
          </Link>
          <Link href="#services" underline="none">
            <Typography variant="body1" sx={{ color: '#D4E6FD' }}>
              Sobre mí
            </Typography>
          </Link>
          <Link href="#about" underline="none">
            <Typography variant="body1" sx={{ color: '#D4E6FD' }}>
              Proyectos
            </Typography>
          </Link>
        </Box>

        <div>
          <Link href="#contact">
            <Button variant="contained">Contáctanos</Button>
          </Link>
        </div>

        {/* Botón para cambiar el tema */}
        <div>
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Navbar;
