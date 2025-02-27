'use client';
import { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/theme/theme';
import Navbar from '@/components/primary/home/navbar/Navbar';

const ThemeProviderClient = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Pasamos las props al Navbar */}
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderClient;
