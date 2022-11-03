import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import ProductDetailImage from './ProductDetailImage'
import ProductDetailName from './ProductDetailName'
import ProductDetailShipping from './ProductDetailShipping'
import Paper from '@mui/material/Paper'

const ProductDetailHeader = ({ product }) => {
  return (
    <Paper sx={{ p: 1, pb: 10 }}>
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
    </Paper>
  )
}

export default ProductDetailHeader
