import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import ProductStock from './ProductStock'
import Button from '@mui/material/Button'

const ProductTotalSell = ({ stock }) => {
  if (stock) {
  }
  return (
    <Grid container>
      <Grid>
        <Typography sx={{ color: 'rgba(0,0,0,0.5)' }}>จำนวน</Typography>
      </Grid>
      <Grid container>
        <Grid>
          <Button sx></Button>
          <Button></Button>
        </Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
      <Grid>
        <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.5)' }}>
          <ProductStock stock={stock} />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProductTotalSell
