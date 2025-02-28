import { Box, Button, Link, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '200px',
        gap:'24px'
      }}
    >
      <Typography variant="h2">¿Te interesa mi perfil? </Typography>
      <Box sx={{ display: 'flex', gap: '12px' }}>
        <Link href="" underline="none">
          <Button variant="contained">Contáctame</Button>
        </Link>
        <Link href="" underline="none">
          <Button variant="contained">Descargar CV</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;
