import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import FlashSaleItem from './FlashSaleItem'

const FlashSaleContent = ({ products }) => {
  const productList = products.slice(0, 6)

  return (
    <Grid container columns={6} sx={{ py: 0, px: 0, gap: 1 }}>
      {productList.map((product) => {
        return (
          <Grid xs sx={{ px: 0 }}>
            <FlashSaleItem product={product} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FlashSaleContent
