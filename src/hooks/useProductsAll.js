const { useQuery } = require('@tanstack/react-query')
const { getProductAll } = require('../services/productsService')

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
