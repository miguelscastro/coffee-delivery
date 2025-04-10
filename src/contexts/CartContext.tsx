import { createContext, ReactNode, useReducer } from 'react'
import { CartItem, cartReducer } from '../reducers/cart/reducer'
import {
  addItemToCartAction,
  changeCartItemQuantityAction,
  removeCartItemAction,
} from '../reducers/cart/actions'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  coffees: CartItem[]
  cartItemsTotal: number
  deliveryFee: number
  OrderTotal: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    coffeeId: string,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (coffeeId: string) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { coffees: [] })

  const { coffees } = cartState

  const cartItemsTotal = coffees.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  const deliveryFee = 3.5

  const OrderTotal = cartItemsTotal + deliveryFee

  function addCoffeeToCart(coffeeToAdd: CartItem) {
    dispatch(addItemToCartAction(coffeeToAdd))
  }

  function changeCartItemQuantity(
    coffeeChanged: string,
    type: 'increase' | 'decrease',
  ) {
    dispatch(changeCartItemQuantityAction(coffeeChanged, type))
  }

  function removeCartItem(coffeeToRemove: string) {
    dispatch(removeCartItemAction(coffeeToRemove))
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        cartItemsTotal,
        deliveryFee,
        OrderTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
