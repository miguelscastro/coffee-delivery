import { Aside, Container, HeaderContainer } from './styles'
import coffeDeliveryLogo from '../../assets/images/logo/coffe-delivery-logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartItems } = useCart()
  return (
    <Container>
      <HeaderContainer>
        <NavLink to="/">
          <img src={coffeDeliveryLogo} alt="Coffe Delivery" />
        </NavLink>
        <Aside>
          <div>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </div>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {cartItems.length > 0 ? <span>{cartItems.length}</span> : null}
          </NavLink>
        </Aside>
      </HeaderContainer>
    </Container>
  )
}
