import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'

const ProductRatingBar = ({ valueRating, ratingPoint, percentageValue }) => {
  return (
    <Grid container xs={1} columns={1}>
      <Grid>
        <Rating
          name="half-rating-read"
          value={valueRating}
          precision={0.5}
          readOnly
          size="small"
          sx={{ pb: 0.4, pl: 5.2 }}
        />
      </Grid>
      <Grid>
        <LinearProgress
          sx={{
            textAlign: 'start',
            width: '150px',
            height: '15px',
            mt: 0.2,
            ml: 1,
            [`&.${linearProgressClasses.colorPrimary}`]: {
              backgroundColor: '#eff0f5',
            },
            [`& .${linearProgressClasses.bar}`]: {
              backgroundColor: '#fbca51',
            },
          }}
          variant="determinate"
          value={percentageValue}
        />
      </Grid>
      <Grid sx={{ ml: 1, pb: 0.3 }}>
        <Typography variant="body2">{ratingPoint}</Typography>
      </Grid>
    </Grid>
  )
}

export default ProductRatingBar
