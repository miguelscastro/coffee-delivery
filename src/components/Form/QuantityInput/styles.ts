import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  max-height: 38px;

  display: flex;
  gap: 4px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.colors.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  span {
    color: ${({ theme }) => theme.colors['base-title']};
  }
`
