import { createContext, ReactNode, useEffect, useState } from 'react'
import { produce } from 'immer'

export interface CoffeeProps {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export interface CartItem extends CoffeeProps {
  quantity: number
}

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  coffees: CoffeeProps[]
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    coffeeId: string,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (coffeeId: string) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  useEffect(() => {
    const fetchCoffees = async () => {
      const response = await fetch('/src/data/coffees.json')
      const data = await response.json()
      setCoffees(data.coffees)
    }
    fetchCoffees()
  }, [])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeInCart].quantity += coffee.quantity
      }
    })
    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    coffeeId: string,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === coffeeId,
      )
      if (coffeeInCart >= 0) {
        const coffee = draft[coffeeInCart]
        if (type === 'decrease' && coffee.quantity > 1) {
          coffee.quantity -= 1
        } else if (type === 'increase' && coffee.quantity >= 1) {
          coffee.quantity += 1
        }
      }
    })
    setCartItems(newCart)
  }

  function removeCartItem(coffeeId: string) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeToRemove = cartItems.findIndex(
        (cartItem) => cartItem.id === coffeeId,
      )
      if (coffeeToRemove >= 0) {
        draft.splice(coffeeToRemove, 1)
      }
    })
    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        cartItems,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
