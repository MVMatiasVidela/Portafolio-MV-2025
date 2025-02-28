'use client';
import { Box, Button, CardMedia, Grid, Grid2, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import Circles2 from '@/components/secondary/circles/circles2/Circles2';

// Estilo del Card
const Item = styled(Paper)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '20px',
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
    borderColor: '#4A90E2',
    '&::before': {
      backdropFilter: 'blur(20px)',
    },
  },
}));

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
          left: '50%',
          transform: 'translateX(-50%)',
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
            title: 'Plataforma de gestión de citas para clínicas dentales',
            icon: 'https://res.cloudinary.com/dseutp7hi/image/upload/v1739825083/Group_48095596_agboa9.png',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1738783628/Captura_de_pantalla_2025-02-05_202635_sw3epn.png',
          },
          {
            title: 'Plataforma E-Commerce para venta de productos Apple',
            icon: 'https://res.cloudinary.com/dseutp7hi/image/upload/v1731161078/Leonardo_Phoenix_A_dreamy_bokeh_effect_photography_featuring_a_2-removebg-preview_wmjweq.png',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1738785597/Captura_de_pantalla_2025-02-05_205931_w7cdxv.png',
          },
          {
            title: 'E-Commerce para venta de sellos decorativos',
            icon: 'https://res.cloudinary.com/dseutp7hi/image/upload/v1739825253/Frame_1_wpeesv.png',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1738778468/Landing_page_2_a1pgtx.png',
          },
          {
            title: 'Plataforma de gestión de licitaciones',
            icon: 'https://res.cloudinary.com/dseutp7hi/image/upload/v1738778706/Logo_1_t1xfav.png',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1738777869/Header_rpt4fl.png',
          },
          {
            title: 'Plataforma de gestión de licitaciones',
            icon: 'https://res.cloudinary.com/dseutp7hi/image/upload/v1738778706/Logo_1_t1xfav.png',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1738777869/Header_rpt4fl.png',
          },
          {
            title: 'Plataforma de gestión de licitaciones',
            icon: 'https://res.cloudinary.com/dseutp7hi/image/upload/v1738778706/Logo_1_t1xfav.png',
            image:
              'https://res.cloudinary.com/dseutp7hi/image/upload/v1738777869/Header_rpt4fl.png',
          },
        ].map((project, index) => (
          <Grid2 size={6} key={index}>
            <Item>
              {/* Circulo decorativo en cada card */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '80%',
                  left: '80%',
                  zIndex: -10,
                }}
              >
                <Circles2 />
              </Box>

              {/* Icono del proyecto */}
              <CardMedia
                component="img"
                image={project.icon}
                alt="Icono"
                sx={{ width: '80px' }}
              />

              {/* Nombre del proyecto */}
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  fontSize: { mobile: '14px', tablet: '16px' },
                }}
              >
                {project.title}
              </Typography>

              {/* Imagen del proyecto */}
              <CardMedia
                component="img"
                image={project.image}
                alt="Proyecto"
                sx={{ borderRadius: '5px' }}
              />
            </Item>
          </Grid2>
        ))}
      </Grid2>

      {/* Botón de Ver Todos */}
      <Button
        variant="contained"
        sx={{ marginTop: '32px', fontSize: { mobile: '14px', tablet: '16px' } }}
      >
        Ver todos los proyectos
      </Button>
    </Box>
  );
}
