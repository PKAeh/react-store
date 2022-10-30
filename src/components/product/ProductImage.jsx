import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import ImageCover from './ImageCover'

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
        <ImageCover width={'100%'} height={'180px'} image={thumbnailImage} />
      </Grid>
      <Grid container>
        {images.map((path) => {
          return (
            <Grid
              key={path}
              onMouseEnter={onMouseEnter(path)}
              onMouseLeave={onMouseLeave}
            >
              <ImageCover width={'30px'} height={'30px'} image={path} />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default ProductImage
