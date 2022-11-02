import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import ProductStock from './ProductStock'
import ProductTotalCount from './ProductTotalCount'

const ProductTotalSell = ({ stock }) => {
  if (stock) {
  }
  return (
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid>
        <Typography sx={{ color: 'rgba(0,0,0,0.5)', mr: 8 }}>จำนวน</Typography>
      </Grid>
      <Grid container>
        <Grid>
          <ProductTotalCount stock={stock} />
        </Grid>
      </Grid>
      <Grid sx={{ pl: 2 }}>
        <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.5)' }}>
          <ProductStock stock={stock} />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProductTotalSell
