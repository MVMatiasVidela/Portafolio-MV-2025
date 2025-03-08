'use client';
import { Box, useTheme } from '@mui/material';

const Circles4 = () => {
  const theme = useTheme(); // Accede al tema actual
  return (
    <Box
      sx={{
        width: {
          mobile: '200px', // Ancho para dispositivos móviles
          tablet: '300px', // Ancho para tabletas
          laptop: '400px', // Ancho para laptops
          desktop: '400px', // Ancho para pantallas grandes
        },
        height: {
          mobile: '50px', // Alto para dispositivos móviles
          tablet: '70px', // Alto para tabletas
          laptop: '100px', // Alto para laptops
          desktop: '100px', // Alto para pantallas grandes
        },
        borderRadius: '50%', // Mantener la forma circular
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #3B82F6 50%, #14B8A6 50%, #426dcb 50%)' // Gradiente
            : 'linear-gradient(135deg, #ffffff 20%, #ffffff 20%)', // Color en modo claro
        filter: 'blur(30px)', // Filtro de desenfoque
        display: 'block',
        margin: 'auto', // Centrado en el contenedor
      }}
    />
  );
};

export default Circles4;
