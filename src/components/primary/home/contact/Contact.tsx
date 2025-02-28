import { Box, Button, Link, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        background: 'transparent',
        paddingBottom: '200px',
        paddingX: '100px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '72px',
          gap: '48px',
          border: '1px solid',
          borderRadius: '10px',
          background: '#050C1F',
          borderColor: '#282F3C',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2">¿Te interesa mi perfil? </Typography>
          <Typography variant="h6">
            ¡Hablemos y exploremos cómo puedo aportar valor a tu equipo!
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '24px' }}>
          <Link href="" underline="none">
            <Button variant="contained">Contáctame</Button>
          </Link>
          <Link href="" underline="none">
            <Button variant="contained">Descargar CV</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
