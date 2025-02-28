'use client';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, CardMedia, Grid2, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  padding: '20px',
  color: theme.palette.text.primary,
  backgroundColor: '#111827',
  borderRadius: '10px',
  border: '1px solid',
  borderColor: '#282F3C',
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
      }}
    >
      <Typography variant="h2">Proyectos destacados</Typography>
      <Box>
        <Grid2 container spacing={2} gridColumn={2} sx={{ paddingX: '48px' }}>
          <Grid2 size={4}>
            <Item sx={{}}>
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
                // sx={{ width: '400px' }}
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
            <Item
              sx={{
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1739825083/Group_48095596_agboa9.png"
                alt="Descripción"
                sx={{ width: '100px' }}
              />
              <Typography variant="h6">
                {' '}
                Plataforma de gestion de citas para clinicas dentales
              </Typography>
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738783628/Captura_de_pantalla_2025-02-05_202635_sw3epn.png"
                alt="Descripción"
                sx={{ width: '400px' }}
              />
            </Item>
          </Grid2>
          <Grid2 size={4}>
            <Item
              sx={{
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1739825083/Group_48095596_agboa9.png"
                alt="Descripción"
                sx={{ width: '100px' }}
              />
              <Typography variant="h6">
                {' '}
                Plataforma de gestion de citas para clinicas dentales
              </Typography>
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dseutp7hi/image/upload/v1738783628/Captura_de_pantalla_2025-02-05_202635_sw3epn.png"
                alt="Descripción"
                sx={{ width: '400px' }}
              />
            </Item>
          </Grid2>
        </Grid2>
      </Box>
      <Button variant="contained">Ver todos los proyectos</Button>
    </Box>
  );
}
