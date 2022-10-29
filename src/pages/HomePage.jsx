import React from 'react'
import useProductsAll from '../hooks/useProductsAll'
// import useCategoriesAll  from '../hooks/useCategoriesAll'

import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import ChipList from '../components/ChipList'
import Loading from '../components/Loading'
import FlashSale from '../components/flashSales/FlashSale'

const HomePage = () => {
  const { productsLoading, products, productsError } = useProductsAll()

  if (productsLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <img src="banner.webp" alt="banner" style={{ width: '100%' }} />
        </Grid>

        <Grid xs={12}>
          <ChipList />
        </Grid>

        <Grid xs={12}>
          <FlashSale products={products.products} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
