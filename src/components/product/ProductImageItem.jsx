import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import ImageCover from './ImageCover'

const ProductImageItem = ({ path, width, height, activePath }) => {
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
    if (!activePath) {
      setBorder((state) => {
        return { ...state, border: '2px solid transparent' }
      })
    }
  }

  useEffect(() => {
    const isActive = path === activePath

    if (isActive) {
      setBorder((state) => {
        return { ...state, border: '2px solid rgba(0,0,0,0.5)' }
      })
    } else {
      setBorder((state) => {
        return { ...state, border: '2px solid transparent' }
      })
    }
  }, [activePath, path])

  return (
    <Grid onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} sx={border}>
      <ImageCover width={width} height={height} image={path} />
    </Grid>
  )
}

export default ProductImageItem
