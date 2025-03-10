'use client';
import { Box, Typography } from '@mui/material';
import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import Foot from '@/assets/svg/Footer.svg';
import Image from 'next/image';

const experiences = [
  {
    imageUrl:
      'https://res.cloudinary.com/dseutp7hi/image/upload/v1734034955/Captura_de_pantalla_2024-12-12_212032-removebg-preview_fx2jct.png',
    description:
      'Desarrollador Frontend en prácticas, trabajando con Angular y Angular Material en la construcción de interfaces modernas y responsivas. Enfoque en el desarrollo de componentes reutilizables, optimización del rendimiento y mejora de la experiencia de usuario.',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dseutp7hi/image/upload/v1740857243/Group_15_nac5mg.png',
    description:
      'Desarrollador Frontend con experiencia en la creación de interfaces dinámicas y optimizadas, utilizando tecnologías como React, Next.js, Tailwind CSS, Material UI, Vite y otros frameworks modernos. Enfoque en el rendimiento, la accesibilidad y la experiencia de usuario, desarrollando aplicaciones escalables y de alto impacto.',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dseutp7hi/image/upload/v1729634150/Henri_tgxhxc.png',
    description:
      'Apoyo en la enseñanza y guía de estudiantes, facilitando el aprendizaje a través de asistencia en clases, resolución de dudas y refuerzo de conceptos. Colaboración en la preparación de materiales didácticos y seguimiento del progreso académico',
  },
];

export default function Experience() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        paddingX: {
          mobile: '5rem',
          tablet: '3.125rem',
          laptop: '15rem',
        },
        paddingY: {
          mobile: '5rem',
          tablet: '5.625rem',
          laptop: '10rem',
        },
        position: 'relative',
      }}
    >
      <Box>
        <Typography variant="h2">Experiencia</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', tablet: 'row' },
          gap: { mobile: '2rem', tablet: '4rem' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {experiences.map((exp, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
              gap: '1rem',
              maxWidth: '100%',
            }}
          >
            <Box>
              <Image
                src={exp.imageUrl}
                alt=""
                width={150}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    mobile: '0.875rem',
                    tablet: '1rem',
                    laptop: '1.6rem',
                  },
                  color: 'text.secondary',
                  textAlign: 'start',
                }}
              >
                {exp.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '5rem',
          left: '0',
          zIndex: -1,
        }}
      >
        <Circle1 />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '5rem',
          right: '0',
          zIndex: -1,
        }}
      >
        <Circle1 />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '5rem',
          right: '35rem',
          zIndex: -1,
        }}
      >
        <Circle1 />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: -50,
          top: '-3rem',
          left: 0,
          width: '100%',
          margin: 0,
          padding: 0,
        }}
      >
        <Foot style={{ width: '100%' }} />
      </Box>
    </Box>
  );
}
