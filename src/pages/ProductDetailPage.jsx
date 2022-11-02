import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetail from '../hooks/useProductDetail'

import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Loading from '../components/Loading'

const ProductDetailPage = () => {
  const { id } = useParams()
  const { productDetailLoading, productDetail, productDetailError } =
    useProductDetail(id)

  if (productDetailLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Grid container>
        <Grid></Grid>
      </Grid>
    </Container>
  )
}

export default ProductDetailPage
