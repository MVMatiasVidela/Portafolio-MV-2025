'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';
import { Cormorant } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});
const responsiveTypography = (
  mobile: string,
  tablet: string,
  laptop: string,
  desktop: string,
  weight = '400'
) => ({
  fontSize: mobile,
  fontWeight: weight,
  '@media (min-width:768px)': {
    fontSize: tablet,
  },
  '@media (min-width:1024px)': {
    fontSize: laptop,
  },
  '@media (min-width:1440px)': {
    fontSize: desktop,
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#091737',
    },
    background: {
      default: '#D4E6FD',
      // paper: '#F5F5F5',
    },
    text: {
      primary: '#030713',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: responsiveTypography('3rem', '4rem', '6rem', '6rem', '700'),
    h2: responsiveTypography('2.8rem', '3.6rem', '4.4rem', '4.8rem', '700'),
    h3: responsiveTypography('2.4rem', '3rem', '3.6rem', '4rem', '600'),
    h4: responsiveTypography('2rem', '2.6rem', '3rem', '3.2rem', '600'),
    h5: responsiveTypography('1.8rem', '2.2rem', '2.6rem', '2.8rem', '500'),
    h6: responsiveTypography('1.6rem', '2rem', '2.2rem', '2.4rem', '500'),
    body1: responsiveTypography('1.4rem', '1.6rem', '1.8rem', '2rem', '400'),
    body2: responsiveTypography('1.2rem', '1.4rem', '1.6rem', '1.8rem', '400'),
    button: responsiveTypography('1.4rem', '1.6rem', '1.6rem', '2rem', '600'),
    caption1: responsiveTypography('1.2rem','1.4rem','1.6rem','1.8rem','500'),
    caption2: responsiveTypography('1rem', '1.2rem', '1.4rem', '1.6rem', '400'),
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
      secondary: '#D4E6FD',
    },
  },

  typography: lightTheme.typography,
  breakpoints: lightTheme.breakpoints,

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
