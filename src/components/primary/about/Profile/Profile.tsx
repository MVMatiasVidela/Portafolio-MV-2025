'use client';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Object1 from '@/assets/svg/Object1.svg';
import Circle2 from '@/components/secondary/circles/circles2/Circle2';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Circles4 from '@/components/secondary/circles/circles4/Circles4';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const socialLinks = [
  { id: 1, icon: <EmailIcon fontSize="large" /> },
  { id: 2, icon: <LinkedInIcon fontSize="large" /> },
  { id: 3, icon: <GitHubIcon fontSize="large" /> },
];

const Profile = () => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <Box
      sx={{
        paddingY: { mobile: '10rem', tablet: '8rem', laptop: '10rem' },
        paddingX: { mobile: '2rem', tablet: '5rem', laptop: '15rem' },
        display: 'flex',
        minHeight: '100vh',
        flexDirection: { mobile: 'column', laptop: 'row' },
        alignItems: { mobile: 'center', laptop: 'center' },
        justifyContent: 'space-between',
        gap: { mobile: '4rem', laptop: '8rem' },
      }}
    >
      <Box sx={{ maxWidth: { mobile: '100%', laptop: '65rem' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <Typography variant="h2">Acerca de mí</Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{  color: 'text.secondary',}}
        >
          Mi recorrido desde Argentina, pasando por Chile, me ha permitido
          adentrarme en el fascinante mundo de la tecnología. Actualmente, me
          encuentro en España, perfeccionando las habilidades que he adquirido a
          lo largo de mi trayectoria, con el firme compromiso de alcanzar, día a
          día, cada uno de mis objetivos de manera exitosa.
        </Typography>
        <Box sx={{ display: 'flex', gap: '1.2rem', marginTop: '2rem' }}>
          {socialLinks.map(({ id, icon }) => (
            <Box
              key={id}
              sx={{
                display: 'flex',
                gap: '1.2rem',
                border: '1px solid',
                borderRadius: '1rem',
                padding: '0.5rem',
                background: hover === id ? '#1E293B' : '#030712',
                borderColor: '#282F3C',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHover(id)}
              onMouseLeave={() => setHover(null)}
            >
              {hover === id ? <ArrowOutwardIcon fontSize="large" /> : icon}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: { mobile: '100%', laptop: '30rem' },
        }}
      >
        <Object1 />
        <Box
          sx={{
            position: 'absolute',
            top: { mobile: '0rem', laptop: '-40rem' },
            right: '80rem',
            zIndex: -1,
          }}
        >
          <Circle2 />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: { mobile: '-5rem', laptop: '30rem' },
          right: { mobile: '-5rem', laptop: '10rem' },
          zIndex: -1,
        }}
      >
        <Circles4 />
      </Box>
    </Box>
  );
};

export default Profile;
