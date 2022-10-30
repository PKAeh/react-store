import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import ImageCover from './ImageCover'

const ProductImage = ({ thumbnail, images }) => {
  console.log(thumbnail)

  return (
    <Grid container>
      <Grid sx={{ width: '100%', p: 0 }}>
        <ImageCover width={'100%'} height={'180px'} image={thumbnail} />
      </Grid>
      <Grid container>
        {images.map((path) => {
          return (
            <Grid key={path}>
              <ImageCover width={'30px'} height={'30px'} image={path} />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default ProductImage
