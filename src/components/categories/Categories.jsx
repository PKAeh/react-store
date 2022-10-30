import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import CategoryItem from './CategoryItem'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

const Categories = ({ categories }) => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography sx={{ pb: 2 }} variant="h5">
        หมวดหมู่
      </Typography>

      <Grid container columns={7} spacing={0.5}>
        {categories.map((item) => {
          return (
            <Grid key={item} xs={1}>
              <Link style={{ textDecoration: 'none' }} to={`/category/${item}`}>
                <CategoryItem item={item} />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Categories
