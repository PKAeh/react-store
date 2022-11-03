import React, { useState } from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

const ProductActionButton = ({ bgColor, text, hoverBgColor }) => {
  const [activeBgColor, setActiveBgColor] = useState(bgColor)

  const onMouseEnter = () => {
    setActiveBgColor(hoverBgColor)
  }
  const onMouseLeave = () => {
    setActiveBgColor(bgColor)
  }

  return (
    <Grid
      container
      sx={{
        bgcolor: activeBgColor,
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        p: 1.5,
        cursor: 'pointer',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Typography sx={{ width: '100%' }}>{text}</Typography>
    </Grid>
  )
}

export default ProductActionButton
