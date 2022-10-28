import { useQuery } from '@tanstack/react-query'
import { getProductAll } from '../services/productsService'

const useProductsAll = () => {
  const {
    isLoading: productsLoading,
    data: products,
    error: productsError,
  } = useQuery(['getData'], getProductAll)

  return {
    productsLoading,
    products,
    productsError,
  }
}

export default useProductsAll
