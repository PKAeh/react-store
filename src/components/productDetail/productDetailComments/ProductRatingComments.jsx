import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

const ProductRatingComments = ({ rating }) => {
  return (
    <Grid container columns={1} sx={{ alignItems: 'center' }}>
      <Grid>
        <Grid container columns={1} sx={{ alignItems: 'end', pb: 1, pl: 3.8 }}>
          <Grid xs>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'end',
              }}
            >
              {rating}
            </Typography>
          </Grid>
          <Grid xs>
            <Typography
              variant="h5"
              sx={{ pb: 0.3, color: 'rgba(0, 0, 0,0.4)' }}
            >
              /5
            </Typography>
          </Grid>
        </Grid>
        <Grid
          xs={1}
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
            size="large"
            sx={{ pb: 0.4, pl: 5.2 }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          pr: 1,
          height: '13px',
        }}
      ></Grid>
    </Grid>
  )
}

export default ProductRatingComments
