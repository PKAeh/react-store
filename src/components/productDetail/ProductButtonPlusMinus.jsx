import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'

const ProductButtonPlusMinus = ({ icon, stock, count, name }) => {
  const [bgColorAndCursor, setBgColorAndCursor] = useState({
    backgroundColor: 'rgb(239, 240, 245)',
    cursor: 'pointer',
  })

  console.log(stock)
  const onMouseEnter = () => {
    if ((count > 1 && name === 'minus') || (count < stock && name === 'plus'))
      setBgColorAndCursor((state) => {
        return {
          ...state,
          cursor: 'pointer',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }
      })
  }

  const onMouseLeave = () => {
    setBgColorAndCursor((state) => {
      return { ...state, backgroundColor: 'rgb(239, 240, 245)' }
    })
  }

  useEffect(() => {
    if (
      (count === 1 && name === 'minus') ||
      (count === stock && name === 'plus')
    ) {
      setBgColorAndCursor((state) => {
        return {
          ...state,
          cursor: 'not-allowed',
          backgroundColor: 'rgb(239, 240, 245)',
        }
      })
    }
  }, [count, name, stock])

  return (
    <Grid
      container
      sx={{
        width: '32px',
        height: '32px',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: bgColor,
        // cursor: cursor,
        ...bgColorAndCursor,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
    </Grid>
  )
}

export default ProductButtonPlusMinus
