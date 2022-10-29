import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import CategoryItem from './CategoryItem'

const Categories = ({ categories }) => {
  return (
    <>
      <Typography variant="h5">หมวดหมู่</Typography>
      <Paper>
        <Grid container columns={6} sx={{ py: 0, px: 0, gap: 1 }}>
          {categories.map((item) => {
            return (
              <Grid key={item} xs sx={{ px: 0 }}>
                <CategoryItem item={item} />
              </Grid>
            )
          })}
        </Grid>
      </Paper>
    </>
  )
}

export default Categories
