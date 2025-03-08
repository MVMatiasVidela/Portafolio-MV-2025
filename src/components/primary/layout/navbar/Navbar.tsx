import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
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
import Link from 'next/link';
import Logo from '@/assets/svg/Logo.svg';

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
        zIndex: 10,
        position: 'fixed',
        top: 0,
        width: '100vw',
        backdropFilter: 'blur(10px)',
        paddingX: {
          mobile: '2rem', // 20px -> 2rem
          tablet: '4.8rem', // 48px -> 4.8rem
          laptop: '4.8rem', // 48px -> 4.8rem
          desktop: '4.8rem', // 48px -> 4.8rem
        },
        paddingY: '1.2rem', // 12px -> 1.2rem
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Logo />
      </Box>

      <Box
        sx={{
          display: {
            mobile: 'none',
            tablet: 'none',
            laptop: 'flex',
            desktop: 'flex',
          },
          gap: '3.6rem', // 36px -> 3.6rem
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '2.4rem', // 24px -> 2.4rem
            fontSize: '2rem', // 20px -> 2rem
            color: 'white',
          }}
        >
          <Link href="/" className="link">
            <Typography variant="body1" sx={{ color: '#D4E6FD' }}>
              Inicio
            </Typography>
          </Link>
          <Link href="/about" className="link">
            <Typography variant="body1" sx={{ color: '#D4E6FD' }}>
              Sobre mí
            </Typography>
          </Link>
          <Link href="#about" className="link">
            <Typography variant="body1" sx={{ color: '#D4E6FD' }}>
              Proyectos
            </Typography>
          </Link>
        </Box>

        {/* Icono de cambio de tema visible en pantallas grandes */}
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>

      {/* Icono de menú hamburguesa en móviles */}
      <Box
        sx={{
          display: {
            mobile: 'flex',
            tablet: 'flex',
            laptop: 'none',
            desktop: 'none',
          },
          alignItems: 'center',
        }}
      >
        {/* Icono de cambio de tema en dispositivos móviles */}
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <IconButton
          onClick={toggleDrawer(true)}
          color="inherit"
          sx={{ marginRight: '1rem' }} // Espacio entre el icono y el botón de cambio de tema
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer - Menú hamburguesa */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          backdropFilter: 'blur(10px)', // Fondo difuso al abrir el menú
          '& .MuiDrawer-paper': {
            backgroundColor: 'transparent', // Fondo transparente para el Drawer en sí
            width: '25rem', // 250px -> 25rem
            height: '35rem', // 250px -> 25rem
            borderEndStartRadius: '2rem',
            borderTopLeftRadius: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem', // 20px -> 2rem
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sombra para el efecto de profundidad
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: isDarkMode ? '#030712' : '#f5f5f5', // Fondo para los ítems de navegación
            flex: 1, // Asegura que ocupe todo el espacio disponible
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            paddingTop: '2rem',
            padding: '1em',
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
              { text: 'Inicio', href: '/' },
              { text: 'Sobre mí', href: '/about' },
              { text: 'Proyectos', href: '/proyects' },
            ].map(item => (
              <Link
                key={item.text}
                href={item.href}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.text} />
              </Link>
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
