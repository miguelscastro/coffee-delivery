import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import {
  Banner,
  Heading,
  Info,
  BannerContent,
  CoffesList,
  Coffees,
} from './styles'
import coffeDeliveryBanner from '../../assets/images/banner/ilustracao-banner.svg'
import backgroundEffect from '../../assets/images/banner/background-effect.png'
import { Card } from './components/Card'
import { useEffect, useState } from 'react'

export interface CoffeeProps {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function Home() {
  const [coffeesData, setCoffeesData] = useState<CoffeeProps[]>([])
  useEffect(() => {
    const fetchCoffees = async () => {
      const response = await fetch('/coffees.json')
      const data = await response.json()
      setCoffeesData(data.coffees)
    }
    fetchCoffees()
  }, [])

  const theme = useTheme()
  return (
    <>
      <Banner>
        <BannerContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </Heading>
            <Info>
              <li>
                <ShoppingCart
                  weight="fill"
                  size={32}
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                Compra simples e segura
              </li>
              <li>
                <Package
                  weight="fill"
                  size={32}
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                Embalagem mantém o café intacto
              </li>
              <li>
                <Timer
                  weight="fill"
                  size={32}
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow'] }}
                />
                Entrega rápida e rastreada
              </li>
              <li>
                <Coffee
                  weight="fill"
                  size={32}
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['purple'] }}
                />
                O café chega fresquinho até você
              </li>
            </Info>
          </div>
          <img src={coffeDeliveryBanner} alt="" />
        </BannerContent>
        <img src={backgroundEffect} id="banner-bg" alt="" />
      </Banner>
      <CoffesList>
        <h2>Nossos cafés</h2>
        <Coffees>
          {coffeesData.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </Coffees>
      </CoffesList>
    </>
  )
}
