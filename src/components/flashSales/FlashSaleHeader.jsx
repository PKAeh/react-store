import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FlashSaleCountdown from './FlashSaleCountdown'

const FlashSaleHeader = () => {
  return (
    <Grid
      container
      sx={{ borderBottom: '2px solid black', alignItems: 'center' }}
    >
      <Grid xs sx={{ p: 0 }}>
        <Typography sx={{ color: 'red' }}>ขณะนี้ลดราคาอยู่</Typography>
      </Grid>
      <Grid xs={8} sx={{ p: 0 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography>จะสิ้นสุดใน</Typography>
          <FlashSaleCountdown />
        </Box>
      </Grid>

      <Grid xs sx={{ p: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button variant="outlined">SHOP All</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FlashSaleHeader
