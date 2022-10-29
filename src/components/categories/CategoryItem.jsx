import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const CategoryItem = ({ item }) => {
  const [elevation, setElevation] = useState(1)

  const onMouseEnter = (e) => {
    setElevation(6)
  }

  const onMouseLeave = () => {
    setElevation(1)
  }
  return (
    <Paper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      elevation={elevation}
      sx={{ width: '100%', cursor: 'pointer', m: 0 }}
    >
      <Grid container sx={{ width: '100%', m: 0, p: 0 }} columns={1}>
        <Grid
          container
          xs={1}
          sx={{ width: '100%', p: 0, m: 0, justifyContent: 'center' }}
        >
          <Box
            sx={{
              backgroundImage: 'url(https://via.placeholder.com/140)',
              width: '80%',
              height: '140px',
              backgroundSize: 'cover',
              m: 0,
            }}
          ></Box>
        </Grid>

        <Grid xs={1} sx={{ textAlign: 'center', pb: 2 }}>
          <Typography sx={{ fontWeight: 'bold' }}>{item}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CategoryItem
