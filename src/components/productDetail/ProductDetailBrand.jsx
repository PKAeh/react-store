import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

const ProductDetailBrand = ({ brand, title }) => {
  return (
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid sx={{ pr: 1 }}>
        <Typography
          sx={{
            fontSize: '0.7em',
            color: 'rgba(0,0,0,0.4)',
            fontWeight: 'bold',
          }}
        >
          Brand :
        </Typography>
      </Grid>
      <Grid sx={{ pr: 1 }}>
        <Typography sx={{ fontSize: '0.7em', color: 'rgb(51, 163, 191)' }}>
          {brand}
        </Typography>
      </Grid>
      <Grid
        sx={{ pl: 1, borderLeft: '1px solid rgba(0,0,0,0.3)', height: '15px' }}
      >
        <Typography sx={{ fontSize: '0.7em', color: 'rgb(51, 163, 191)' }}>
          เพิ่มเติม {title} จาก {brand}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProductDetailBrand
