'use client';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import {
  Box,
  Button,
  CardMedia,
  Grid,
  Grid2,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Circle1 from '@/components/secondary/circles/circles1/Circle1';
import CirclePampa from '@/components/secondary/circles/CirclesProyects/CirclesPampa/CirclePampa';
import Foot from '@/assets/svg/Footer.svg';
import CircleDentAll from '@/components/secondary/circles/CirclesProyects/CirclesDentall/CircleDentAll';
import CircleIMania from '@/components/secondary/circles/CirclesProyects/CirclesIMania/CirclesIMania';
import CircleServismart from '@/components/secondary/circles/CirclesProyects/CirclesServismart/CircleServismart';
import Image from 'next/image';

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

export default function Sumary() {
  return (
    //   {/* Grid de proyectos */}
    //   <Grid2 container spacing={3} sx={{ width: '100%', maxWidth: '1400px' }}>
    //     {[
    //       {
    //         title: 'Proyectos',
    //         description:
    //           'Plataforma de gestión de citas para clínicas dentales',
    //         icon: ,
    //         image:
    //           'https://res.cloudinary.com/dseutp7hi/image/upload/v1740838721/Group_14_nzqqpi.png',
    //       },
    //       {
    //         title: 'Experiencia',
    //         description: 'E-Commerce para venta de sellos decorativos',
    //         icon: <CodeOutlinedIcon fontSize="medium" />,
    //         image:
    //           'https://res.cloudinary.com/dseutp7hi/image/upload/v1740825098/pampa_yxouqk.png',
    //       },
    //       {
    //         title: 'Tecnologías',
    //         description: 'Plataforma E-Commerce para venta de productos Apple',
    //         icon: (
    //           <LanguageOutlinedIcon

    //             fontSize="medium"
    //           />
    //         ),
    //         image:
    //           'https://res.cloudinary.com/dseutp7hi/image/upload/v1740824793/imania_nhi1us.png',
    //       },
    //       {
    //         title: 'Servismart',
    //         description: 'Plataforma de gestión de licitaciones',
    //         icon: <CodeOutlinedIcon fontSize="medium" />,
    //         image:
    //           'https://res.cloudinary.com/dseutp7hi/image/upload/v1740824794/Header_rpt4fl_hreq2e.png',
    //       },
    //     ].map((project, index) => {
    //       const CircleComponent =
    //         circleComponents[index % circleComponents.length];
    //       return (
    //         <Grid2 size={6}   key={index}>
    //           <Item>
    //             <Box
    //               sx={{
    //                 display: 'flex',
    //                 alignItems: 'center',
    //                 alignContent: 'center',
    //                 gap: '8px', // Espacio entre el icono y el título

    //               }}
    //             >
    //               <Box sx={{ display: 'flex',   color:'#0466c8'  }}>{project.icon}</Box>
    //               <Typography
    //                 variant="h2"
    //                 sx={{
    //                   fontSize: { mobile: '14px', tablet: '16px' },
    //                 }}
    //               >
    //                 {project.title}
    //               </Typography>
    //             </Box>

    //             <CardMedia
    //               component="img"
    //               image={project.image}
    //               alt="Proyecto"
    //               sx={{ borderRadius: '5px' }}
    //             />
    //           </Item>
    //         </Grid2>
    //       );
    //     })}
    //   </Grid2>

    //   <Link
    //     sx={{ marginTop: '32px', fontSize: { mobile: '14px', tablet: '16px' } }}
    //   >
    //     Ver todos los proyectos
    //   </Link>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        paddingY: { mobile: '20px', tablet: '50px', laptop: '100px' },
        paddingX: { mobile: '20px', tablet: '50px', laptop: '100px' },
        paddingBottom: { mobile: '100px', laptop: '200px' },
        position: 'relative',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          fontSize: { mobile: '28px', tablet: '36px', desktop: '48px' },
        }}
      >
        Descubre mi trayectoria como desarrollador.
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <Item>
              <Box sx={{ display: 'flex', gap: '12px' }}>
                <WorkOutlineIcon fontSize="medium" />
                <Typography variant="h5">Experiencia</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dseutp7hi/image/upload/v1734034955/Captura_de_pantalla_2024-12-12_212032-removebg-preview_fx2jct.png"
                  alt=""
                  width={150}
                  height={50}
                ></Image>
                <Typography variant="h6">
                  Desarrollador frontend con Angular
                </Typography>
                <Typography variant="h5"> 3 Meses</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dseutp7hi/image/upload/v1740857243/Group_15_nac5mg.png"
                  alt=""
                  width={150}
                  height={50}
                ></Image>
                <Typography variant="h6">
                  Desarrollador frontend 
                </Typography>
                <Typography variant="h5">Actual</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729634150/Henri_tgxhxc.png"
                  alt=""
                  width={150}
                  height={50}
                ></Image>
                <Typography variant="h6">
                  Teaching Assistain en bootcamp Soy Henry
                </Typography>
                <Typography variant="h5">3meses</Typography>
              </Box>
            </Item>
          </Grid2>
          <Grid2 size={4}>
            <Item>
              <Box sx={{ display: 'flex', gap: '12px' }}>
                <DvrOutlinedIcon fontSize="medium" />
                <Typography variant="h5">Proyectos</Typography>
              </Box>
              <Box>
                <Image
                  src="https://res.cloudinary.com/dseutp7hi/image/upload/v1740838721/Group_14_nzqqpi.png"
                  alt=""
                  width={300}
                  height={200}
                ></Image>
              </Box>
            </Item>
          </Grid2>
          <Grid2 size={4}>
            <Item>Herramientas</Item>
          </Grid2>
          <Grid2 size={8}>
            <Item>Tecnologías</Item>
          </Grid2>
          <Grid2 size={8}>
            <Item>Habilidades blandas</Item>
          </Grid2>
          <Grid2 size={4}>
            <Item>Cursos</Item>
          </Grid2>
        </Grid2>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '100px',
          left: '0px',
          zIndex: -1,
        }}
      >
        <Circle1 />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '100px',
          right: '0px',
          zIndex: -1,
        }}
      >
        <Circle1 />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: -50,
          top: '-50px',
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
