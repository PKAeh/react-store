const getProductAll = () => {
  return fetch('https://dummyjson.com/products').then((res) => res.json())
}

const getCategoriesAll = () => {
  return fetch('https://dummyjson.com/products/categories').then((res) =>
    res.json()
  )
}

const getProductCategory = (skip = 0, limit = 20) => {
  return fetch(
    `https://dummyjson.com/products/category/smartphones?skip=${skip}&limit=${limit}`
  ).then((res) => res.json())
}

const getProductSearch = (skip = 0, limit = 20, keyword) => {
  return fetch(
    `https://dummyjson.com/products/search?q=${keyword}&skip=${skip}&limit=${limit}`
  ).then((res) => res.json())
}

export { getProductAll, getCategoriesAll, getProductCategory, getProductSearch }
