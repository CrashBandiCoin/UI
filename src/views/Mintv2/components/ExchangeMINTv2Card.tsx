import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import { useMintApprove } from 'hooks/useApprove'
import useTokenBalance from 'hooks/useTokenBalance'
import {getCakeAddress, getMintAddress} from 'utils/addressHelpers'
import { useMintAllowance } from 'hooks/useAllowance'
import useExchangeMint from 'hooks/useExchangeMint'
import MintWalletBalance from './MintWalletBalance'
import MintWalletBalance2 from './MintWalletBalance2'
import imageMint from './Mint_Logo.png'

const StyledFarmStakingCard = styled(Card)``

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.textSubtle};
  margin: 16px 0;
`

const CardImage = styled.img`
  margin-right: 8px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const ExchangeMINTv2Card = () => {
  const { account } = useWallet()
  const mintBalance = useTokenBalance(getMintAddress())
  const [requestedApproval, setRequestedApproval] = useState(false)
  const allowance = useMintAllowance()
  const onApprove = useMintApprove()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const { onExchange } = useExchangeMint()

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrExchangeButton = () => {
    return isApproved ? (
      <Button
        style={{ width: '100%' }}
        mt="8px"
        disabled={mintBalance.isLessThanOrEqualTo(0)}
        onClick={async () => {
          await onExchange(mintBalance.toString())
        }}
      >
        Exchange
      </Button>
    ) : (
      <Button style={{ width: '100%' }} mt="8px" disabled={requestedApproval} onClick={handleApprove}>
        Approve
      </Button>
    )
  }

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          Exchange MINT to MINT v2
        </Heading>
        <RowBetween>
          <CardImage
            src={imageMint}
            alt="mint logo"
            width={64}
            height={64}
          />
          <Block>
            <Label>MINT in Wallet</Label>
            <MintWalletBalance />
          </Block>
        </RowBetween>
        <Divider />
        <RowBetween>
          <CardImage
            src={imageMint}
            alt="mint logo"
            width={64}
            height={64}
          />
          <Block>
            <Label>MINT v2 in Wallet</Label>
            <MintWalletBalance2 />
          </Block>
        </RowBetween>
        <Actions>{account ? renderApprovalOrExchangeButton() : <UnlockButton fullWidth />}</Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default ExchangeMINTv2Card
