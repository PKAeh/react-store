import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const ErrorPage = () => {
  return (
    <Container>
      <Grid sx={{ mt: 5 }}>
        <Typography sx={{ color: 'red', textAlign: 'center' }}>
          Not Found !
        </Typography>
      </Grid>
    </Container>
  )
}

export default ErrorPage
