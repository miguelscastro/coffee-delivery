import { createContext, ReactNode, useEffect, useState } from 'react'

export interface CoffeeProps {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  coffees: CoffeeProps[]
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  useEffect(() => {
    const fetchCoffees = async () => {
      const response = await fetch('/src/data/coffees.json')
      const data = await response.json()
      setCoffees(data.coffees)
    }
    fetchCoffees()
  }, [])

  return (
    <CartContext.Provider value={{ coffees }}>{children}</CartContext.Provider>
  )
}
