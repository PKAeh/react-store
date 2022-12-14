import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import ImageCover from '../product/ImageCover'
import { Link } from 'react-router-dom'

const FlashSaleItem = ({
  width,
  height,
  imageHeight,
  product: { thumbnail, title, price, discountPercentage, id },
}) => {
  const priceText = price - (price * discountPercentage) / 100

  const [elevation, setElevation] = useState(0)

  const onMouseEnter = () => {
    setElevation(5)
  }

  const onMouseLeave = () => {
    setElevation(0)
  }

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
      <Paper
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        elevation={elevation}
        sx={{ width: width, height: height, cursor: 'pointer' }}
      >
        <Grid container sx={{ width: '100%', m: 0, p: 0 }} columns={1}>
          <Grid xs={1} sx={{ width: '100%', p: 0 }}>
            <ImageCover width={'100%'} height={imageHeight} image={thumbnail} />
          </Grid>

          <Grid xs={1}>
            <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
          </Grid>
          <Grid xs={1}>
            <Typography sx={{ color: 'red' }}>{`฿${priceText.toFixed(
              2
            )}`}</Typography>
          </Grid>
          <Grid container>
            <Grid sx={{ py: 0 }}>
              <Typography
                sx={{
                  textDecoration: 'line-through',
                  color: 'rgba(0,0,0,0.3)',
                  fontSize: '13px',
                }}
              >{`฿${price}`}</Typography>
            </Grid>
            <Grid sx={{ p: 0 }}>
              <Typography
                sx={{ fontSize: '13px' }}
              >{` -${discountPercentage}%`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  )
}

export default FlashSaleItem
