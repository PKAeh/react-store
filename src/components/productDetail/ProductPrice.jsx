import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

const ProductPrice = ({ price, discountPercentage, fontSize, variant }) => {
  const priceText = price - (price * discountPercentage) / 100
  return (
    <Grid container columns={1}>
      <Grid xs={1}>
        <Typography
          variant={variant}
          sx={{ color: 'rgba(253, 0, 4, 0.7)' }}
        >{`฿${priceText.toFixed(2)}`}</Typography>
      </Grid>
      <Grid container>
        <Grid sx={{ py: 0, pr: 1 }}>
          <Typography
            sx={{
              textDecoration: 'line-through',
              color: 'rgba(0,0,0,0.3)',
              fontSize: fontSize,
            }}
          >{`฿${price}`}</Typography>
        </Grid>
        <Grid sx={{ p: 0 }}>
          <Typography sx={{ fontSize: fontSize }}>
            {`-${discountPercentage}%`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductPrice
