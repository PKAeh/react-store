import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import ProductRating from './ProductRating'

const ProductDetailName = ({
  product: { title, rating, brand, price, discountPercentage },
}) => {
  return (
    <Grid container columns={1}>
      <Grid xs={1} sx={{ pb: 5 }}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid>
        <ProductRating rating={rating} />
      </Grid>
      <Grid></Grid>
      <Grid></Grid>
    </Grid>
  )
}

export default ProductDetailName
