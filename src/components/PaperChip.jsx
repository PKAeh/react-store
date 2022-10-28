import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const PaperChip = ({ image, title }) => {
  return (
    <Paper
      sx={{
        px: 2,
        py: 1,
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <img src={image} alt="logo" width={25} />
      <Typography variant="body2">{title}</Typography>
    </Paper>
  )
}

export default PaperChip
