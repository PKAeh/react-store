import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import FlashSaleHeader from './FlashSaleHeader'
import FlashSaleContent from './FlashSaleContent'

const FlashSale = ({ products }) => {
  return (
    <>
      <Typography variant="h5">Flash Sale</Typography>
      <Paper>
        <Grid container columns={1}>
          <Grid xs={1}>
            <FlashSaleHeader />
          </Grid>
          <Grid xs={1}>
            <FlashSaleContent products={products} />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default FlashSale
