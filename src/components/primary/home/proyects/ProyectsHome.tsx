'use client';
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Grid2 } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ProyectsHome() {
  return (
    <Box sx={{ flexGrow: 3 }}>
      <Grid2 container spacing={2}>
    
          <Grid2  >
            <Item>hola</Item>
          </Grid2>
          <Grid2  >
            <Item>hola</Item>
          </Grid2>
          <Grid2  >
            <Item>hola</Item>
          </Grid2>
          <Grid2  >
            <Item>hola</Item>
          </Grid2>
       
      </Grid2>
    </Box>
  );
}
