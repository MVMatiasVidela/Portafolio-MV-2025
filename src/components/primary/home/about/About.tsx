'use client';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Object2 from '@/assets/svg/Object2.svg';
import Circles4 from '@/components/secondary/circles/circles4/Circles4';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { mobile: 'column', laptop: 'row', desktop: 'row' }, 
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: {
          mobile: '2rem', 
          tablet: '5rem', 
          laptop: '15rem', 
          desktop: '15rem', 
        },
        paddingBottom: {
          mobile: '8rem', 
          tablet: '10rem',
          laptop: '10rem', 
          desktop: 'rem', 
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Object2 style={{ width: '40rem', }} />
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
            paddingX: '0.5rem',
            paddingY: '0.5rem',
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
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.1rem', // 8px -> 0.8rem
              width: { mobile: '100%', tablet: 'auto' },
            }}
          >
            Acerca de mí
            <KeyboardArrowRightRoundedIcon fontSize="large" />
          </Box>
        </Button>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: {
            mobile: '25rem',
            tablet: '',
            laptop: '20rem',
            desktop: '25rem',
          }, // 250px -> 25rem
          left: { mobile: '25rem', tablet: '', laptop: '16rem', desktop: '' },
          zIndex: -1,
        }}
      >
        <Circles4 />
      </Box>
    </Box>
  );
};

export default About;
