'use client';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, CardMedia, Grid2, Typography } from '@mui/material';
import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import Circles2 from '@/components/secondary/circles/circles2/Circles2';

const Item = styled(Paper)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '20px',
  backgroundColor: 'transparent',
  borderRadius: '10px',
  border: '1px solid',
  borderColor: '#282F3C',
  overflow: 'hidden', // 🎯 Para que el pseudo-elemento no se desborde
  transition: 'all 0.3s ease-in-out', // Suaviza la transición en hover
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backdropFilter: 'blur(10px)',
    zIndex: -1,
    transition: 'backdrop-filter 0.3s ease-in-out', // Transición suave en hover
  },
  '&:hover': {
    borderColor: '#4A90E2', // Cambia el color del borde al hacer hover
    '&::before': {
      backdropFilter: 'blur(20px)', // Aumenta el desenfoque en hover
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
        paddingBottom: '200px',
        position: 'relative',
      }}
    >
      <Box
        sx={{ position: 'absolute', top: '100px', left: '500px', zIndex: -1 }}
      >
        <Circle1></Circle1>
      </Box>
      <Typography variant="h2">Proyectos destacados</Typography>
      <Box>
        <Grid2 container spacing={2} gridColumn={2} sx={{ paddingX: '100px' }}>
          <Grid2 size={4}>
            <Item>
              <Box
                sx={{
                  position: 'absolute',
                  top: '80%',
                  left: '80%',
                  zIndex: -10,
                }}
              >
                <Circles2></Circles2>
              </Box>

              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1739825083/Group_48095596_agboa9.png"
                alt="Descripción"
                sx={{ width: '80px' }}
              />

              <Typography variant="h6">
                {' '}
                Plataforma de gestion de citas para clinicas dentales
              </Typography>
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738783628/Captura_de_pantalla_2025-02-05_202635_sw3epn.png"
                alt="Descripción"
                sx={{ borderRadius: '5px' }}
              />
            </Item>
          </Grid2>
          <Grid2 size={4}>
            <Item sx={{}}>
              {' '}
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1731161078/Leonardo_Phoenix_A_dreamy_bokeh_effect_photography_featuring_a_2-removebg-preview_wmjweq.png"
                alt="Descripción"
                sx={{ width: '80px' }}
              />
              <Typography variant="h6">
                {' '}
                Plataforma E-Commerce para venta exclusiva de productos Apple
              </Typography>
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738785597/Captura_de_pantalla_2025-02-05_205931_w7cdxv.png"
                alt="Descripción"
                // sx={{ width: '400px' }}
              />
            </Item>
          </Grid2>
          <Grid2 size={4}>
            <Item sx={{}}>
              {' '}
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1739825253/Frame_1_wpeesv.png"
                alt="Descripción"
                sx={{ width: '80px' }}
              />
              <Typography variant="h6">
                {' '}
                Plataforma E-Commerce para venta exclusiva de sellos decorativos
              </Typography>
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738778468/Landing_page_2_a1pgtx.png"
                alt="Descripción"
                sx={{ height: '170px' }}
              />
            </Item>
          </Grid2>
          <Grid2 size={4}>
            <Item sx={{}}>
              {' '}
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738778706/Logo_1_t1xfav.png"
                alt="Descripción"
                sx={{ width: '150px' }}
              />
              <Typography variant="h6">
                {' '}
                Plataforma de gestion de licitaciones para empresas
              </Typography>
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738777869/Header_rpt4fl.png"
                alt="Descripción"
                // sx={{ width: '400px' }}
              />
            </Item>
          </Grid2>
          <Grid2 size={4}>
            <Item sx={{}}>
              {' '}
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738778706/Logo_1_t1xfav.png"
                alt="Descripción"
                sx={{ width: '150px' }}
              />
              <Typography variant="h6">
                {' '}
                Plataforma de gestion de licitaciones para empresas
              </Typography>
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738777869/Header_rpt4fl.png"
                alt="Descripción"
                // sx={{ width: '400px' }}
              />
            </Item>
          </Grid2>
          <Grid2 size={4}>
            <Item sx={{}}>
              {' '}
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738778706/Logo_1_t1xfav.png"
                alt="Descripción"
                sx={{ width: '150px' }}
              />
              <Typography variant="h6">
                {' '}
                Plataforma de gestion de licitaciones para empresas
              </Typography>
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738777869/Header_rpt4fl.png"
                alt="Descripción"
                // sx={{ width: '400px' }}
              />
            </Item>
          </Grid2>
        </Grid2>
      </Box>
      <Button variant="contained">Ver todos los proyectos</Button>
    </Box>
  );
}
