const getProductAll = (skip, limit) => () => {
  return fetch(
    `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
  ).then((res) => res.json())
}

const getCategoriesAll = () => {
  return fetch('https://dummyjson.com/products/categories').then((res) =>
    res.json()
  )
}

const getProductCategory = (category, skip, limit) => () => {
  return fetch(
    `https://dummyjson.com/products/category/${category}?skip=${skip}&limit=${limit}`
  ).then((res) => res.json())
}

const getProductSearch = (keyword, skip, limit) => () => {
  return fetch(
    `https://dummyjson.com/products/search?q=${keyword}&skip=${skip}&limit=${limit}`
  ).then((res) => res.json())
}

const getProductDetail = (id) => () => {
  return fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
}

export {
  getProductAll,
  getCategoriesAll,
  getProductCategory,
  getProductSearch,
  getProductDetail,
}
