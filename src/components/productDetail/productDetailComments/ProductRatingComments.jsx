import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import ProductRatingBar from './ProductRatingBar'

const ProductRatingComments = ({ rating }) => {
  return (
    <Grid container columns={1} sx={{ alignItems: 'center', pt: 2 }}>
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
      <Grid container xs columns={1} sx={{ pl: 2, pt: 2 }}>
        <ProductRatingBar
          valueRating={5}
          ratingPoint={10}
          percentageValue={56}
        />
        <ProductRatingBar
          valueRating={4}
          ratingPoint={5}
          percentageValue={29}
        />
        <ProductRatingBar
          valueRating={3}
          ratingPoint={2}
          percentageValue={10}
        />
        <ProductRatingBar valueRating={2} ratingPoint={1} percentageValue={5} />
        <ProductRatingBar valueRating={1} ratingPoint={0} percentageValue={0} />
      </Grid>
    </Grid>
  )
}

export default ProductRatingComments
