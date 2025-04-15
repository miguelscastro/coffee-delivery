import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Banner = styled.section`
  position: relative;

  img#banner-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: calc(100vh - 104px);
    width: 100vw;
    object-fit: cover;
  }
`

export const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    user-select: none;
  }

  padding: 5.875rem 10rem;

  margin: 0 auto;
  max-height: 544px;
  max-width: 1440px;

  @media screen and (max-width: 1440px) {
    padding: 2.5rem 2rem;
    width: 1000px;

    img {
      width: 400px;
    }
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4.125rem;
  max-width: 588px;

  > h1 {
    ${mixins.fonts.titleXL};
    color: ${({ theme }) => theme.colors['base-title']};
  }
  > p {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
  @media screen and (max-width: 1440px) {
    > h1 {
      ${mixins.fonts.titleL}
    }
    > p {
      ${mixins.fonts.textM}
    }
  }
`

export const Info = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;

  li {
    list-style-type: none;
    ${mixins.fonts.textM};
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 8px;
      border-radius: 100%;
    }
  }

  @media screen and (max-width: 1440px) {
    li {
      ${mixins.fonts.textS};
    }
  }
`
export const CoffesList = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1440px;

  padding: 0 10rem;
  margin: 0 auto 9.8125rem;

  h2 {
    ${mixins.fonts.titleL}
    margin-bottom: 3.375rem;
  }

  @media screen and (max-width: 1440px) {
    width: 1000px;
    padding: 0 2rem;
    margin-bottom: 1.5rem;

    h2 {
      ${mixins.fonts.titleM}
      margin-bottom: 2rem;
    }
  }
`
export const Coffees = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 1440px) {
    gap: 2rem;
  }
`
