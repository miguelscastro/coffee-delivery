import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CartItem, cartReducer } from '../reducers/cart/reducer'
import {
  addItemToCartAction,
  changeCartItemQuantityAction,
  clearCartAction,
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
  CartSize: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    coffeeId: string,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (coffeeId: string) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { coffees: [] },
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )
      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return initialState
    },
  )

  const { coffees } = cartState

  const cartItemsTotal = coffees.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  const deliveryFee = 3.5

  const OrderTotal = cartItemsTotal + deliveryFee

  const CartSize = coffees.length

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

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

  function clearCart() {
    dispatch(clearCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        cartItemsTotal,
        deliveryFee,
        OrderTotal,
        CartSize,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
