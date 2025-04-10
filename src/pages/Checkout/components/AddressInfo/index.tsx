import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  Address,
  Container,
  InfoContent,
  InfoHeader,
  PaymentOption,
  PaymentOptions,
  TextInput,
} from './styles'

export function AddressInfo() {
  return (
    <Container>
      <Address>
        <InfoHeader>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </InfoHeader>
        <InfoContent $display="grid">
          <TextInput $area="cep" placeholder="CEP" />
          <TextInput $area="street" placeholder="Rua" />
          <TextInput $area="number" placeholder="Número" />
          <TextInput $area="fullAddress" placeholder="Complemento" />
          <TextInput $area="neighborhood" placeholder="Bairro" />
          <TextInput $area="city" placeholder="Cidade" />
          <TextInput $area="federalState" placeholder="UF" />
        </InfoContent>
      </Address>
      <PaymentOptions>
        <InfoHeader>
          <CurrencyDollar size={22} />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </InfoHeader>
        <InfoContent $display="flex">
          <PaymentOption>
            <TextInput type="radio" name="payment" value="credit" />
            <div>
              <CreditCard />
              <p>CARTÃO DE CRÉDITO</p>
            </div>
          </PaymentOption>
          <PaymentOption>
            <TextInput type="radio" name="payment" value="debit" />
            <div>
              <Bank />
              <p>CARTÃO DE DÉBITO</p>
            </div>
          </PaymentOption>
          <PaymentOption>
            <TextInput type="radio" name="payment" value="cash" />
            <div>
              <Money />
              <p>DINHEIRO</p>
            </div>
          </PaymentOption>
        </InfoContent>
      </PaymentOptions>
    </Container>
  )
}
