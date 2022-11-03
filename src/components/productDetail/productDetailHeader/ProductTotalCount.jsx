import React, { useState } from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import HorizontalRule from '@mui/icons-material/HorizontalRule'
import Add from '@mui/icons-material/Add'
import ProductButtonPlusMinus from './ProductButtonPlusMinus'

function ProductTotalCount({ stock }) {
  const [count, setCount] = useState(1)

  const onClickPlus = () => {
    if (count < stock) {
      return setCount(count + 1)
    }
  }
  const onClickMinus = () => {
    if (count > 1) {
      return setCount(count - 1)
    }
  }

  return (
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid onClick={onClickMinus}>
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
          count={count}
          name={'minus'}
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
        <Typography>{count}</Typography>
      </Grid>
      <Grid onClick={onClickPlus}>
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
          count={count}
          name={'plus'}
        />
      </Grid>
    </Grid>
  )
}

export default ProductTotalCount
