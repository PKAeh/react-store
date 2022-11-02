import { useQuery } from '@tanstack/react-query'

import { getProductDetail } from '../services/productsService'

const useProductDetail = (id) => {
  const {
    isLoading: productDetailLoading,
    data: productDetail,
    error: productDetailError,
  } = useQuery(['productDetail'], getProductDetail(id))

  return {
    productDetailLoading,
    productDetail,
    productDetailError,
  }
}

export default useProductDetail
