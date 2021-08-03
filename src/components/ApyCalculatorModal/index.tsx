import BigNumber from 'bignumber.js'
import React from 'react'
import styled from 'styled-components'
import { Modal, Text, LinkExternal, Flex, Box } from '@pancakeswap-libs/uikit'
import { tokenEarnedPerThousandDollarsCompounding, getRoi } from 'utils/compoundApyHelpers'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  tokenPrice: number
  apy: BigNumber
  linkLabel: string
  linkHref: string
  earningTokenSymbol?: string
  roundingDecimals?: number
  compoundFrequency?: number
  performanceFee?: number
  isFarm?: boolean
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 12px;
`

const GridItem = styled.div``

const GridHeaderItem = styled.div`
  max-width: 180px;
`

const BulletList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
  }

  li::before {
    content: '•';
    margin-right: 4px;
  }

  li::marker {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  tokenPrice,
  apy,
  linkLabel,
  linkHref,
  earningTokenSymbol = 'CAKE',
  roundingDecimals = 2,
  compoundFrequency = 1,
  performanceFee = 0,
  isFarm = false,
}) => {
  const oneThousandDollarsWorthOfToken = 1000 / tokenPrice

  const tokenEarnedPerThousand1D = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 1,
    farmApr: apy,
    tokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })
  const tokenEarnedPerThousand7D = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 7,
    farmApr: apy,
    tokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })
  const tokenEarnedPerThousand30D = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 30,
    farmApr: apy,
    tokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })
  const tokenEarnedPerThousand365D = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 365,
    farmApr: apy,
    tokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })

  return (
    <Modal title='ROI' onDismiss={onDismiss}>
      {isFarm && (
        <Flex mb="24px" justifyContent="space-between">
          <Text small color="textSubtle">
            APR (incl. LP rewards)
          </Text>
          <Text small>{apy.toFixed(roundingDecimals)}%</Text>
        </Flex>
      )}
      <Grid>
        <GridHeaderItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="12px">
            Timeframe
          </Text>
        </GridHeaderItem>
        <GridHeaderItem>
          <Text
            textAlign="right"
            fontSize="12px"
            bold
            color="textSubtle"
            textTransform="uppercase"
            mr="12px"
            ml="12px"
            mb="12px"
          >
            ROI
          </Text>
        </GridHeaderItem>
        <GridHeaderItem>
          <Text textAlign="right" fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="12px">
            {`${earningTokenSymbol}  per $1,000`}
          </Text>
        </GridHeaderItem>
        {/* 1 day row */}
        <GridItem>
          <Text>1d</Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right" mr="12px" ml="12px">
            {getRoi({ amountEarned: tokenEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfToken }).toFixed(
              roundingDecimals,
            )}
            %
          </Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right">{tokenEarnedPerThousand1D}</Text>
        </GridItem>
        {/* 7 day row */}
        <GridItem>
          <Text>7d</Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right" mr="12px" ml="12px">
            {getRoi({ amountEarned: tokenEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfToken }).toFixed(
              roundingDecimals,
            )}
            %
          </Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right">{tokenEarnedPerThousand7D}</Text>
        </GridItem>
        {/* 30 day row */}
        <GridItem>
          <Text>30d</Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right" mr="12px" ml="12px">
            {getRoi({
              amountEarned: tokenEarnedPerThousand30D,
              amountInvested: oneThousandDollarsWorthOfToken,
            }).toFixed(roundingDecimals)}
            %
          </Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right">{tokenEarnedPerThousand30D}</Text>
        </GridItem>
        {/* 365 day / APY row */}
        <GridItem style={{ maxWidth: '180px' }}>
          <Text>365d (APY)</Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right" mr="12px" ml="12px">
            {getRoi({
              amountEarned: tokenEarnedPerThousand365D,
              amountInvested: oneThousandDollarsWorthOfToken,
            }).toFixed(roundingDecimals)}
            %
          </Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right">{tokenEarnedPerThousand365D}</Text>
        </GridItem>
      </Grid>
      <Flex justifyContent="center">
        <Box mb="28px" maxWidth="280px" p="4px">
          <BulletList>
            <li>
              <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                Calculated based on current rates.
              </Text>
            </li>
            <li>
              <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                {`Compounding ${compoundFrequency}x daily.`}
              </Text>
            </li>
            {isFarm && (
              <li>
                <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                  LP rewards: 0.17% trading fees, distributed proportionally among LP token holders.
                </Text>
              </li>
            )}
            <li>
              <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.
              </Text>
            </li>
            {performanceFee > 0 && (
              <li>
                <Text mt="14px" fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                  {`All estimated rates take into account this pool’s ${performanceFee}% performance fee`}
                </Text>
              </li>
            )}
          </BulletList>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <LinkExternal href={linkHref}>{linkLabel}</LinkExternal>
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
