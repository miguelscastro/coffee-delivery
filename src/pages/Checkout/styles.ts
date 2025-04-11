import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  max-width: 1440px;
  padding: 0 10rem;
  margin: 0 auto;
  gap: 2rem;
`
export const OrderForm = styled.form`
  display: flex;
  justify-content: space-between;
`

export const Address = styled.section`
  > h2 {
    ${mixins.fonts.titleXS};
    margin-bottom: 0.9375rem;
  }
`

export const CartTotal = styled.aside`
  > h2 {
    ${mixins.fonts.titleXS}
    margin-bottom: 0.9375rem;
  }
`
