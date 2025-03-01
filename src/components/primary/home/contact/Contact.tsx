import Circles3 from '@/components/secondary/circles/circles3/Circles3';
import { Box, Button, Link, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        background: 'transparent',
        paddingBottom: { mobile: '100px', laptop: '200px' },
        paddingX: { mobile: '20px', tablet: '50px', laptop: '100px' },
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-200px',
          right: '0px',
          zIndex: -1,
        }}
      >
        <Circles3 />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', tablet: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '72px',
          gap: { mobile: '32px', tablet: '48px' },
          border: '1px solid #282F3C',
          borderRadius: '10px',
          backgroundImage: `url(https://res.cloudinary.com/dseutp7hi/image/upload/v1740824037/Group_13_1_rpvntg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          maxWidth: '1100px',
          textAlign: 'center',
        }}
      >
        {/* Texto */}
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
              fontSize: { mobile: '24px', tablet: '32px', laptop: '40px' },
            }}
          >
            ¿Te interesa mi perfil?
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { mobile: '14px', tablet: '16px' } }}
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
            gap: '16px',
          }}
        >
          <Link href="" underline="none">
            <Button
              variant="contained"
              sx={{ fontSize: { mobile: '14px', tablet: '16px' } }}
            >
              Contáctame
            </Button>
          </Link>
          <Link href="" underline="none">
            <Button
              variant="contained"
              sx={{ fontSize: { mobile: '14px', tablet: '16px' } }}
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
