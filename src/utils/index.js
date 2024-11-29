
/** 
 * This function calculates total price of all products in the cart
 * @function totalPrice
 * @param {Array} products cartProducts; Array of Objects
 * @returns {Number} Total price of all products
*/

export const totalPrice = (products) => {
  return products.reduce((acc, product) => acc + product.price, 0)
}

/**
 * 
 * @param {*} products 
 * @returns 
 */

export const totalItems = (products) => {
  return products.length
}
