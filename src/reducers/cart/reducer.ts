import { produce } from 'immer'
import { CartActions, CartActionTypes } from './actions'

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

interface CartState {
  coffees: CartItem[]
}

export function cartReducer(state: CartState, action: CartActions) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART: {
      const coffeeInCart = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeToAdd.id,
      )
      return produce(state, (draft) => {
        if (coffeeInCart < 0) {
          draft.coffees.push(action.payload.coffeeToAdd)
        } else {
          draft.coffees[coffeeInCart].quantity +=
            action.payload.coffeeToAdd.quantity
        }
      })
    }
    case CartActionTypes.CHANGE_CART_ITEM_QUANTITY: {
      return produce(state, (draft) => {
        const coffeeInCart = state.coffees.findIndex(
          (coffee) => coffee.id === action.payload.coffeeChanged,
        )
        if (coffeeInCart >= 0) {
          const coffee = draft.coffees[coffeeInCart]
          if (action.payload.type === 'decrease' && coffee.quantity > 1) {
            coffee.quantity -= 1
          } else if (
            action.payload.type === 'increase' &&
            coffee.quantity >= 1
          ) {
            coffee.quantity += 1
          }
        }
      })
    }
    case CartActionTypes.REMOVE_ITEM_FROM_CART: {
      return produce(state, (draft) => {
        const coffeeToRemove = state.coffees.findIndex(
          (coffee) => coffee.id === action.payload.coffeeToRemove,
        )
        if (coffeeToRemove >= 0) {
          draft.coffees.splice(coffeeToRemove, 1)
        }
      })
    }
    case CartActionTypes.CLEAR_CART: {
      return {
        ...state,
        coffees: [],
      }
    }
  }
}
