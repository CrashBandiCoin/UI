import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'
import iconChainlink from '../img/chainlink.png'

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
  color: white;
  font-size: 30px;
`

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`
const SubTitle = styled(Heading).attrs({ as: 'h2', size: 'xxl' })`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 12px;
`

const Blurb = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  background-image: linear-gradient(180deg, #fea6b9 0%, #fea6b9 100%);
  padding-bottom: 40px;
  padding-top: 40px;
`

const StyledContainer = styled(Container)`
  display: flex;

  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const LeftWrapper = styled.div`
  flex: 1;
  padding-right: 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 0;
  margin-top: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0;
    padding-left: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 32px;
  }
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <StyledContainer>
        <LeftWrapper>
          <Title> {TranslateString(999, 'TeaSwap SportParty 3')}</Title>
          <SubTitle> {TranslateString(999, 'UEFA Champions League 2021')}</SubTitle>
          <Blurb>{TranslateString(999, 'Welcome to every TeaSwapers!')}</Blurb>
          <Blurb>{TranslateString(999, 'Buy as many MINT as the vote power you want to get !')}</Blurb>
          <Blurb>
            {TranslateString(999, 'Vote here : ')}
            <a href="https://snapshot.org/#/tea-swap.eth">{TranslateString(999, 'VOTING SYSTEM : ')}</a>
          </Blurb>
        </LeftWrapper>
        <RightWrapper>
          <Row>
            powered by <img src={iconChainlink} alt="marketCap" width="70" />{' '}
          </Row>
        </RightWrapper>
      </StyledContainer>
    </StyledHero>
  )
}

export default Hero
