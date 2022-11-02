import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import ImageCover from '../product/ImageCover'

const ProductDetailImage = ({ product: { thumbnail, images } }) => {
  return (
    <Grid container>
      <Grid sx={{ width: '100%' }}>
        <ImageCover width={'330px'} height={'330px'} image={thumbnail} />
      </Grid>
      <Grid></Grid>
    </Grid>
  )
}

export default ProductDetailImage
