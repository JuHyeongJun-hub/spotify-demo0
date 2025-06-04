import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const EmptyPlaylist = () => (
  <Box
    sx={{
      background: '#232323',
      borderRadius: 3,
      p: 3,
      mt: 2,
      textAlign: 'center',
    }}
  >
    <Typography variant="h6" fontWeight="bold" mb={1}>
      Create your first playlist
    </Typography>
    <Typography variant="body2" mb={2}>
      It's easy, we'll help you
    </Typography>
    <Button
      variant="contained"
      sx={{
        borderRadius: 5,
        fontWeight: 'bold',
        background: '#fff',
        color: '#181818',
        '&:hover': { background: '#1db954', color: '#fff' },
      }}
    >
      Create playlist
    </Button>
  </Box>
);

export default EmptyPlaylist;