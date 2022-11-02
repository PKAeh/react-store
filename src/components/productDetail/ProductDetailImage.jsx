import React, { useState } from 'react'
import ProductImageItem from '../product/ProductImageItem'

import Grid from '@mui/material/Unstable_Grid2'
import ImageCover from '../product/ImageCover'
import Box from '@mui/material/Box'

const ProductDetailImage = ({ product: { thumbnail, images } }) => {
  const [thumbnailImage, setThumbnailImage] = useState(thumbnail)

  const onMouseEnter = (path) => () => {
    setThumbnailImage(path)
  }

  return (
    <Grid container>
      <Grid sx={{ width: '100%' }}>
        <ImageCover width={'330px'} height={'330px'} image={thumbnailImage} />
      </Grid>
      <Grid container sx={{ m: 0, gap: 1, mt: 2 }}>
        {images.map((path) => {
          return (
            <Box key={path} onMouseEnter={onMouseEnter(path)}>
              <ProductImageItem
                path={path}
                width={'50px'}
                height={'50px'}
                activePath={thumbnailImage}
              />
            </Box>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default ProductDetailImage
