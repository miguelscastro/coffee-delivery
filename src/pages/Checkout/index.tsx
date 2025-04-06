import { AddressInfo } from '../components/AddressInfo'
import { Cart } from '../components/Cart'
import { Address, CartTotal, Container } from './styles'

export function Checkout() {
  return (
    <Container>
      <Address>
        <h2>Complete seu pedido</h2>
        <AddressInfo />
      </Address>

      <CartTotal>
        <h2>Cafés Selecionados</h2>
        <Cart />
      </CartTotal>
    </Container>
  )
}
