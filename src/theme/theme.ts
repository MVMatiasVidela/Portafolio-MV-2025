'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';
import { Cormorant } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D4E6FD',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,

    h1: {
     
      fontSize: '50px',
      fontWeight: 'bold',
    },
    h2: {
     
      fontWeight: 'bold',
      fontSize: '40px',
    },
    h3: {
      
      fontWeight: 'bold',
      fontSize: '40px',
    },
    h4: {
    
      fontWeight: 'bold',
      fontSize: '40px',
    },
    h5: {
     
      fontWeight: 'bold',
      fontSize: '40px',
    },
    h6: {
      fontWeight: '600',
      fontSize: '16px',
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '20px',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '16px',
    },
    button: {
      fontWeight: '600',
      fontSize: '14px',
      textTransform: 'capitalize',
    },
    caption1: {
      fontWeight: '600',
      fontSize: '14px',
    },
    caption2: {
      fontWeight: 'normal',
      fontSize: '14px',
    },
    caption3: {
      fontWeight: '300',
      fontSize: '15px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          padding: '12px 24px',
          fontWeight: '500',
          fontSize: '14px',
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0px 1000px transparent inset',
            WebkitTextFillColor: '#fff',
            transition: 'background-color 5000s ease-in-out 0s',
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4E6FD',
    },
    background: {
      default: '#030712',
    },
  },

  typography: {
    fontFamily: poppins.style.fontFamily,

    h1: {
     
      fontSize: '48px',
      fontWeight: 'bold',
    },
    h2: {
     
      fontWeight: 'bold',
      fontSize: '40px',
    },
    h3: {
     
      fontWeight: 'bold',
      fontSize: '40px',
    },
    h4: {
     
      fontWeight: 'bold',
      fontSize: '40px',
    },
    h5: {
      
      fontWeight: 'bold',
      fontSize: '40px',
    },
    h6: {
      fontWeight: '600',
      fontSize: '16px',
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '20px',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '16px',
    },
    button: {
      fontWeight: '600',
      fontSize: '14px',
      textTransform: 'capitalize',
    },
    caption1: {
      fontWeight: '600',
      fontSize: '14px',
    },
    caption2: {
      fontWeight: 'normal',
      fontSize: '14px',
    },
    caption3: {
      fontWeight: '300',
      fontSize: '15px',
    },
  },

  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          padding: '12px 24px',
          fontWeight: '500',
          fontSize: '14px',
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0px 1000px transparent inset',
            WebkitTextFillColor: '#fff',
            transition: 'background-color 5000s ease-in-out 0s',
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});


