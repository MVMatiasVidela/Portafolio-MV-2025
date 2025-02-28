'use client';
import Desktop from '@/assets/svg/Desktop.svg';
import useTextoAnimado from '@/hooks/textAmination';
import { Box, Button, Link, Typography } from '@mui/material';
import { JSX } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const Hero: React.FC = () => {
  const theme = useTheme();

  // Usamos el hook para animar el texto con id "miTexto"
  useTextoAnimado('miTexto');
  useTextoAnimado('miTexto2'); // Otro texto con otro id si es necesario

  return (
    <Box
      sx={{
        backgroundImage: `url(https://res.cloudinary.com/dseutp7hi/image/upload/v1740767851/Group_48095605_2_ccgeen.png)`,
        backgroundSize: 'cover', // Asegura que la imagen cubra toda la pantalla
        backgroundPosition: 'center', // Centra la imagen
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        minHeight: '100vh', // Asegura que ocupe al menos toda la altura de la pantalla
      }}
    >
      <Box
        id="home"
        sx={{
          display: 'flex', // Siempre será flex
          flexDirection: { mobile: 'column', laptop: 'column', desktop: 'row' }, // En móvil y tablet será column, en laptop y desktop será row
          paddingTop: '150px',
          paddingX: '100px',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '800px',
            gap: '8px',
          }}
        >
          <Box sx={{ gap: '100px', display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Box>
                <Typography variant="h1">
                  Hola, soy{' '}
                  <span className="bg-gradient-to-r from-Fblue-100 to-Fblue-200 bg-clip-text text-transparent font-bold">
                    Matías Videla
                  </span>{' '}
                </Typography>
              </Box>
              <Box className="texto" id="miTexto">
                <Typography className="text-[20px] text-[#89ABD1] font-medium">
                  Soy desarrollador frontend y apasionado por el mundo IT
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '12px' }}>
              <Link href="" underline="none">
                <Button variant="contained">Contáctame</Button>
              </Link>
              <Link href="" underline="none">
                <Button variant="contained">Descargar CV</Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Image
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1740767710/Group_12_2_yeu7hg.png"
            alt="Imagen"
            width={400}
            height={400}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
