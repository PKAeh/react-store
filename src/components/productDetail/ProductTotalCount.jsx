import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import HorizontalRule from '@mui/icons-material/HorizontalRule'
import Add from '@mui/icons-material/Add'
import ProductButtonPlusMinus from './ProductButtonPlusMinus'

function ProductTotalCount({ stock }) {
  console.log(stock)
  let stockItem = 1

  const onClick = () => {
    if (stockItem < stock) {
      return stockItem++
    }
    console.log(stockItem)
  }

  return (
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid onClick={onClick}>
        <ProductButtonPlusMinus
          icon={
            <HorizontalRule
              sx={{
                width: '15px',
                height: '24px',
              }}
            />
          }
          stock={stock}
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
        <Typography>{stockItem}</Typography>
      </Grid>
      <Grid>
        <Grid>
          <ProductButtonPlusMinus
            icon={
              <Add
                sx={{
                  width: '15px',
                  height: '24px',
                }}
              />
            }
            stock={stock}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductTotalCount
