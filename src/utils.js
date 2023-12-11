export const getTotals = (cart) => {
  //   console.log(cart)
  let totalAmount = 0
  let totalCost = 0

  const cartArray = Array.from(cart.entries())
  //   console.log(cartArray)

  //   totalAmount = cartArray.length
  cartArray.map((item) => {
    totalCost += item[1].amount * item[1].price
    totalAmount += item[1].amount
    // console.log(item)
  })
  return { totalAmount, totalCost }
}
