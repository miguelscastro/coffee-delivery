import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  a {
    height: 40px;
  }
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background-color: ${({ theme }) => theme.colors['purple-light']};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      ${mixins.fonts.textS}
      color: ${({ theme }) => theme.colors['purple-dark']};
    }

    padding: 0.5rem;
    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};

    padding: 0.5rem;
    border-radius: 6px;

    &[aria-disabled='true'] {
      pointer-events: none;
    }
  }
`
