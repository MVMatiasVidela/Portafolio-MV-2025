'use client';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Object2 from '@/assets/svg/Object2.svg';
import Circle2 from '@/components/secondary/circles/circles2/Circle2';
import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import Circles4 from '@/components/secondary/circles/circles4/Circles4';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { mobile: 'column', laptop: 'row', desktop: 'row' }, // Columna en mobile, fila en desktop
        justifyContent: 'center',
        alignItems: 'center',
        paddingX: {
          mobile: '2rem', // 20px -> 2rem
          tablet: '5rem', // 50px -> 5rem
          laptop: '8rem', // 80px -> 8rem
          desktop: '10rem', // 100px -> 10rem
        },
        paddingY: {
          mobile: '8rem', // 80px -> 8rem
          tablet: '10rem', // 120px -> 12rem
          laptop: '10rem', // 160px -> 16rem
          desktop: '10rem', // 200px -> 20rem
        },
        gap: {
          mobile: '2.4rem',
          tablet: '3.6rem',
          laptop: '3.6rem',
          desktop: '3.6rem',
        }, // 24px -> 2.4rem, 36px -> 3.6rem
        position: 'relative',
      }}
    >
      {/* Imagen */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Object2 />
      </Box>

      {/* Texto */}
      <Box
        sx={{
          textAlign: { mobile: 'center', laptop: 'left', desktop: 'left' },
          maxWidth: '60rem', // 600px -> 60rem
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              mobile: '2.4rem', // 24px -> 2.4rem
              tablet: '3.2rem', // 32px -> 3.2rem
              laptop: '3rem', // 20px -> 2rem
              desktop: '4rem', // 48px -> 4.8rem
            },
          }}
        >
          Programación
        </Typography>

        <Typography
          sx={{
            fontSize: {
              mobile: '1.4rem', // 14px -> 1.4rem
              tablet: '1.6rem', // 16px -> 1.6rem
              laptop: '1.6rem', // 10px -> 1rem
              desktop: '2rem', // 20px -> 2rem
            },
            color: 'text.secondary',
            marginY: '1.6rem', // 16px -> 1.6rem
          }}
        >
          En cada proyecto que emprendo, mi propósito es fusionar de manera
          equilibrada la estética, la funcionalidad y la eficiencia, para
          ofrecer soluciones que no solo cubran las necesidades del usuario,
          sino que también generen un valor tangible para el negocio. Mi enfoque
          es lograr un impacto positivo y duradero, asegurando que cada detalle
          esté orientado a potenciar tanto la experiencia del usuario como los
          resultados comerciales.
        </Typography>

        {/* Botón */}
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            paddingX: '1rem',
            paddingY: '1rem',
            alignItems: 'center',
            gap: '2rem', // 8px -> 0.8rem
            justifyContent: 'center',
            width: { mobile: '100%', tablet: 'auto' },
          }}
        >
          <Box>
            <Image
              alt="Image"
              src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729352638/Dise%C3%B1o_sin_xzdfgt%C3%ADtulo_pczp1e.png"
              height={3.5 * 10} // 35px -> 3.5rem
              width={3.5 * 10} // 35px -> 3.5rem
              style={{ borderRadius: '100px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              paddingX: '1rem',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem', // 8px -> 0.8rem
              width: { mobile: '100%', tablet: 'auto' },
            }}
          >
            Acerca de mí
            <ArrowOutwardIcon fontSize="large" />
          </Box>
        </Button>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: {
            mobile: '25rem',
            tablet: '',
            laptop: '37rem',
            desktop: '25rem',
          }, // 250px -> 25rem
          left: { mobile: '25rem', tablet: '', laptop: '17rem', desktop: '' },
          zIndex: -1,
        }}
      >
        <Circles4 />
      </Box>
    </Box>
  );
};

export default About;
