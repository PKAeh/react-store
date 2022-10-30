import { useQuery } from '@tanstack/react-query'

import { getProductCategory } from '../services/productsService'

const useProductCategory = (category, skip = 0, limit = 20) => {
  const {
    isLoading: productCategoryLoading,
    data: productCategory,
    error: productCategoryError,
  } = useQuery(['productCategory'], getProductCategory(category, skip, limit))

  return {
    productCategoryLoading,
    productCategory,
    productCategoryError,
  }
}

export default useProductCategory
