import React from 'react'
import useProductsAll from '../hooks/useProductsAll'

import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import Loading from '../components/Loading'
import ProductAllHeader from '../components/productAll/ProductAllHeader'
import ProductAllContent from '../components/productAll/ProductAllContent'
import Pagination from '@mui/material/Pagination'
import ErrorPage from './ErrorPage'

const ProductAllPage = () => {
  const [page, setPage] = React.useState(1)
  const { productsLoading, products, productsError } = useProductsAll(page)

  const total = products?.total ?? 0

  const count = Math.ceil(total / 20)

  const handleChange = (event, value) => {
    setPage(value)
    window.scrollTo(0, 0)
  }

  if (productsLoading) {
    return <Loading />
  }

  if (productsError) {
    return <ErrorPage />
  }

  return (
    <>
      <ProductAllHeader />
      <Container>
        <Grid container spacing={2} sx={{ py: 10, pb: 10 }}>
          <Grid xs={12}>
            <ProductAllContent products={products.products} />
          </Grid>
          <Grid xs={12} container sx={{ justifyContent: 'end', mt: 4 }}>
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              showFirstButton
              showLastButton
              size="large"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ProductAllPage
