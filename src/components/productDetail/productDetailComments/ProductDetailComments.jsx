import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import ProductRatingComments from './ProductRatingComments'

const ProductDetailComments = ({ product: { title, rating } }) => {
  return (
    <Paper sx={{ py: 4, pb: 10 }}>
      <Grid container columns={1}>
        <Grid xs={1}>
          <Typography variant="h6" sx={{ pl: 6 }}>
            {' '}
            คะแนนและรีวิวของ {title}{' '}
          </Typography>
        </Grid>
        <Grid
          xs={1}
          columns={1}
          container
          sx={{ py: 3, borderBottom: '1px solid rgba(0,0,0,0.1)' }}
        >
          <Grid>
            <ProductRatingComments rating={rating} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductDetailComments
