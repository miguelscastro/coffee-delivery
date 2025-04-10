import { useCart } from '../../../hooks/useCart'
import { formatMoney } from '../../../utils/formatMoney'
import { SelectedCoffee } from '../SelectedCoffeeCard'
import { Coffees, Container, Total } from './styles'

export function Cart() {
  const { cartItems, cartItemsTotal, deliveryFee, OrderTotal } = useCart()

  return (
    <>
      <Container>
        <Coffees>
          {cartItems.map((item) => {
            return <SelectedCoffee key={item.id} coffee={item} />
          })}
        </Coffees>
        <Total>
          <div>
            <p>Total de itens</p> <span>R$ {formatMoney(cartItemsTotal)}</span>
          </div>
          <div>
            <p>Entrega</p> <span>R$ {formatMoney(deliveryFee)}</span>
          </div>
          <div>
            <p>Total</p> <span>R$ {formatMoney(OrderTotal)}</span>
          </div>
          <button>CONFIRMAR PEDIDO</button>
        </Total>
      </Container>
    </>
  )
}
