import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions"

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() }
  }
  if (action.type === REMOVE) {
    let newState = new Map(state.cart)
    newState.delete(action.payload.id)
    return { ...state, cart: newState }
  }
  if (action.type === INCREASE) {
    let newCart = new Map(state.cart)
    const item = newCart.get(action.payload.id)
    const newItem = { ...item, amount: item.amount + 1 }
    newCart.set(action.payload.id, newItem)
    // console.log(item)
    return { ...state, cart: newCart }
  }
  if (action.type === DECREASE) {
    let newCart = new Map(state.cart)
    const item = newCart.get(action.payload.id)
    if (item.amount > 1) {
      const newItem = { ...item, amount: item.amount - 1 }
      newCart.set(action.payload.id, newItem)
    } else {
      newCart.delete(action.payload.id)
    }
    // console.log(item)
    return { ...state, cart: newCart }
  }

  if (action.type === LOADING) {
    return { ...state, isLoading: true }
  }

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]))
    return { ...state, isLoading: false, cart: newCart }
  }

  throw new Error(`No matching action found with ${action.type} - action type`)
}
