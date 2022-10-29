import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import FlashSaleHeader from './FlashSaleHeader'
import FlashSaleContent from './FlashSaleContent'

const FlashSale = () => {
  return (
    <>
      <Typography variant="h5">Flash Sale</Typography>
      <Card>
        <CardContent>
          <Grid container columns={1}>
            <Grid xs={1}>
              <FlashSaleHeader />
            </Grid>
            <Grid xs={1} sx={{ backgroundColor: 'yellow' }}>
              <FlashSaleContent />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default FlashSale
