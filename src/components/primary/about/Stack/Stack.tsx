'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Grid2, Typography, useTheme } from '@mui/material';
import CSS from '@/assets/svg/CSS.svg';
import TS from '@/assets/svg/TS.svg';
import JS from '@/assets/svg/JS.svg';
import HTML from '@/assets/svg/HTML.svg';
import REACT from '@/assets/svg/REACT.svg';
import TAIL from '@/assets/svg/TAIL.svg';
import NEXT from '@/assets/svg/NEXT.svg';
import EX from '@/assets/svg/EX.svg';
import NODE from '@/assets/svg/NODE.svg';
import DB from '@/assets/svg/DB.svg';
import SQL from '@/assets/svg/SQL.svg';
import ANGULAR from '@/assets/svg/ANGULAR.svg';
import TRELLO from '@/assets/svg/TRELLO.svg';
import FIGMA from '@/assets/svg/FIGMA.svg';
import VERCEL from '@/assets/svg/VERCEL.svg';
import LAB from '@/assets/svg/LAB.svg';
import HUB from '@/assets/svg/HUB.svg';
import GIT from '@/assets/svg/GIT.svg';
import CLOUD from '@/assets/svg/CLOUD.svg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '1.5rem', // Usando rem en lugar de px
  ...theme.typography.body2,
  textAlign: 'center',
  ...theme.applyStyles('dark', {
    background: 'rgba(3, 7, 18, 0.8)',
    border: '1px solid #282F3C',
    borderRadius: '10px',
    padding: '1.5rem',
  }),
}));

const iconsTech = [
  HTML,
  CSS,
  TS,
  JS,
  REACT,
  ANGULAR,
  TAIL,
  NEXT,
  EX,
  NODE,
  DB,
  SQL,
];
const icons = [TRELLO, VERCEL, LAB, GIT, FIGMA, CLOUD, HUB];

export default function Stack() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        paddingX: '6.25rem', // 100px
        paddingTop: '2.25rem', // 36px
        paddingBottom: '6.25rem', // 100px
        width: '100%',
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: { mobile: '1.75rem', tablet: '2.25rem', laptop: '3rem' },
          }}
        >
          Habilidades y tecnologías
        </Typography>
      </Box>

      <Box >
        <Grid container spacing={2} columns={36}>
          <Grid size={{ laptop: 6, desktop: 8 }}>
            <Item>
              <Box>
                <Typography variant="h6" sx={{ fontSize: '1.125rem' }}>
                  Tecnologías
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '1rem',
                  marginTop: '1rem',
                }}
              >
                {iconsTech.map((Icon, index) => (
                  <Icon
                    key={index}
                    style={{ width: '2.5rem', height: '2.5rem' }} // Usamos rem en lugar de px
                  />
                ))}
              </Box>
            </Item>
          </Grid>

          <Grid size={{ laptop: 4, desktop: 8 }}>
            <Item>
              <Typography variant="h6" sx={{ fontSize: '1.125rem' }}>
                Herramientas
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '1rem',
                  marginTop: '1rem',
                }}
              >
                {icons.map((Icon, index) => (
                  <Icon
                    key={index}
                    style={{ width: '2.5rem', height: '2.5rem' }} // Usamos rem en lugar de px
                  />
                ))}
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
