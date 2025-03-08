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
        justifyContent: 'center',
        padding: {
          mobile: '3.125rem', // 50px
          tablet: '5.625rem', // 90px
          laptop: '6.25rem', // 100px
        },
        gap: { mobile: '2rem', tablet: '4rem' },
      }}
    >
      <Box sx={{ maxWidth: { mobile: '100%', laptop: '50%' } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { mobile: '1.75rem', tablet: '2.25rem', laptop: '3rem' },
          }}
        >
          Trabajo en equipo
        </Typography>
        <Typography
          sx={{
            fontSize: {
              mobile: '0.875rem',
              tablet: '1rem',
              laptop: '1.125rem',
            },
            color: 'text.secondary',
            marginTop: '1.25rem',
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

      {/* Imagen y círculos decorativos */}
      <Box
        sx={{
          position: 'relative',
          maxWidth: { mobile: '100%', laptop: '50%' },
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
              mobile: '-15.625rem', // Para móviles
              tablet: '-12.5rem', // Para tabletas
              laptop: '19.375rem', // Para laptops
            },
            right: {
              mobile: '-15.625rem', // Para móviles
              tablet: '-12.5rem', // Para tabletas
              laptop: '3.125rem', // Para laptops
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
