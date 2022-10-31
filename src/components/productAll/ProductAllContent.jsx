import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import FlashSaleItem from '../flashSales/FlashSaleItem'

const ProductAllContent = ({ products }) => {
  return (
    <Grid container columns={5} sx={{ py: 0, px: 0 }}>
      {products.map((product) => {
        return (
          <Grid key={product.id} xs={1} sx={{ px: 0 }}>
            <FlashSaleItem
              width={'98%'}
              height={'350px'}
              imageHeight={'220px'}
              product={product}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProductAllContent
