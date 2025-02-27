import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Contact from './contact/Contact';
import ProyectsHome from './proyects/ProyectsHome';

const Index = () => {
  return (
    <div>
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
    </div>
  );
};

export default Index;
