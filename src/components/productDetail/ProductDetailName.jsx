import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import ProductRating from './ProductRating'
import ProductDetailBrand from './ProductDetailBrand'

const ProductDetailName = ({
  product: { title, rating, brand, price, discountPercentage },
}) => {
  return (
    <Grid container columns={1}>
      <Grid xs={1} sx={{ pb: 5 }}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid xs={1} sx={{ pb: 2 }}>
        <ProductRating rating={rating} />
      </Grid>
      <Grid>
        <ProductDetailBrand brand={brand} title={title} />
      </Grid>
      <Grid></Grid>
    </Grid>
  )
}

export default ProductDetailName
