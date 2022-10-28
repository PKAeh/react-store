const { useQuery } = require('@tanstack/react-query')
const { getCategoriesAll } = require('../services/productsService')

const useCategoriesAll = () => {
  const {
    isLoading: productsLoading,
    data: categories,
    error: productsError,
  } = useQuery(['getData'], getCategoriesAll)

  return {
    productsLoading,
    categories,
    productsError,
  }
}

export default useCategoriesAll
