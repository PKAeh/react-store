import React from 'react'
import useProductsAll from '../hooks/useProductsAll'
// import useCategoriesAll  from '../hooks/useCategoriesAll'

import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'

const HomePage = () => {
  const { productsLoading, products, productsError } = useProductsAll()

  console.log(products)

  return (
    <Container>
      <Grid container>
        <Grid xs={12}>
          <img src="banner.webp" alt="banner" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
