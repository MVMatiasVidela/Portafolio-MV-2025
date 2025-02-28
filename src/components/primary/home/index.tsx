import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Contact from './contact/Contact';
import ProyectsHome from './proyects/ProyectsHome';
import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import { Box } from '@mui/material';

const Index = () => {
  return (
    <Box sx={{position:'relative'}}>
      {/* <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex:-50,
        }}
      >
        <Desktop style={{}} />
      </Box> */}
      <Hero></Hero>
      <About></About>
      <ProyectsHome></ProyectsHome>
      <Contact></Contact>
     
    </Box>
  );
};

export default Index;
