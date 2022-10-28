import { useQuery } from '@tanstack/react-query'
import { getCategoriesAll } from '../services/productsService'

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
