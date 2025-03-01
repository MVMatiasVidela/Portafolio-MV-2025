import { Box, Typography } from '@mui/material';
import React from 'react';
import Disp from '@/assets/svg/Disp.svg';
import Object1 from '@/assets/svg/Object1.svg';
import Circle2 from '@/components/secondary/circles/circles2/Circle2';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile = () => {
  return (
    <Box
      sx={{
        paddingY: { mobile: '100px', tablet: '80px', laptop: '100px' },
        paddingX: { mobile: '20px', tablet: '50px', laptop: '100px' },
        display: 'flex',
        flexDirection: { mobile: 'column', laptop: 'row' },
        alignItems: { mobile: 'center', laptop: 'flex-start' },
        gap: { mobile: '40px', laptop: '80px' },
      }}
    >
      <Box sx={{ maxWidth: { mobile: '100%', laptop: '50%' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Typography variant="h2">Acerca de mí</Typography>
        </Box>
        <Typography variant="body1">
          Mi recorrido desde Argentina, pasando por Chile, me ha permitido
          adentrarme en el fascinante mundo de la tecnología. Actualmente, me
          encuentro en España, perfeccionando las habilidades que he adquirido a
          lo largo de mi trayectoria, con el firme compromiso de alcanzar, día a
          día, cada uno de mis objetivos de manera exitosa.
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
          <EmailIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
          <GitHubIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
          <Disp />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          maxWidth: { mobile: '100%', laptop: '50%' },
        }}
      >
        <Object1  />
        <Box
          sx={{
            position: 'absolute',
            top: { mobile: '-50px', laptop: '-100px' },
            right: '0px',
            zIndex: -1,
          }}
        >
          <Circle2 />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
