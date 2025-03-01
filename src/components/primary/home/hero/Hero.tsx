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

  return (
    <Box
      sx={{
        backgroundImage: `url(https://res.cloudinary.com/dseutp7hi/image/upload/v1740767851/Group_48095605_2_ccgeen.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingX: {
          mobile: '20px',
          tablet: '50px',
          laptop: '80px',
          desktop: '100px',
        },
        paddingY: { mobile: '100px', tablet: '80px', laptop: '100px' },
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
          maxWidth: '1200px',
          gap: { mobile: '40px', laptop: '80px' },
        }}
      >
        {/* Sección de texto */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { mobile: 'center', laptop: 'flex-start' },
            textAlign: { mobile: 'center', laptop: 'left' },
            maxWidth: '600px',
            gap: '16px',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                mobile: '24px',
                tablet: '32px',
                laptop: '40px',
                desktop: '48px',
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
                  mobile: '14px',
                  tablet: '16px',
                  laptop: '18px',
                  desktop: '20px',
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
              gap: '12px',
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
            width={350}
            height={350}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
