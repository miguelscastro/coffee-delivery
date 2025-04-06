import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1.5rem;

  &:not(:first-child) {
    padding-top: 1.5rem;
  }

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  > div {
    display: flex;
    align-items: center;

    gap: 1.25rem;

    > img {
      width: 4rem;
      height: 4rem;
    }

    h3 {
      ${mixins.fonts.textM}
      margin-bottom: 0.25rem;
    }
  }
  > span {
    ${mixins.fonts.textM}
    font-weight: bold;
  }
`
export const RemoveCoffee = styled.button`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;

  max-width: 91px;

  padding: 0 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};

  > svg {
    color: ${({ theme }) => theme.colors['purple']};
  }

  > p {
    ${mixins.fonts.buttonM}
    color: ${({ theme }) => theme.colors['base-text']};
  }
`
