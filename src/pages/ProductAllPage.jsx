import React from 'react'
import useProductsAll from '../hooks/useProductsAll'

import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import Loading from '../components/Loading'
import ProductAllHeader from '../components/productAll/ProductAllHeader'
import ProductAllContent from '../components/productAll/ProductAllContent'

const ProductAllPage = () => {
  const { productsLoading, products, productsError } = useProductsAll()

  console.log(products)

  if (productsLoading) {
    return <Loading />
  }

  return (
    <>
      <ProductAllHeader />
      <Container>
        <Grid container spacing={2} sx={{ py: 10, pb: 20 }}>
          <Grid xs={12}>
            <ProductAllContent products={products.products} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ProductAllPage
