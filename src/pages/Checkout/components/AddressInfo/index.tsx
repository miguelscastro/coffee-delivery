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
  ErrorText,
  InfoContent,
  InfoHeader,
  InputWrapper,
  OptionalText,
  PaymentOption,
  PaymentOptions,
  TextInput,
} from './styles'
import { useFormContext } from 'react-hook-form'

interface ErrorType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}
export function AddressInfo() {
  const { register, watch, formState } = useFormContext()

  const isFilled = watch('fullAddress')

  const { errors } = formState as unknown as ErrorType

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
          <InputWrapper $area="cep">
            <TextInput placeholder="CEP" {...register('cep')} type="number" />
            {errors.cep?.message && <ErrorText>{errors.cep.message}</ErrorText>}
          </InputWrapper>
          <InputWrapper $area="street">
            <TextInput placeholder="Rua" {...register('street')} />
            {errors.street?.message && (
              <ErrorText>{errors.street.message}</ErrorText>
            )}
          </InputWrapper>
          <InputWrapper $area="number">
            <TextInput placeholder="Número" {...register('number')} />
            {errors.number?.message && (
              <ErrorText>{errors.number.message}</ErrorText>
            )}
          </InputWrapper>
          <InputWrapper $area="fullAddress">
            <TextInput placeholder="Complemento" {...register('fullAddress')} />
            {isFilled === '' && <OptionalText>Opcional</OptionalText>}
          </InputWrapper>
          <InputWrapper $area="neighborhood">
            <TextInput placeholder="Bairro" {...register('neighborhood')} />
            {errors.neighborhood?.message && (
              <ErrorText>{errors.neighborhood.message}</ErrorText>
            )}
          </InputWrapper>
          <InputWrapper $area="city">
            <TextInput placeholder="Cidade" {...register('city')} />
            {errors.city?.message && (
              <ErrorText>{errors.city.message}</ErrorText>
            )}
          </InputWrapper>
          <InputWrapper $area="state">
            <TextInput placeholder="UF" {...register('state')} />
            {errors.state?.message && (
              <ErrorText>{errors.state.message}</ErrorText>
            )}
          </InputWrapper>
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
          <div>
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
          </div>
          {errors.paymentMethod?.message && (
            <ErrorText>{errors.paymentMethod.message}</ErrorText>
          )}
        </InfoContent>
      </PaymentOptions>
    </Container>
  )
}
