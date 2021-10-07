import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap-libs/uikit'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import { Ifo } from 'config/constants/types'

import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const activeIfo: Ifo[] = ifosConfig.filter((ifo) => ifo.isActive)

const LaunchIfoCallout = styled(BaseLayout)`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 32px 0;

  @media screen and (max-width:950px) {
    flex-direction:column;
    & div {
      flex-direction: row;
      justify-content: center;
      text-align: center;
    }
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */

const IfoList = () => {
  const TranslateString = useI18n()

  return (
    <>
      <LaunchIfoCallout>
        <div>
          <Title as="h2">{TranslateString(592, 'How to take part')}</Title>
          <Heading mb="16px">{TranslateString(594, 'Before Sale')}:</Heading>
          <List>
            <li> Buy MINT and SUGAR tokens</li>
            <li>Get MINT-SUGAR LP tokens by adding MINT and SUGAR liquidity</li>
          </List>
          <Flex mb="16px">
            <LinkExternal href="https://pancakeswap.finance/swap?outputCurrency=0x41AA9F842AF935cC71252C0dE4BFF13F821546b8" mr="16px">
              Buy SUGAR
            </LinkExternal>
            <LinkExternal href="https://pancakeswap.finance/add/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8/0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f
">
              {TranslateString(999, 'Get LP tokens')}
            </LinkExternal>
          </Flex>
        </div>
        <div>
          <div>
            <Title as="h2">{TranslateString(512, 'Want to launch your own IFO?')}</Title>
            <Text mb={3}>

                Launch your project with TeaSwap !

            </Text>
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdqjB5dRtgJzHLudDXVl3STboZp-89zeD7wuxKpiPoBiwGVJw/viewform"
              external
            >
              {TranslateString(516, 'Apply to launch')}
            </Button>
            <Text as="div" pt="16px">
              <Button
                as="a"
                variant="secondary"
                href="https://teaswap.gitbook.io/teaswap/features/ifo-initial-farm-offering"
              >
                {TranslateString(610, 'Read more')}
              </Button>
            </Text>
          </div>
        </div>
      </LaunchIfoCallout>
      <IfoCards>
        {activeIfo.map((ifo) => (
          <IfoCard key={ifo.id} ifo={ifo} />
        ))}
      </IfoCards>
    </>
  )
}

export default IfoList
