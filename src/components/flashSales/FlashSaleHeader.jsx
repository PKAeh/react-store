import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FlashSaleCountdown from './FlashSaleCountdown'
import { useHistory } from 'react-router-dom'

const FlashSaleHeader = () => {
  const history = useHistory()

  const onClick = () => {
    history.push('/shop_all')
    history.go(0)
  }
  return (
    <Grid
      container
      sx={{ borderBottom: '2px solid black', alignItems: 'center' }}
    >
      <Grid xs sx={{ p: 0 }}>
        <Typography sx={{ color: 'red' }}>ขณะนี้ลดราคาอยู่</Typography>
      </Grid>
      <Grid xs={8} sx={{ p: 0 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography>จะสิ้นสุดใน</Typography>
          <FlashSaleCountdown />
        </Box>
      </Grid>

      <Grid xs sx={{ p: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button variant="outlined" onClick={onClick}>
            SHOP All
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FlashSaleHeader
