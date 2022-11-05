import React from 'react'
import useProductCategory from '../hooks/useProductCategory'
import { useParams } from 'react-router-dom'

import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import Loading from '../components/Loading'
import ProductHeader from '../components/product/ProductHeader'
import Paper from '@mui/material/Paper'
import ProductContent from '../components/product/ProductContent'
import ErrorPage from './ErrorPage'

const CategoryPage = () => {
  const { category } = useParams()
  const { productCategoryLoading, productCategory, productCategoryError } =
    useProductCategory(category)

  if (productCategoryLoading) {
    return <Loading />
  }

  if (productCategoryError) {
    return <ErrorPage />
  }

  return (
    <Paper>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <ProductHeader title={category} total={productCategory.total} />
          </Grid>

          <Grid xs={12}>
            <ProductContent products={productCategory.products} />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default CategoryPage
