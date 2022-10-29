import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import FlashSaleHeader from './FlashSaleHeader'
import FlashSaleContent from './FlashSaleContent'

const FlashSale = ({ products }) => {
  return (
    <>
      <Typography variant="h5">Flash Sale</Typography>
      <Card>
        <CardContent sx={{ p: 0 }}>
          <Grid container columns={1}>
            <Grid xs={1}>
              <FlashSaleHeader />
            </Grid>
            <Grid xs={1}>
              <FlashSaleContent products={products} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default FlashSale
