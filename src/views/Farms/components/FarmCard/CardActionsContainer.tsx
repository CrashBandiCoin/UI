import React, { useMemo, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { Button, Flex, Text } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { useFarmFromPid, useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import { useApprove } from 'hooks/useApprove'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'

const Action = styled.div`
  padding-top: 16px;
`
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  ethereum?: provider
  account?: string
  type?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, ethereum, account, type }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { id, pid, lpAddresses, tokenAddresses, isTokenOnly, depositFeeBP } = useFarmFromPid(farm.pid, farm.id)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid, id)
  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID];
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpContract = useMemo(() => {
    if(isTokenOnly){
      return getContract(ethereum as provider, tokenAddress);
    }
    return getContract(ethereum as provider, lpAddress);
  }, [ethereum, lpAddress, tokenAddress, isTokenOnly])

  const { onApprove } = useApprove(lpContract, farm.type)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction stakedBalance={stakedBalance} tokenBalance={tokenBalance} tokenName={lpName} pid={pid} type={farm.type} depositFeeBP={depositFeeBP} />
    ) : (
      <Button mt="8px" width="100%" disabled={requestedApproval} onClick={handleApprove}>
        {TranslateString(999, 'Approve Contract')}
      </Button>
    )
  }

  const zapUrl = `/zap?to=lpPcsV2-wallet-${lpAddress}&slippage=50`

  return (
    <Action>
      <Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
          { type }
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {TranslateString(999, 'Earned')}
        </Text>
      </Flex>
      <HarvestAction earnings={earnings} pid={pid} type={farm.type} />
      <Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
          {lpName}
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {TranslateString(999, 'Staked')}
        </Text>
      </Flex>
      {!isTokenOnly && !isApproved && (
        <Button mt="8px" width="100%" variant="secondary" style={{ background: "white" }} as={Link} to={zapUrl}>
          Get LP
        </Button>
      )}
      {!account ? <UnlockButton mt="8px" width="100%" /> : renderApprovalOrStakeButton()}
      {!isTokenOnly && isApproved && (
        <Flex justifyContent="flex-end">
          <Button mt="8px" variant="secondary" style={{ background: "white" }} as={Link} to={zapUrl}>
            Get LP
          </Button>
        </Flex>
      )}
    </Action>
  )
}

export default CardActions
