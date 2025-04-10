import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { SelectedCoffee } from '../SelectedCoffeeCard'
import { Coffees, Container, Total } from './styles'

export function Cart() {
  const { coffees, cartItemsTotal, deliveryFee, OrderTotal } = useCart()

  return (
    <>
      <Container>
        <Coffees>
          {coffees.map((coffee) => {
            return <SelectedCoffee key={coffee.id} coffee={coffee} />
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
