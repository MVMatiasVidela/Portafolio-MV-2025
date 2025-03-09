import Circles3 from '@/components/secondary/circles/circles3/Circles3';
import { Box, Button, Link, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        paddingBottom: { mobile: '6.25rem', laptop: '10rem', desktop: '10rem' },
        paddingX: {
          mobile: '1.25rem',
          tablet: '3.125rem',
          laptop: '15rem',
          desktop: '15rem',
        },
        display: 'flex',
        justifyContent: 'center',
        // position: 'relative',
      }}
    >
      {/* <Box
        sx={{
          position: 'absolute',
          top: '-10rem', 
          right: '0px',
          zIndex: -1,
        }}
      >
        <Circles3 />
      </Box> */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', tablet: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '4.5rem',
          gap: { mobile: '2rem', tablet: '3rem', laptop: '', desktop: '' },
          border: '1px solid #282F3C',
          borderRadius: '10px',
          backgroundImage: `url(https://res.cloudinary.com/dseutp7hi/image/upload/v1740824037/Group_13_1_rpvntg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { mobile: '1.5rem', tablet: '2rem', laptop: '2.5rem' },
            }}
          >
            ¿Te interesa mi perfil?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                mobile: '0.875rem',
                tablet: '1rem',
                laptop: '1.6rem',
              }, // 14px y 16px con rem
            }}
          >
            ¡Hablemos y exploremos cómo puedo aportar valor a tu equipo!
          </Typography>
        </Box>

        {/* Botones */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { mobile: 'column', tablet: 'row' },
            alignItems: 'center',
            gap: '1rem', // 16px con rem
          }}
        >
          <Link href="" underline="none">
            <Button
              variant="contained"
           
            >
              Contáctame
            </Button>
          </Link>
          <Link href="" underline="none">
            <Button
              variant="contained"
            
            >
              Descargar CV
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
