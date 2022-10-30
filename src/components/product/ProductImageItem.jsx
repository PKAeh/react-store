import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import ImageCover from './ImageCover'

const ProductImageItem = ({ path }) => {
  const [border, setBorder] = useState({
    p: 0,
    border: '2px solid transparent',
  })

  const onMouseEnter = () => {
    setBorder((state) => {
      return { ...state, border: '2px solid rgba(0,0,0,0.5)' }
    })
  }

  const onMouseLeave = () => {
    setBorder((state) => {
      return { ...state, border: '2px solid transparent' }
    })
  }

  return (
    <Grid onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} sx={border}>
      <ImageCover width={'35px'} height={'35px'} image={path} />
    </Grid>
  )
}

export default ProductImageItem
