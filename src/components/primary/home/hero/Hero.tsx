'use client';
import useTextoAnimado from '@/hooks/textAmination';
import { Box, Button, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Object4 from '@/assets/svg/Object4.svg';
import Circles4 from '@/components/secondary/circles/circles4/Circles4';

const Hero: React.FC = () => {
  const theme = useTheme();

  useTextoAnimado('miTexto');
  useTextoAnimado('miTexto2');

  const backgroundImage =
    theme.palette.mode === 'dark'
      ? 'https://res.cloudinary.com/dseutp7hi/image/upload/v1740767851/Group_48095605_2_ccgeen.png'
      : 'https://res.cloudinary.com/dseutp7hi/image/upload/v1741445244/Group_48095605_3_utyfjf.png';

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',

        paddingX: {
          mobile: '2rem',
          tablet: '5rem',
          laptop: '10rem',
          desktop: '10rem',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', laptop: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',

          maxWidth: '120rem',
          gap: { mobile: '4rem', laptop: '8rem' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { mobile: 'center', laptop: 'flex-start' },
            textAlign: { mobile: 'center', laptop: 'left' },
            maxWidth: '80rem',

            gap: '2rem',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                mobile: '2.4rem',
                tablet: '3.2rem',
                laptop: '6rem',
                desktop: '6rem',
              },
              fontWeight: 'bold',
            }}
          >
            Hola! soy Matías Videla
          </Typography>

          <Box className="texto" id="miTexto">
            <Typography
              sx={{
                fontSize: {
                  mobile: '1.4rem',
                  tablet: '1.6rem',
                  laptop: '2rem',
                  desktop: '2rem',
                },
                color: 'text.secondary',
              }}
            >
              Soy un desarrollador web frontend apasionado por crear
              experiencias digitales intuitivas y atractivas.
            </Typography>
          </Box>

          {/* Botones */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { mobile: 'column', tablet: 'row' },
              gap: '1.2rem',
              width: '100%',
              maxWidth: { mobile: '100%', tablet: 'auto' },
            }}
          >
            <Link
              href=""
              underline="none"
              sx={{ width: { mobile: '100%', tablet: 'auto' } }}
            >
              <Button variant="contained" fullWidth>
                Contáctame
              </Button>
            </Link>
            <Link
              href=""
              underline="none"
              sx={{ width: { mobile: '100%', tablet: 'auto' } }}
            >
              <Button variant="contained" fullWidth>
                Descargar CV
              </Button>
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            width: {
              mobile: '20rem',
              tablet: '25rem',
              laptop: '30rem',
              desktop: '35rem',
            },
            zIndex: 10,
          }}
        >
          <Object4 />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: {
              mobile: '50%',
              tablet: '40%',
              laptop: '35rem',
              desktop: '25%',
            },
            left: {
              mobile: '50%',
              tablet: '45%',
              laptop: '110rem',
              desktop: '35%',
            },
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
        >
          <Circles4 />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
