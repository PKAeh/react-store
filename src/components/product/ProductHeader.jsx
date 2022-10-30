import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

const ProductHeader = ({ title, total }) => {
  return (
    <Grid container columns={1} sx={{ m: 0, pl: 0 }}>
      <Grid xs={1} sx={{ pl: 0 }}>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid xs sx={{ pt: 0, pl: 0 }}>
        <Typography sx={{ color: 'rgba(0,0,0,0.6)', pt: 0 }}>
          {total} ค้นพบสินค้าสำหรับ {`"${title}"`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProductHeader
