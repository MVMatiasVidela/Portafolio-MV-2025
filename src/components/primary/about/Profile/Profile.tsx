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
    <Box sx={{ paddingY: '100px', display: 'flex', paddingX: '100px' }}>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Typography variant="h2">Acerca de mí </Typography>
        </Box>
        <Typography variant="body1">
          Mi recorrido desde Argentina, pasando por Chile, me ha permitido
          adentrarme en el fascinante mundo de la tecnología. Actualmente, me
          encuentro en España, perfeccionando las habilidades que he adquirido a
          lo largo de mi trayectoria, con el firme compromiso de alcanzar, día a
          día, cada uno de mis objetivos de manera exitosa.
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <EmailIcon></EmailIcon>
          <LinkedInIcon></LinkedInIcon>
          <GitHubIcon></GitHubIcon>
          <YouTubeIcon></YouTubeIcon>
          <Disp />
        </Box>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Object1></Object1>
        <Box
          sx={{
            position: 'absolute',
            top: '-100px',
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
