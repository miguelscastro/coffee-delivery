import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 1;
`

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
  @media screen and (max-width: 1440px) {
    max-width: 1000px;
    padding: 2rem 2rem;
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
    cursor: inherit;
    user-select: none;

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

    position: relative;

    padding: 0.5rem;
    border-radius: 6px;

    &[aria-disabled='true'] {
      pointer-events: none;
    }
    span {
      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
