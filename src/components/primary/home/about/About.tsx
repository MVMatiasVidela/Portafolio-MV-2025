'use client';
import { Box, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingX: '48px',
        paddingBottom: '200px',
        gap: '36px',
      }}
    >
      <Box>
        <CardMedia
          component="img"
          image="https://res.cloudinary.com/dseutp7hi/image/upload/v1740596459/Group_9_3_xcqdrl.png"
          alt="Descripción"
          sx={{ width: '400px' }}
        />
      </Box>
      <Box>
        <Typography variant="h2">Programación</Typography>
        <Typography variant="h6">
          Programación Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur nihil quisquam eligendi voluptas et laborum sequi quam nemo
          assumenda veniam ad voluptatibus ratione maiores, sint vero incidunt
          enim. Omnis, neque!
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
