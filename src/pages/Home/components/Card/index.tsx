import { ShoppingCartSimple } from '@phosphor-icons/react'

import { QuantityInput } from '../../../../components/Form/QuantityInput'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { CoffeeProps } from '../../../../reducers/cart/reducer'

import {
  AddToCartButton,
  CardContainer,
  Controler,
  Tags,
  Order,
  Price,
} from './styles'

interface CardProps {
  coffee: CoffeeProps
}

export function Card({ coffee }: CardProps) {
  const { addCoffeeToCart } = useCart()

  const [quantity, setQuantity] = useState<number>(1)

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }
  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleAddToCart() {
    addCoffeeToCart({ ...coffee, quantity })
    setQuantity(1)
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <h3>{coffee.title}</h3>

      <p>{coffee.description}</p>

      <Controler>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput
            decrementQuantity={handleDecrementQuantity}
            quantity={quantity}
            incrementQuantity={handleIncrementQuantity}
          />
          <AddToCartButton onClick={handleAddToCart}>
            <ShoppingCartSimple weight="fill" size={22} />
          </AddToCartButton>
        </Order>
      </Controler>
    </CardContainer>
  )
}
