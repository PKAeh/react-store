import { useQuery } from '@tanstack/react-query'

import { getProductSearch } from '../services/productsService'

const useProductSearch = (keyword, page = 1, limit = 20) => {
  const skip = (page - 1) * limit
  const {
    isLoading: productSearchLoading,
    data: productSearch,
    error: productSearchError,
  } = useQuery(['productSearch', page], getProductSearch(keyword, skip, limit))

  return {
    productSearchLoading,
    productSearch,
    productSearchError,
  }
}

export default useProductSearch
