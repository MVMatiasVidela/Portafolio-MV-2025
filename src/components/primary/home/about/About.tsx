'use client';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const About = () => {
  return (
    <Box
      id="about"
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
      }}
    >
      {/* Imagen */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          image="https://res.cloudinary.com/dseutp7hi/image/upload/v1740763122/OBJECTS_1_ibknnc.png"
          alt="Descripción"
          sx={{
            maxWidth: '100%',
            width: { mobile: '300px', tablet: '400px', laptop: '450px' },
            height: 'auto',
          }}
        />
      </Box>

      {/* Texto */}
      <Box
        sx={{
          textAlign: { mobile: 'center', desktop: 'left' },
          maxWidth: '600px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              mobile: '24px',
              tablet: '32px',
              laptop: '40px',
              desktop: '48px',
            },
          }}
        >
          Programación
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: {
              mobile: '14px',
              tablet: '16px',
              laptop: '18px',
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
          <Image
            alt="Image"
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729352638/Dise%C3%B1o_sin_xzdfgt%C3%ADtulo_pczp1e.png"
            height={35}
            width={35}
          />
          Acerca de mí
          <ArrowOutwardIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
};

export default About;
