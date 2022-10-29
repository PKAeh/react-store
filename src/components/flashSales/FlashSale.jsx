import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import FlashSaleHeader from './FlashSaleHeader'
import FlashSaleContent from './FlashSaleContent'
import Box from '@mui/material/Box'

const FlashSale = ({ products }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Typography sx={{ pb: 1 }} variant="h5">
        Flash Sale
      </Typography>
      <Paper sx={{ pb: 1 }}>
        <Grid container columns={1} sx={{ p: 0, m: 0 }}>
          <Grid xs={1}>
            <FlashSaleHeader />
          </Grid>
          <Grid xs={1}>
            <FlashSaleContent products={products} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default FlashSale
