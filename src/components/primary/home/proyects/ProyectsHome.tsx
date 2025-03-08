'use client';
import {
  Box,
  Button,
  CardMedia,
  Grid,
  Grid2,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import CirclePampa from '@/components/secondary/circles/CirclesProyects/CirclesPampa/CirclePampa';
import Circles2 from '@/components/secondary/circles/CirclesProyects/CirclesDentall/CircleDentAll';
import CircleDentAll from '@/components/secondary/circles/CirclesProyects/CirclesDentall/CircleDentAll';
import CircleIMania from '@/components/secondary/circles/CirclesProyects/CirclesIMania/CirclesIMania';
import CircleServismart from '@/components/secondary/circles/CirclesProyects/CirclesServismart/CircleServismart';

// Estilo del Card
const Item = styled(Paper)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem', // 16px -> 1.6rem
  padding: '3rem', // 30px -> 3rem
  backgroundColor: 'transparent',
  borderRadius: '1rem', // 10px -> 1rem
  border: '1px solid #282F3C',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backdropFilter: 'blur(10px)',
    zIndex: -1,
    transition: 'backdrop-filter 0.3s ease-in-out',
  },
  '&:hover': {
    '&::before': {
      backdropFilter: 'blur(20px)',
    },
  },
}));

const circleComponents = [
  CircleDentAll,
  CircleIMania,
  CirclePampa,
  CircleServismart,
];

export default function ProyectsHome() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.4rem', // 24px -> 2.4rem
        paddingX: { mobile: '2rem', tablet: '5rem', laptop: '10rem' }, // 20px -> 2rem, 50px -> 5rem, 100px -> 10rem
        paddingBottom: { mobile: '10rem', laptop: '20rem' }, // 100px -> 10rem, 200px -> 20rem
        position: 'relative',
      }}
    >
      {/* Círculos decorativos */}
      <Box
        sx={{
          position: 'absolute',
          top: '10rem', // 100px -> 10rem
          left: '5rem', // 50px -> 5rem
          zIndex: -1,
        }}
      >
        <Circle1 />
      </Box>

      {/* Título */}
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          fontSize: { mobile: '2.8rem', tablet: '3.6rem', desktop: '4.8rem' }, // 28px -> 2.8rem, 36px -> 3.6rem, 48px -> 4.8rem
        }}
      >
        Proyectos destacados
      </Typography>

      {/* Grid de proyectos */}
      <Grid2 container spacing={3} sx={{ width: '100%', maxWidth: '140rem' }}>
        {' '}
        {/* 1400px -> 140rem */}
        {[
          {
            title: 'DentAll',
            description:
              'Plataforma de gestión de citas para clínicas dentales',
            icon: '',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1740824794/dental_fbfflq.png',
          },
          {
            title: 'IMania',
            description: 'Plataforma E-Commerce para venta de productos Apple',
            icon: '',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1740824793/imania_nhi1us.png',
          },
          {
            title: 'Pampa',
            description: 'E-Commerce para venta de sellos decorativos',
            icon: '',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1740825098/pampa_yxouqk.png',
          },
          {
            title: 'Servismart',
            description: 'Plataforma de gestión de licitaciones',
            icon: '',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1740824794/Header_rpt4fl_hreq2e.png',
          },
        ].map((project, index) => {
          const CircleComponent =
            circleComponents[index % circleComponents.length];
          return (
            <Grid2 size={6} key={index}>
              <Item>
                {/* Círculo decorativo independiente en cada tarjeta */}
                {/* <Box
                  sx={{
                    position: 'absolute',
                    top: '80%',
                    left: '80%',
                    zIndex: -10,
                  }}
                >
                  <CircleComponent />
                </Box> */}

                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { mobile: '1.4rem', tablet: '1.6rem' }, // 14px -> 1.4rem, 16px -> 1.6rem
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { mobile: '1.4rem', tablet: '1.6rem' }, // 14px -> 1.4rem, 16px -> 1.6rem
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                {/* Imagen del proyecto */}
                <CardMedia
                  component="img"
                  image={project.image}
                  alt="Proyecto"
                  sx={{ borderRadius: '0.5rem' }} // 5px -> 0.5rem
                />
              </Item>
            </Grid2>
          );
        })}
      </Grid2>

      {/* Botón de Ver Todos */}
      <Link
        sx={{
          marginTop: '3.2rem',
          fontSize: { mobile: '1.4rem', tablet: '1.6rem' },
        }} // 14px -> 1.4rem, 16px -> 1.6rem
      >
        Ver todos los proyectos
      </Link>
    </Box>
  );
}
