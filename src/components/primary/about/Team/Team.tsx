import Circle2 from '@/components/secondary/circles/circles2/Circle2';
import { Box, Typography } from '@mui/material';
import Object3 from '@/assets/svg/Object3.svg';
import Circles4 from '@/components/secondary/circles/circles4/Circles4';

const Team = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { mobile: 'column', tablet: 'row' },
        alignItems: { mobile: 'center', tablet: 'flex-start' },
        justifyContent: 'space-between',
        padding: {
          mobile: '3.125rem',
          tablet: '5.625rem',
          laptop: '15rem',
          desktop: '15rem',
        },
        gap: { mobile: '2rem', tablet: '4rem' },
      }}
    >
      <Box sx={{ maxWidth: { mobile: '100%', laptop: '50%' } }}>
        <Typography
          variant="h2"
         
        >
          Trabajo en equipo
        </Typography>
        <Typography
        variant='body1'
          sx={{
            color: 'text.secondary',
          }}
        >
          Me apasiona trabajar en equipo, ya que creo firmemente en el poder de
          la colaboración para alcanzar objetivos de manera eficiente y
          creativa. Disfruto compartir ideas, aprender de los demás y contribuir
          con mis habilidades para lograr resultados exitosos. Me caracterizo
          por mi capacidad de comunicación, empatía y resolución de problemas,
          lo que me permite integrarme fácilmente en grupos de trabajo diversos.
          Siempre estoy dispuesto a aportar y a recibir retroalimentación
          constructiva para mejorar tanto individual como colectivamente.
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: { mobile: '100%', laptop: '40rem' },
        }}
      >
        <Object3 />
        <Box
          sx={{
            position: 'absolute',
            top: { mobile: '-3rem', tablet: '-6.25rem', laptop: '-6.25rem' },
            right: '0',
            zIndex: -1,
          }}
        >
          <Circle2 />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: {
              mobile: '-15.625rem',
              tablet: '-12.5rem',
              laptop: '19rem',
            },
            right: {
              mobile: '-15.625rem',
              tablet: '-12.5rem',
              laptop: '2rem',
            },
            zIndex: -1,
          }}
        >
          <Circles4 />
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
