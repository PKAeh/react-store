import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import ImageCover from './ImageCover'
import ProductImageItem from './ProductImageItem'
import Box from '@mui/material/Box'

const ProductImage = ({ thumbnail, images }) => {
  const [thumbnailImage, setThumbnailImage] = useState(thumbnail)

  const onMouseEnter = (path) => () => {
    setThumbnailImage(path)
  }

  const onMouseLeave = () => {
    setThumbnailImage(thumbnail)
  }

  return (
    <Grid container>
      <Grid sx={{ width: '100%', p: 0 }}>
        <ImageCover width={'100%'} height={'200px'} image={thumbnailImage} />
      </Grid>
      <Grid container sx={{ m: 0, gap: 0.5 }}>
        {images.map((path) => {
          return (
            <Box
              key={path}
              onMouseEnter={onMouseEnter(path)}
              onMouseLeave={onMouseLeave}
            >
              <ProductImageItem path={path} />
            </Box>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default ProductImage
