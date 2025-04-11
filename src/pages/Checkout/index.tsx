import { FormProvider, useForm } from 'react-hook-form'
import { AddressInfo } from './components/AddressInfo'
import { Cart } from './components/Cart'
import { Address, CartTotal, Container, OrderForm } from './styles'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCart } from '../../hooks/useCart'

const AddressInfoValidationSchema = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

type AddressInfoData = z.infer<typeof AddressInfoValidationSchema>

export function Checkout() {
  const AddressInfoForm = useForm<AddressInfoData>({
    resolver: zodResolver(AddressInfoValidationSchema),
  })

  const { handleSubmit } = AddressInfoForm

  const { coffees } = useCart()

  function confirmOrder(data: AddressInfoData) {
    const address = data
    const order = { coffees, address }
    console.log(order)
  }

  return (
    <Container>
      <FormProvider {...AddressInfoForm}>
        <OrderForm
          id="order"
          onSubmit={handleSubmit(confirmOrder, (errors) => {
            console.log(errors)
          })}
        >
          <Address>
            <h2>Complete seu pedido</h2>
            <AddressInfo />
          </Address>

          <CartTotal>
            <h2>Cafés Selecionados</h2>
            <Cart />
          </CartTotal>
        </OrderForm>
      </FormProvider>
    </Container>
  )
}
