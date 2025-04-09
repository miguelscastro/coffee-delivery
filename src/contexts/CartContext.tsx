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
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
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

  const cartQuantity = cartItems.length

  return (
    <CartContext.Provider value={{ coffees, cartQuantity, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
