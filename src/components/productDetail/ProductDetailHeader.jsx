import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import ProductDetailImage from './ProductDetailImage'
import ProductDetailName from './ProductDetailName'
import ProductDetailShipping from './ProductDetailShipping'

const ProductDetailHeader = ({ product }) => {
  return (
    <Grid container xs={12}>
      <Grid xs>
        <ProductDetailImage product={product} />
      </Grid>
      <Grid xs={5} sx={{ ml: 2 }}>
        <ProductDetailName product={product} />
      </Grid>
      <Grid xs>
        <ProductDetailShipping />
      </Grid>
    </Grid>
  )
}

export default ProductDetailHeader
