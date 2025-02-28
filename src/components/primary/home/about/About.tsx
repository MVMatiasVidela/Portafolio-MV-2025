'use client';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingX: '100px',
        paddingY: '200px',
        gap: '36px',
      }}
    >
      <Box>
        <CardMedia
          component="img"
          image="https://res.cloudinary.com/dseutp7hi/image/upload/v1740763122/OBJECTS_1_ibknnc.png"
          alt="Descripción"
          sx={{ width: '450px' }}
        />
      </Box>
      <Box>
        <Typography variant="h2">Programación</Typography>
        <Typography variant="h6">
          En cada proyecto que emprendo, mi propósito es fusionar de manera
          equilibrada la estética, la funcionalidad y la eficiencia, para
          ofrecer soluciones que no solo cubran las necesidades del usuario,
          sino que también generen un valor tangible para el negocio. <br /> Mi
          enfoque es lograr un impacto positivo y duradero, asegurando que cada
          detalle esté orientado a potenciar tanto la experiencia del usuario
          como los resultados comerciales.
        </Typography>
        <Button variant="contained" sx={{background:''}}>
          <Image
            alt="Image"
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729352638/Dise%C3%B1o_sin_xzdfgt%C3%ADtulo_pczp1e.png"
            height={35}
            width={35}
          />
          Acerca de mí
          <ArrowOutwardIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
};

export default About;
