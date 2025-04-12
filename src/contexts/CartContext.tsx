import { createContext, ReactNode, useReducer } from 'react'
import { CartItem, cartReducer } from '../reducers/cart/reducer'
import {
  addItemToCartAction,
  changeCartItemQuantityAction,
  clearCartAction,
  removeCartItemAction,
} from '../reducers/cart/actions'
// import { AddressInfoData } from '../pages/Checkout'

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
  // addNewOrder: (order: OrderProps) => void
  clearCart: () => void
}

// interface OrderProps {
//   coffees: CartItem[]
//   address: AddressInfoData
// }

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { coffees: [] })
  // const [orders, setOrders] = useState<OrderProps[]>([])

  const { coffees } = cartState

  const cartItemsTotal = coffees.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  const deliveryFee = 3.5

  const OrderTotal = cartItemsTotal + deliveryFee

  const CartSize = coffees.length

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

  // function addNewOrder(order: OrderProps) {
  //   setOrders((state) => {
  //     const newState = [...state, order]
  //     console.log(newState)
  //     return newState
  //   })
  // }

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
        // addNewOrder,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
