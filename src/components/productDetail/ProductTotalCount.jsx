import React from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import HorizontalRule from '@mui/icons-material/HorizontalRule'
import Add from '@mui/icons-material/Add'

function ProductTotalCount() {
  return (
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid
        container
        sx={{
          width: '32px',
          height: '32px',
          backgroundColor: 'rgb(239, 240, 245)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <HorizontalRule
          sx={{
            width: '15px',
            height: '24px',
          }}
        />
      </Grid>
      <Grid
        container
        sx={{
          width: '32px',
          height: '32px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography>1</Typography>
      </Grid>
      <Grid
        container
        sx={{
          width: '32px',
          height: '32px',
          backgroundColor: 'rgb(239, 240, 245)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Add
          sx={{
            width: '18px',
            height: '24px',
          }}
        />
      </Grid>
    </Grid>
  )
}

export default ProductTotalCount
