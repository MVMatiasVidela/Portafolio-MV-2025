'use client';
import { Box, CardMedia, Grid2, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import CirclePampa from '@/components/secondary/circles/CirclesProyects/CirclesPampa/CirclePampa';
import CircleDentAll from '@/components/secondary/circles/CirclesProyects/CirclesDentall/CircleDentAll';
import CircleIMania from '@/components/secondary/circles/CirclesProyects/CirclesIMania/CirclesIMania';
import CircleServismart from '@/components/secondary/circles/CirclesProyects/CirclesServismart/CircleServismart';
import Link from 'next/link';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const Item = styled(Paper)(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  padding: '3rem',
  backgroundColor: 'transparent',
  borderRadius: '1rem',
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
        gap: '2.4rem',
        paddingX: {
          mobile: '2rem',
          tablet: '5rem',
          laptop: '15rem',
          desktop: '15rem',
        },
        paddingBottom: { mobile: '10rem', laptop: '10rem' },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10rem',
          left: '5rem',
          zIndex: -1,
        }}
      >
        <Circle1 />
      </Box>

      <Typography variant="h2">Proyectos destacados</Typography>

      <Grid2 container spacing={3} sx={{ width: '100%', maxWidth: '140rem' }}>
        {' '}
        {[
          {
            title: 'DentAll',
            description:
              'Plataforma de gestión de citas para clínicas dentales',
            icon: '',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1741550567/dental_1_jepjqp.png',
          },
          {
            title: 'IMania',
            description: 'Plataforma E-Commerce para venta de productos Apple',
            icon: '',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1741550663/imania_kk4jjy.png',
          },
          {
            title: 'Pampa',
            description: 'E-Commerce para venta de sellos decorativos',
            icon: '',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1741550610/pampa_kgbeuh.png',
          },
          {
            title: 'Servismart',
            description: 'Plataforma de gestión de licitaciones',
            icon: '',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1741550488/Header_rpt4fl_1_okb4tz.png',
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
                  <Typography variant="h5" sx={{}}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {project.description}
                  </Typography>
                </Box>

                <CardMedia
                  component="img"
                  image={project.image}
                  alt="Proyecto"
                  sx={{ borderRadius: '0.5rem' }}
                />
              </Item>
            </Grid2>
          );
        })}
      </Grid2>

      <Link href="/proyects" >
        <Typography variant="caption1" sx={{ color: 'text.secondary', display:'flex' , justifyContent:'center', alignItems:'center' }}>
          Ver todos los proyectos
        <KeyboardArrowRightRoundedIcon fontSize="large" />
        </Typography>
      </Link>
    </Box>
  );
}
