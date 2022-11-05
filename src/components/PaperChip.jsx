import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const PaperChip = ({ image, title }) => {
  const [elevation, setElevation] = useState(1)

  const onMouseEnter = () => {
    setElevation(5)
  }

  const onMouseLeave = () => {
    setElevation(1)
  }

  return (
    <Paper
      elevation={elevation}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        px: 2,
        py: 1,
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: 1,
        cursor: 'pointer',
      }}
    >
      <img src={image} alt="logo" width={30} />
      <Typography sx={{ fontWeight: 'bold', pt: 0.5 }} variant="body2">
        {title}
      </Typography>
    </Paper>
  )
}

export default PaperChip
