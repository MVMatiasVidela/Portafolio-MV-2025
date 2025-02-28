'use client';
import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Link,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        zIndex: 50,
        position: 'fixed',
        top: 0,
        width: '100%',
        backdropFilter: 'blur(10px)',
        paddingX: {
          mobile: '20px',
          tablet: '48px',
          laptop: '48px',
          desktop: '48px',
        }, // Para todos los tamaños
        paddingY: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Logo */}
      <Box>
        <Image
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1740584411/Group_5_2_l3a3uv.png"
          alt="Logo"
          width={150}
          height={50}
        />
      </Box>

      {/* Menú en pantallas grandes */}
      <Box
        sx={{
          display: {
            mobile: 'none',
            tablet: 'none',
            laptop: 'flex',
            desktop: 'flex',
          }, // Solo en tablet y pantallas grandes
          gap: '36px',
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

        <Link href="#contact">
          <Button variant="contained">Contáctanos</Button>
        </Link>

        {/* Botón de cambio de tema */}
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>

      {/* Menú hamburguesa en pantallas pequeñas */}
      <IconButton
        sx={{
          display: {
            mobile: 'flex',
            tablet: 'flex',
            laptop: 'none',
            desktop: 'none',
          }, // Solo en pantallas pequeñas (mobile y tablet)
        }}
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer lateral */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ alignSelf: 'flex-end' }}
          >
            <CloseIcon />
          </IconButton>

          <List>
            {[
              { text: 'Inicio', href: '#home' },
              { text: 'Sobre mí', href: '#services' },
              { text: 'Proyectos', href: '#about' },
            ].map(item => (
              <ListItem
                key={item.text}
                component="a"
                href={item.href}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

          <Link href="#contact">
            <Button variant="contained" fullWidth>
              Contáctanos
            </Button>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
