import { SelectedCoffee } from '../SelectedCoffeeCard'
import { Container, Total } from './styles'

export function Cart() {
  return (
    <>
      <Container>
        <SelectedCoffee />
        <Total>
          <div>
            <p>Total de itens</p> <span>R$ 5,00</span>
          </div>
          <div>
            <p>Entrega</p> <span>R$ 3,00</span>
          </div>
          <div>
            <p>Total</p> <span>R$ 8,00</span>
          </div>
          <button>CONFIRMAR PEDIDO</button>
        </Total>
      </Container>
    </>
  )
}
