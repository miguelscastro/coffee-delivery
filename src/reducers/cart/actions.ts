import { CartItem } from './reducer'

interface addItemToCart {
  type: CartActionTypes.ADD_ITEM_TO_CART
  payload: {
    coffeeToAdd: CartItem
  }
}

interface changeCartItemQuantity {
  type: CartActionTypes.CHANGE_CART_ITEM_QUANTITY
  payload: {
    coffeeChanged: string
    type: 'increase' | 'decrease'
  }
}

interface removeCartItem {
  type: CartActionTypes.REMOVE_ITEM_FROM_CART
  payload: {
    coffeeToRemove: string
  }
}

interface clearCart {
  type: CartActionTypes.CLEAR_CART
}

export type CartActions =
  | addItemToCart
  | changeCartItemQuantity
  | removeCartItem
  | clearCart

export enum CartActionTypes {
  ADD_ITEM_TO_CART = 'ADD_COFFEE_TO_CART',
  CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export function addItemToCartAction(coffeeToAdd: CartItem): addItemToCart {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: {
      coffeeToAdd,
    },
  }
}

export function changeCartItemQuantityAction(
  coffeeChanged: string,
  type: 'increase' | 'decrease',
): changeCartItemQuantity {
  return {
    type: CartActionTypes.CHANGE_CART_ITEM_QUANTITY,
    payload: {
      coffeeChanged,
      type,
    },
  }
}

export function removeCartItemAction(coffeeToRemove: string): removeCartItem {
  return {
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      coffeeToRemove,
    },
  }
}

export function clearCartAction(): clearCart {
  return {
    type: CartActionTypes.CLEAR_CART,
  }
}
