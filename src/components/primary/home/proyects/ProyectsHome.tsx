'use client';
import { Box, Button, CardMedia, Grid, Grid2, Link, Paper, Typography } from '@mui/material';
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
  gap: '16px',
  padding: '30px',
  backgroundColor: 'transparent',
  borderRadius: '10px',
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

const circleComponents = [CircleDentAll, CircleIMania , CirclePampa, CircleServismart];

export default function ProyectsHome() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        paddingX: { mobile: '20px', tablet: '50px', laptop: '100px' },
        paddingBottom: { mobile: '100px', laptop: '200px' },
        position: 'relative',
      }}
    >
      {/* Círculos decorativos */}
      <Box
        sx={{
          position: 'absolute',
          top: '100px',
          left: '50px',
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
          fontSize: { mobile: '28px', tablet: '36px', desktop: '48px' },
        }}
      >
        Proyectos destacados
      </Typography>

      {/* Grid de proyectos */}
      <Grid2 container spacing={3} sx={{ width: '100%', maxWidth: '1400px' }}>
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

                {/* Icono del proyecto */}
                {/* <CardMedia
                  component="img"
                  image={project.icon}
                  alt="Icono"
                  sx={{ width: '80px' }}
                /> */}

               <Box>

                <Typography
                  variant="h2"
                  sx={{
                   
                    fontSize: { mobile: '14px', tablet: '16px' },
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    
                    fontSize: { mobile: '14px', tablet: '16px' },
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
                  sx={{ borderRadius: '5px' }}
                />
              </Item>
            </Grid2>
          );
        })}
      </Grid2>

      {/* Botón de Ver Todos */}
      <Link
        sx={{ marginTop: '32px', fontSize: { mobile: '14px', tablet: '16px' } }}
      >
        Ver todos los proyectos
      </Link>
    </Box>
  );
}
