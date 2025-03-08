'use client'
import { Box, useTheme } from '@mui/material';

const Circle2 = () => {
  const theme = useTheme(); // Accede al tema actual

  return (
    <Box
      sx={{
        width: {
          mobile: '200px', // Ancho del círculo en dispositivos móviles
          tablet: '300px', // Ancho del círculo en tablets
          laptop: '500px', // Ancho del círculo en laptops
          desktop: '500px', // Ancho del círculo en pantallas grandes
        },
        height: {
          mobile: '200px', // Alto del círculo en dispositivos móviles
          tablet: '300px', // Alto del círculo en tablets
          laptop: '500px', // Alto del círculo en laptops
          desktop: '500px', // Alto del círculo en pantallas grandes
        },
        borderRadius: '50%', // Para hacerlo circular
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #091737 20%, #091737 80%)' // Color en modo oscuro
            : 'linear-gradient(135deg, #ffffff 20%, #ffffff 20%)', // Color en modo claro
        filter: 'blur(100px)', // Suaviza el desenfoque
        margin: 'auto', // Centra el círculo
        display: 'block', // Hace que se comporte como un bloque para centrarse
      }}
    />
  );
};

export default Circle2;
