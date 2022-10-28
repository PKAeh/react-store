const { useQuery } = require('@tanstack/react-query')
const { getCategoriesAll } = require('../services/productsService')

const useCategoriesAll = () => {
  const {
    isLoading: categoriesLoading,
    data: categories,
    error: categoriesError,
  } = useQuery(['getData'], getCategoriesAll)

  return {
    categoriesLoading,
    categories,
    categoriesError,
  }
}

export default useCategoriesAll
