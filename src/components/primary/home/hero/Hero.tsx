'use client';
import Desktop from '@/assets/svg/Desktop.svg';
import useTextoAnimado from '@/hooks/textAmination';
import { Box, Button, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const Hero: React.FC = () => {
  const theme = useTheme();

  // Usamos el hook para animar el texto con id "miTexto"
  useTextoAnimado('miTexto');
  useTextoAnimado('miTexto2');

  // Determinamos la imagen de fondo según el modo
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
        paddingX: {
          mobile: '2rem', // 20px -> 2rem
          tablet: '5rem', // 50px -> 5rem
          laptop: '8rem', // 80px -> 8rem
          desktop: '10rem', // 100px -> 10rem
        },
        paddingY: {
          mobile: '10rem', // 100px -> 10rem
          tablet: '8rem', // 80px -> 8rem
          laptop: '10rem', // 100px -> 10rem
        },
      }}
    >
      <Box
        id="home"
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', laptop: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '120rem', // 1200px -> 120rem
          gap: { mobile: '4rem', laptop: '8rem' }, // 40px -> 4rem, 80px -> 8rem
        }}
      >
        {/* Sección de texto */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { mobile: 'center', laptop: 'flex-start' },
            textAlign: { mobile: 'center', laptop: 'left' },
            maxWidth: '60rem', // 600px -> 60rem
            gap: '1.6rem', // 16px -> 1.6rem
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                mobile: '2.4rem', // 24px -> 2.4rem
                tablet: '3.2rem', // 32px -> 3.2rem
                laptop: '5rem', // 40px -> 4rem
                desktop: '5.6rem', // 48px -> 4.8rem
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
                  mobile: '1.4rem', // 14px -> 1.4rem
                  tablet: '1.6rem', // 16px -> 1.6rem
                  laptop: '1.8rem', // 18px -> 1.8rem
                  desktop: '2rem', // 20px -> 2rem
                },
                color: 'text.secondary',
              }}
            >
              Soy desarrollador frontend, apasionado por el mundo IT
            </Typography>
          </Box>

          {/* Botones */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { mobile: 'column', tablet: 'row' },
              gap: '1.2rem', // 12px -> 1.2rem
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

        {/* Imagen */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <Image
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1740767710/Group_12_2_yeu7hg.png"
            alt="Imagen"
            width={35 * 10} // 350px -> 35rem
            height={35 * 10} // 350px -> 35rem
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
