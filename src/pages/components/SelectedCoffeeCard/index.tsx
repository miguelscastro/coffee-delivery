import { Container, RemoveCoffee } from './styles'
import coffeeImg from '../../../assets/images/coffees/cafe-com-leite.png'
import { Trash } from '@phosphor-icons/react'

export function SelectedCoffee() {
  return (
    <>
      <Container>
        <div>
          <img src={coffeeImg} alt="" />
          <div>
            <h3>Expresso tradicional</h3>
            <div>
              {/* <QuantityInput
            decrementQuantity={handleDecrementQuantity}
            quantity={quantity}
            incrementQuantity={handleIncrementQuantity}
          /> */}
              <RemoveCoffee>
                <Trash />
                <p>REMOVER</p>
              </RemoveCoffee>
            </div>
          </div>
        </div>
        <span>RS 15,00</span>
      </Container>
      <Container>
        <div>
          <img src={coffeeImg} alt="" />
          <div>
            <h3>Expresso tradicional</h3>
            <div>
              {/* <QuantityInput
            decrementQuantity={handleDecrementQuantity}
            quantity={quantity}
            incrementQuantity={handleIncrementQuantity}
          /> */}
              <RemoveCoffee>
                <Trash />
                <p>REMOVER</p>
              </RemoveCoffee>
            </div>
          </div>
        </div>
        <span>RS 15,00</span>
      </Container>
    </>
  )
}
