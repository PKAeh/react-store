import { useQuery } from '@tanstack/react-query'
import { getProductAll } from '../services/productsService'

const useProductsAll = (page = 1, limit = 20) => {
  const skip = (page - 1) * limit
  const {
    isLoading: productsLoading,
    data: products,
    error: productsError,
  } = useQuery({
    queryKey: ['getData', page],
    queryFn: getProductAll(skip, limit),
  })

  return {
    productsLoading,
    products,
    productsError,
  }
}

export default useProductsAll
