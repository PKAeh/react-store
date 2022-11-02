import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

const ProductRating = ({ rating }) => {
  return (
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid
        container
        sx={{
          pr: 1,
        }}
      >
        <Rating
          name="half-rating-read"
          value={rating}
          precision={0.5}
          readOnly
          size="small"
          sx={{ pb: 0.4 }}
        />
      </Grid>
      <Grid container>
        <Typography
          sx={{
            color: 'rgb(51, 163, 191)',
            fontSize: '0.7em',
            textAlign: 'end',
          }}
        >
          {rating}
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          borderRight: '1px solid rgba(0,0,0,0.3)',
          pr: 1,
          height: '13px',
        }}
      ></Grid>
      <Grid sx={{ pl: 1 }}>
        <Typography sx={{ color: 'rgb(51, 163, 191)', fontSize: '0.7em' }}>
          คำถาม 0 ได้รับการตอบ
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProductRating
