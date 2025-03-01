'use client';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Object2 from '@/assets/svg/Object2.svg'
import Circle2 from '@/components/secondary/circles/circles2/Circle2';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { mobile: 'column', desktop: 'row' }, // Columna en mobile, fila en desktop
        justifyContent: 'center',
        alignItems: 'center',
        paddingX: {
          mobile: '20px',
          tablet: '50px',
          laptop: '80px',
          desktop: '100px',
        },
        paddingY: {
          mobile: '80px',
          tablet: '120px',
          laptop: '160px',
          desktop: '200px',
        },
        gap: { mobile: '24px', tablet: '36px' },
        position:'relative'
      }}
    >
      {/* Imagen */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Object2 />
      </Box>

      {/* Texto */}
      <Box
        sx={{
          textAlign: { mobile: 'center', desktop: 'left' },
          maxWidth: '600px',
        }}
      >
        <Typography
       
          sx={{
            fontSize: {
              mobile: '24px',
              tablet: '32px',
              laptop: '20px',
              desktop: '48px',
            },
          }}
        >
          Programación
        </Typography>

        <Typography

          sx={{
            fontSize: {
              mobile: '14px',
              tablet: '16px',
              laptop: '10px',
              desktop: '20px',
            },
            color: 'text.secondary',
            marginY: '16px',
          }}
        >
          En cada proyecto que emprendo, mi propósito es fusionar de manera
          equilibrada la estética, la funcionalidad y la eficiencia, para
          ofrecer soluciones que no solo cubran las necesidades del usuario,
          sino que también generen un valor tangible para el negocio. <br />
          Mi enfoque es lograr un impacto positivo y duradero, asegurando que
          cada detalle esté orientado a potenciar tanto la experiencia del
          usuario como los resultados comerciales.
        </Typography>

        {/* Botón */}
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '16px',
            width: { mobile: '100%', tablet: 'auto' },
          }}
        >
          <Box sx={{borderRadius:'100px'}}>

          <Image
            alt="Image"
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729352638/Dise%C3%B1o_sin_xzdfgt%C3%ADtulo_pczp1e.png"
            height={35}
            width={35}
          />
          </Box>
          Acerca de mí
          <ArrowOutwardIcon fontSize="small" />
        </Button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '250px',
          left: '0px',
          zIndex: -1,
        }}
      >
        <Circle2 />
      </Box>
    </Box>
  );
};

export default About;
