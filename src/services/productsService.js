const getProductAll = () => {
  return fetch('https://dummyjson.com/products').then((res) => res.json())
}

const getCategoryAll = () => {
  return fetch('https://dummyjson.com/products/categories').then((res) =>
    res.json()
  )
}

export { getProductAll, getCategoryAll }
