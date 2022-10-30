import { useQuery } from '@tanstack/react-query'

import { getProductCategory } from '../services/productsService'

const useProductCategory = () => {
  const {
    isLoading: productCategoryLoading,
    data: productCategory,
    error: productCategoryError,
  } = useQuery(['productCategory'], getProductCategory)

  return {
    productCategoryLoading,
    productCategory,
    productCategoryError,
  }
}

export default useProductCategory
