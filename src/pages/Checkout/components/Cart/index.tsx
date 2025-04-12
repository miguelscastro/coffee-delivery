import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { SelectedCoffee } from '../SelectedCoffeeCard'
import { Coffees, Container, Total, WarningMessage } from './styles'

export function Cart() {
  const { coffees, cartItemsTotal, deliveryFee, OrderTotal, CartSize } =
    useCart()

  return (
    <>
      <Container>
        <Coffees>
          {coffees.length == 0 ? (
            <WarningMessage>Seu carrinho está vazio</WarningMessage>
          ) : (
            coffees.map((coffee) => {
              return <SelectedCoffee key={coffee.id} coffee={coffee} />
            })
          )}
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
          <button type="submit" form="order" disabled={CartSize <= 0}>
            CONFIRMAR PEDIDO
          </button>
        </Total>
      </Container>
    </>
  )
}
