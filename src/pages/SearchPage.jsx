import React from 'react'
import { useLocation } from 'react-router-dom'
import useProductSearch from '../hooks/useProductSearch'

const SearchPage = () => {
  const { search } = useLocation()
  const param = new URLSearchParams(search)
  const keyword = param.get('q') ?? ''

  const { productSearchLoading, productSearch, productSearchError } =
    useProductSearch(keyword)

  return <div>SearchPage</div>
}

export default SearchPage
