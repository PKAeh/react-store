import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import ProductDetailImage from './ProductDetailImage'
import ProductDetailName from './ProductDetailName'
import ProductDetailShipping from './ProductDetailShipping'
import Paper from '@mui/material/Paper'

const ProductDetailHeader = ({ product }) => {
  return (
    <Paper sx={{ p: 1, pr: 0 }}>
      <Grid container xs={12}>
        <Grid xs sx={{ mr: 2 }}>
          <ProductDetailImage product={product} />
        </Grid>
        <Grid xs={5} sx={{ mx: 1 }}>
          <ProductDetailName product={product} />
        </Grid>
        <Grid xs>
          <ProductDetailShipping />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductDetailHeader
