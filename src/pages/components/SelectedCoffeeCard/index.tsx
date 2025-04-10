import {
  CoffeeContainer,
  CoffeePrice,
  Container,
  Controller,
  RemoveCoffee,
} from './styles'
import { Trash } from '@phosphor-icons/react'
import { CartItem } from '../../../contexts/CartContext'
import { formatMoney } from '../../../utils/formatMoney'
import { useCart } from '../../../hooks/useCart'
import { QuantityInput } from '../../../components/Form/QuantityInput'

interface SelectedCoffeeProps {
  coffee: CartItem
}

export function SelectedCoffee({ coffee }: SelectedCoffeeProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()
  function handleIncrementQuantity() {
    changeCartItemQuantity(coffee.id, 'increase')
  }
  function handleDecrementQuantity() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }
  function handleRemoveCoffee() {
    removeCartItem(coffee.id)
  }
  return (
    <>
      <Container>
        <CoffeeContainer>
          <img src={coffee.image} alt={coffee.description} />
          <div>
            <h3>{coffee.title}</h3>
            <Controller>
              <QuantityInput
                decrementQuantity={handleDecrementQuantity}
                quantity={coffee.quantity}
                incrementQuantity={handleIncrementQuantity}
              />
              <RemoveCoffee onClick={handleRemoveCoffee}>
                <Trash />
                <p>REMOVER</p>
              </RemoveCoffee>
            </Controller>
          </div>
        </CoffeeContainer>
        <CoffeePrice>
          R$ {formatMoney(coffee.price * coffee.quantity)}
        </CoffeePrice>
      </Container>
    </>
  )
}
