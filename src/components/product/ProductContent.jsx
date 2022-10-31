import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import ProductItem from '../product/ProductItem'

const ProductContent = ({ products }) => {
  return (
    <Grid container columns={4} sx={{ py: 0, px: 0 }}>
      {products.map((product) => {
        return (
          <Grid key={product.id} xs={1} sx={{ px: 0 }}>
            <ProductItem product={product} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProductContent
