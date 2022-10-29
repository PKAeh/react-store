import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'

const FlashSaleCountdown = () => {
  const getCountdown = () => {
    const now = new Date()

    const timeFlashSale = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    )
    console.log({ now, timeFlashSale })

    const timeCount = (timeFlashSale - now) / 1000

    const hours = timeCount / (60 * 60)
    const minutes = (timeCount % (60 * 60)) / 60
    const seconds = timeCount % 60

    return {
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds),
    }
  }

  const [dateCount, setDateCount] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const intervalTask = setInterval(() => {
      const dateCount = getCountdown()
      setDateCount(dateCount)
    }, 1000)
    return () => clearInterval(intervalTask)
  }, [])

  return (
    <Grid container sx={{ py: 0 }}>
      <Grid
        sx={{
          background: '#f80a35',
          color: 'white',
          borderRadius: '2px',
          px: '10px',
        }}
      >
        {dateCount.hours < 10 ? `0${dateCount.hours}` : dateCount.hours}
      </Grid>
      <Grid>{':'}</Grid>
      <Grid
        sx={{
          background: '#f80a35',
          color: 'white',
          borderRadius: '2px',
          px: '10px',
        }}
      >
        {dateCount.minutes < 10 ? `0${dateCount.minutes}` : dateCount.minutes}
      </Grid>
      <Grid>{':'}</Grid>
      <Grid
        sx={{
          background: '#f80a35',
          color: 'white',
          borderRadius: '2px',
          px: '10px',
        }}
      >
        {dateCount.seconds < 10 ? `0${dateCount.seconds}` : dateCount.seconds}
      </Grid>
    </Grid>
  )
}

export default FlashSaleCountdown
