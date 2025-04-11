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
import { useFormContext } from 'react-hook-form'

export function AddressInfo() {
  const { register } = useFormContext()

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
          <TextInput $area="cep" placeholder="CEP" {...register('cep')} />
          <TextInput $area="street" placeholder="Rua" {...register('street')} />
          <TextInput
            $area="number"
            placeholder="Número"
            {...register('number')}
          />
          <TextInput
            $area="fullAddress"
            placeholder="Complemento"
            {...register('fullAddress')}
          />
          <TextInput
            $area="neighborhood"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <TextInput $area="city" placeholder="Cidade" {...register('city')} />
          <TextInput $area="state" placeholder="UF" {...register('state')} />
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
            <TextInput
              type="radio"
              value="credit"
              {...register('paymentMethod')}
            />
            <div>
              <CreditCard />
              <p>CARTÃO DE CRÉDITO</p>
            </div>
          </PaymentOption>
          <PaymentOption>
            <TextInput
              type="radio"
              value="debit"
              {...register('paymentMethod')}
            />
            <div>
              <Bank />
              <p>CARTÃO DE DÉBITO</p>
            </div>
          </PaymentOption>
          <PaymentOption>
            <TextInput
              type="radio"
              value="cash"
              {...register('paymentMethod')}
            />
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
