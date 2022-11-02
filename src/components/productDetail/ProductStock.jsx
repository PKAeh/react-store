const ProductStock = ({ stock }) => {
  if (stock) {
    return `เหลือเพียง ${stock} ชิ้น`
  } else {
    return `สินค้าหมด`
  }
}
export default ProductStock
