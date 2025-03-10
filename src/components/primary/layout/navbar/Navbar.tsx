import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Typography,
  Drawer,
  List,
 
  ListItemText,
} from '@mui/material';

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
        zIndex: 50,
        position: 'fixed',
        top: 0,
        width: '100vw',
        backdropFilter: 'blur(10px)',
        paddingX: {
          mobile: '2rem',
          tablet: '4.8rem',
          laptop: '4.8rem',
          desktop: '4.8rem',
        },
        paddingY: {
          mobile: '2rem',
          tablet: '4.8rem',
          laptop: '2.4rem',
          desktop: '2.4rem',
        },
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
          gap: '3.6rem',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '2.4rem',
            fontSize: '2rem',
            color: 'white',
          }}
        >
          <Link href="/">
            <Typography variant="caption1" sx={{ color: 'text.secondary' }}>
              Inicio
            </Typography>
          </Link>
          <Link href="/about">
            <Typography variant="caption1" sx={{ color: 'text.secondary' }}>
              Sobre mí
            </Typography>
          </Link>
          <Link href="/proyects">
            <Typography variant="caption1" sx={{ color: 'text.secondary' }}>
              Proyectos
            </Typography>
          </Link>
        </Box>

        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? (
            <LightModeIcon fontSize="large" />
          ) : (
            <DarkModeIcon fontSize="large" />
          )}
        </IconButton>
      </Box>

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
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? (
            <LightModeIcon fontSize="large" />
          ) : (
            <DarkModeIcon fontSize="large" />
          )}
        </IconButton>
        <IconButton
          onClick={toggleDrawer(true)}
          color="inherit"
          sx={{ marginRight: '1rem' }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          backdropFilter: 'blur(10px)',
          '& .MuiDrawer-paper': {
            backgroundColor: 'transparent',
            width: '25rem',
            height: '35rem',
            borderEndStartRadius: '2rem',
            borderTopLeftRadius: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: isDarkMode ? '#030712' : '#f5f5f5',
            flex: 1,
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
          {/* 
          <Link href="mailto:matias.damian.vi@gmail.com">
            <Button variant="contained" fullWidth>
              Contáctanos
            </Button>
          </Link> */}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
