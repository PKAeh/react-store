import React from 'react'

import FlashSaleCountdown from '../flashSales/FlashSaleCountdown'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'

const ProductAllHeader = () => {
  return (
    <Paper sx={{ p: 2, position: 'sticky' }}>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ m: 0, height: '40px', alignItems: 'center' }}
        >
          <Grid sx={{ p: 0 }}>
            <Typography sx={{ color: 'red', pr: 2 }}>On Sale Now</Typography>
          </Grid>
          <Grid sx={{ p: 0 }}>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                alignContent: 'stretch',
              }}
            >
              <Typography>Ends in</Typography>
              <FlashSaleCountdown style={{ height: '20px' }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default ProductAllHeader
