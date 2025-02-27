'use client';
import Desktop from '@/assets/svg/Desktop.svg';
import useTextoAnimado from '@/hooks/textAmination';
import { Box, Button, Link, Typography } from '@mui/material';
import { JSX } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
// import Link from 'next/link';

// Función para convertir el componente SVG a Data URI
const svgToDataUri = (svg: JSX.Element): string => {
  const svgString = ReactDOMServer.renderToStaticMarkup(svg);
  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

const Hero: React.FC = () => {
  const theme = useTheme();

  // Usamos el hook para animar el texto con id "miTexto"
  useTextoAnimado('miTexto');
  useTextoAnimado('miTexto2'); // Otro texto con otro id si es necesario

  return (
    <Box
      sx={{
        backgroundImage: `url(${svgToDataUri(<Desktop />)})`,
        backgroundSize: 'cover', // Asegura que la imagen cubra toda la pantalla
        backgroundPosition: 'center', // Centra la imagen
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        minHeight: '100vh', // Asegura que ocupe al menos toda la altura de la pantalla
      }}
    >
      <Box
        id="home"
        sx={{
          display: 'flex',
          paddingY: '150px',
          paddingX: '100px',
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
          <div>
            <div>
              <Typography variant="h1">
                Hola, soy{' '}
                <span className="bg-gradient-to-r from-Fblue-100 to-Fblue-200 bg-clip-text text-transparent font-bold">
                  Matías Videla
                </span>{' '}
              </Typography>
            </div>
          </div>
          <Box className="texto" id="miTexto">
            <Typography className="text-[20px] text-[#89ABD1] font-medium">
              Soy desarrollador frontend y apasionado por el mundo IT
            </Typography>
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
        <Box sx={{display:'flex',}}>
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1736195640/Group_48095598_1_qy1mu3.png"
            alt="Imagen"
            width={400}
            height={350}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
