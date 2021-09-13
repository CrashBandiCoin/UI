import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'
import iconChainlink from '../img/chainlink.png'

const Row = styled.div`
  align-items: center;
  display: flex;
  text-align: right;
  color: white;
  font-size: 30px;
`

const LinkWrapper = styled.a`
  color: blue;
`

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`
const SubTitle = styled(Heading).attrs({ as: 'h2', size: 'xxl' })`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 12px;
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: #ffffff;
  font-size: 16px;
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
  flex: 3;
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
    padding-left: 0px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 0;
    padding-left: 1px;
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
            <LinkWrapper>
              <a href="https://snapshot.org/#/tea-swap.eth" target="_blank" rel="noreferrer">
                {TranslateString(999, 'VOTING SYSTEM')}
              </a>
            </LinkWrapper>
          </Blurb>
          <Blurb>
            {TranslateString(999, 'See the SportParty3 rules on our ')}
            <LinkWrapper>
              <a
                href="https://teaswap.gitbook.io/teaswap/features/sportparties/champions-league"
                target="_blank"
                rel="noreferrer"
              >
                {TranslateString(999, 'Gitbook')}
              </a>
            </LinkWrapper>
          </Blurb>
          <Blurb>
            {TranslateString(999, 'Come to speak with us on ')}
            <LinkWrapper>
              <a href="https://t.me/TeaswapFinance" target="_blank" rel="noreferrer">
                {TranslateString(999, 'Telegram Channel')}
              </a>
            </LinkWrapper>
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
