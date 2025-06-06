import { Typography, Box } from '@mui/material'
import React from 'react'
import PlayButton from './PlayButton'

interface CardProps {
    image     : string;
    name      : string;
    artistName?: string;
}

const Card = ({image, name, artistName} : CardProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover .play-btn': { opacity: 1 },
        boxShadow: 2,
        bgcolor: '#181818',
        p: 2,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <img src={image} alt={name} style={{ width: '100%', borderRadius: 8 }} />
        <Box
          className="play-btn"
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            opacity: 0,
            transition: 'opacity 0.3s',
            zIndex: 2,
          }}
        >
          <PlayButton />
        </Box>
      </Box>
      <Typography mt={1} fontWeight={700} noWrap>{name}</Typography>
      {artistName && (
        <Typography variant="body2" color="text.secondary" noWrap>
          {artistName}
        </Typography>
      )}
    </Box>
  )
}

export default Card