import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetail from '../hooks/useProductDetail'

import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Loading from '../components/Loading'
import ProductDetailHeader from '../components/productDetail/productDetailHeader/ProductDetailHeader'
import ProductDetailDescription from '../components/productDetail/productDetailDescription/ProductDetailDescription'
import ProductDetailComments from '../components/productDetail/productDetailComments/ProductDetailComments'

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
        <Grid xs={12}>
          <ProductDetailHeader product={productDetail} />
        </Grid>
        <Grid xs={12} sx={{ mt: 2 }}>
          <ProductDetailDescription product={productDetail} />
        </Grid>
        <Grid xs={12} sx={{ mt: 2 }}>
          <ProductDetailComments product={productDetail} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductDetailPage
