'use client';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Object2 from '@/assets/svg/Object2.svg';
import Circles4 from '@/components/secondary/circles/circles4/Circles4';
import Link from 'next/link';

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
        },
        position: 'relative',
      }}
    >
      <Box>
        <Object2 style={{ width: '40rem' }} />
      </Box>

      <Box
        sx={{
          textAlign: { mobile: 'center', laptop: 'left', desktop: 'left' },
          maxWidth: '60rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
        }}
      >
        <Box>
          <Typography variant="h2">Programación</Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
            }}
          >
            En cada proyecto que emprendo, mi propósito es fusionar de manera
            equilibrada la estética, la funcionalidad y la eficiencia, para
            ofrecer soluciones que no solo cubran las necesidades del usuario,
            sino que también generen un valor tangible para el negocio. Mi
            enfoque es lograr un impacto positivo y duradero, asegurando que
            cada detalle esté orientado a potenciar tanto la experiencia del
            usuario como los resultados comerciales.
          </Typography>
        </Box>
        <Link href="/about" style={{ width: '20rem' }}>
          <Box
            sx={{
              display: 'flex',
              gap: '2rem',
            }}
          >
            <Box>
              <Image
                alt="Image"
                src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729352638/Dise%C3%B1o_sin_xzdfgt%C3%ADtulo_pczp1e.png"
                height={3.5 * 10}
                width={3.5 * 10}
                style={{ borderRadius: '100px' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.1rem',
              }}
            >
              <Typography
                variant="caption1"
                sx={{
                  color: 'text.secondary',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Acerca de mí
                <KeyboardArrowRightRoundedIcon fontSize="large" />
              </Typography>
            </Box>
          </Box>
        </Link>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: {
            mobile: '25rem',
            tablet: '',
            laptop: '20rem',
            desktop: '25rem',
          },
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
