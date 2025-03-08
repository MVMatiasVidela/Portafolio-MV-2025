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
      main: '#030712',
    },
    background: {
      default: '#D4E6FD',
      // paper: '#F5F5F5',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,

    h1: {
      fontSize: '5.6rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '4.8rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '4rem',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '3.2rem',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '2.8rem',
      fontWeight: '400',
    },
    h6: {
      fontSize: '2.4rem',
      fontWeight: '400',
    },
    body1: {
      fontSize: '1.6rem',
      fontWeight: '400',
    },
    body2: {
      fontSize: '1.4rem',
      fontWeight: '400',
    },
    button: {
      fontSize: '1.6rem',
      fontWeight: '600',
      textTransform: 'capitalize',
    },
    caption1: {
      fontSize: '1.2rem',
      fontWeight: '600',
    },
    caption2: {
      fontSize: '1rem',
      fontWeight: 'normal',
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5rem', 
          padding: '1rem 4rem',
        },
      },
    },

    // MuiInputBase: {
    //   styleOverrides: {
    //     input: {
    //       '&:-webkit-autofill': {
    //         WebkitBoxShadow: '0 0 0px 1000px transparent inset',
    //         WebkitTextFillColor: '#fff',
    //         transition: 'background-color 5000s ease-in-out 0s',
    //       },
    //     },
    //   },
    // },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollbarWidth: 'none',
        },
        'html::-webkit-scrollbar': {
          display: 'none',
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
    text: {
      primary: '#ffffff',
    },
  },

  typography: {
    fontFamily: poppins.style.fontFamily,

    h1: {
      fontSize: '5.6rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '4.8rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '4rem',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '3.2rem',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '2.8rem',
      fontWeight: '400',
    },
    h6: {
      fontSize: '2.4rem',
      fontWeight: '400',
    },
    body1: {
      fontSize: '1.6rem',
      fontWeight: '400',
    },
    body2: {
      fontSize: '1.4rem',
      fontWeight: '400',
    },
    button: {
      fontSize: '1.6rem',
      fontWeight: '600',
      textTransform: 'capitalize',
    },
    caption1: {
      fontSize: '1.2rem',
      fontWeight: '600',
    },
    caption2: {
      fontSize: '1rem',
      fontWeight: 'normal',
    },
  },

  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768, // Mejor para cubrir tablets más grandes
      laptop: 1024, // Compatible con más laptops
      desktop: 1440, // Estándar para monitores grandes
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5rem', 
          padding: '1.2rem 2.4rem', // 12px 24px → 1.2rem 2.4rem
        },
      },
    },

    // MuiInputBase: {
    //   styleOverrides: {
    //     input: {
    //       '&:-webkit-autofill': {
    //         WebkitBoxShadow: '0 0 0px 1000px transparent inset',
    //         WebkitTextFillColor: '#fff',
    //         transition: 'background-color 5000s ease-in-out 0s',
    //       },
    //     },
    //   },
    // },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollbarWidth: 'none',
        },
        'html::-webkit-scrollbar': {
          display: 'none',
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


