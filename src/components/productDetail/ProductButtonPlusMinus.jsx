import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'

const ProductButtonPlusMinus = ({ icon, stock }) => {
  const [bgColor, setBgColor] = useState('rgb(239, 240, 245)')

  const onMouseEnter = () => {
    setBgColor('rgba(0, 0, 0, 0.3)')
  }

  const onMouseLeave = () => {
    setBgColor('rgb(239, 240, 245)')
  }

  return (
    <Grid
      container
      sx={{
        width: '32px',
        height: '32px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
    </Grid>
  )
}

export default ProductButtonPlusMinus
