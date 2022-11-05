import React from 'react'
import { useLocation } from 'react-router-dom'
import useProductSearch from '../hooks/useProductSearch'

import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import Loading from '../components/Loading'
import ProductHeader from '../components/product/ProductHeader'
import Paper from '@mui/material/Paper'
import ProductContent from '../components/product/ProductContent'
import Pagination from '@mui/material/Pagination'

const SearchPage = () => {
  const [page, setPage] = React.useState(1)
  const { search } = useLocation()
  const param = new URLSearchParams(search)
  const keyword = param.get('q') ?? ''
  const { productSearchLoading, productSearch, productSearchError } =
    useProductSearch(keyword, page)

  const total = productSearch?.total ?? 0

  const count = total / 20

  const handleChange = (event, value) => {
    setPage(value)
    window.scrollTo(0, 0)
  }

  if (productSearchLoading) {
    return <Loading />
  }

  console.log(productSearch)

  return (
    <Paper sx={{ pb: 15 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <ProductHeader title={keyword} total={productSearch.total} />
          </Grid>

          <Grid xs={12}>
            <ProductContent products={productSearch.products} />
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
    </Paper>
  )
}

export default SearchPage
