import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Container = styled.form`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const baseInfoContainer = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  gap: 2rem;
  padding: 2.5rem;
`

export const Address = styled(baseInfoContainer)`
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
export const PaymentOptions = styled(baseInfoContainer)`
  svg {
    color: ${({ theme }) => theme.colors['purple']};
  }
`

export const InfoHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h3 {
    ${mixins.fonts.textM};
  }

  p {
    ${mixins.fonts.textS};
  }
`

export const InfoContent = styled.div<{ $display: 'grid' | 'flex' }>`
  ${({ $display }) =>
    $display === 'flex'
      ? `
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 0.75rem;
      `
      : `
        display: grid;
        grid-template-columns: 200px 276px 60px;
        grid-template-areas:
          'cep . .'
          'street street street'
          'number fullAddress fullAddress'
          'neighborhood city federalState';
        gap: 0.25rem;
      `};
`

export const TextInput = styled.input<{ $area?: string }>`
  grid-area: ${({ $area }) => $area || 'auto'};

  color: ${({ theme }) => theme.colors['base-label']};
  background: ${({ theme }) => theme.colors['base-input']};

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  padding: 0.75rem;

  &:not(:nth-last-child(-n + 3)) {
    margin-bottom: 1rem;
  }

  &:nth-child(3),
  &:nth-child(5),
  &:nth-child(6) {
    margin-right: 0.75rem;
  }
`
export const PaymentOption = styled.label`
  display: flex;
  max-width: 178px;

  cursor: pointer;
  user-select: none;

  > input[type='radio'] {
    display: none;
  }

  &:has(input:checked) > div {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    border: 1px solid ${({ theme }) => theme.colors['purple']};
  }

  > div {
    display: flex;
    gap: 0.75rem;

    width: 178px;

    padding: 1rem;
    border-radius: 6px;

    transition: 0.2s;
    background: ${({ theme }) => theme.colors['base-button']};

    p {
      ${mixins.fonts.buttonM}
    }
  }
  > div:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`
