'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        paddingY: '36px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          zIndex:20,
          position: 'relative',
        }}
      >
        <Typography>
          
        </Typography>
        <div className="flex justify-center items-center gap-20">
         
          <div className="flex flex-col w-[55%] gap-8">
            <p className="text-[20px] text-justify text-[#89ABD1] font-medium">
              En{' '}
              <span className="bg-gradient-to-r from-Fblue-100 to-Fblue-200 bg-clip-text text-transparent font-bold">
                Fuaxion Developers
              </span>
              , convertimos la tecnología en un arte, fusionando creatividad e
              innovación para transformar tus ideas en soluciones digitales
              extraordinarias. Desde el desarrollo de software de alto impacto
              hasta experiencias web personalizadas, rompemos barreras y
              redefinimos lo posible en el mundo digital.
            </p>
          
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default About;
