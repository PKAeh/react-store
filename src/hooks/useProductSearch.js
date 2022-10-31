import { useQuery } from '@tanstack/react-query'

import { getProductSearch } from '../services/getProductSearch'

const useProductSearch = (keyword, skip = 0, limit = 20) => {
  const {
    isLoading: productSearchLoading,
    data: productSearch,
    error: productSearchError,
  } = useQuery(['productSearch'], getProductSearch(keyword, skip, limit))

  return {
    productSearchLoading,
    productSearch,
    productSearchError,
  }
}

export default useProductSearch
