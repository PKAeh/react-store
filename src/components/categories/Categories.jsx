import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import CategoryItem from './CategoryItem'
import Box from '@mui/material/Box'

const Categories = ({ categories }) => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography sx={{ pb: 2 }} variant="h5">
        หมวดหมู่
      </Typography>
      <Paper>
        <Grid container columns={7} spacing={0.5}>
          {categories.map((item) => {
            return (
              <Grid key={item} xs={1}>
                <CategoryItem item={item} />
              </Grid>
            )
          })}
        </Grid>
      </Paper>
    </Box>
  )
}

export default Categories
