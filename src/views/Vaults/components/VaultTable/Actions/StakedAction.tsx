import React, { useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { useDispatch } from 'react-redux'
import { Button, useModal, IconButton, AddIcon, MinusIcon, Skeleton, Text } from '@pancakeswap-libs/uikit'
import { useLocation } from 'react-router-dom'
import { BigNumber } from 'bignumber.js'
import UnlockButton from 'components/UnlockButton'
import Balance from 'components/Balance'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { getContract } from 'utils/erc20'
import { useVaultUser, useLpTokenPrice } from 'state/hooks'
import { fetchVaultUserDataAsync } from 'state/vaults'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useERC20 } from 'hooks/useContract'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getBalanceAmount, getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import useUnstakeFarms from '../../../hooks/useUnstakeFarms'
import DepositModal from '../../DepositModal'
import WithdrawModal from '../../WithdrawModal'
import useStakeFarms from '../../../hooks/useStakeFarms'
import useApproveFarm from '../../../hooks/useApproveFarm'
import { ActionContainer, ActionTitles, ActionContent, Earned } from './styles'

const IconButtonWrapper = styled.div`
  display: flex;
`

interface StackedActionProps extends FarmWithStakedValue {
  userDataReady: boolean,
  depositFeeBP?: number
}

const Staked: React.FunctionComponent<StackedActionProps> = ({
  id,
  pid,
  lpSymbol,
  lpAddresses,
  quoteToken,
  token,
  userDataReady,
  depositFeeBP,
  isTokenOnly
}) => {

  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { allowance, tokenBalance, stakedBalance, earnings } = useVaultUser(pid, id)
  const { onStake } = useStakeFarms(pid)
  const { onUnstake } = useUnstakeFarms(pid)
  const location = useLocation()
  const lpPrice = useLpTokenPrice(lpSymbol)

  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAdresses: quoteToken.address,
    quoteTokenSymbol: quoteToken.symbol,
    tokenAddresses: token.address,
  })
  const tokenAddress = token.address[process.env.REACT_APP_CHAIN_ID]

  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`

  const handleStake = async (amount: string) => {
    await onStake(amount)
  }

  const handleUnstake = async (amount: string) => {
    await onUnstake(amount, "0")
  }

  const displayBalance = useCallback(() => {
    const stakedBalanceBigNumber = getBalanceAmount(stakedBalance.plus(earnings))
    if (stakedBalanceBigNumber.gt(0) && stakedBalanceBigNumber.lt(0.0001)) {
      return getFullDisplayBalance(stakedBalance.plus(earnings)).toLocaleString()
    }
    return stakedBalanceBigNumber.toFixed(10, BigNumber.ROUND_DOWN)
  }, [stakedBalance, earnings])

  const [onPresentDeposit] = useModal(
    <DepositModal max={tokenBalance} onConfirm={handleStake} tokenName={lpSymbol} depositFeeBP={depositFeeBP} />
  )
  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance.plus(earnings)} onConfirm={handleUnstake} tokenName={lpSymbol} />,
  )
  const lpContract = useMemo(() => {
    if(isTokenOnly){
      return getContract(ethereum as provider, tokenAddress);
    }
    return getContract(ethereum as provider, lpAddress);
  }, [ethereum, lpAddress, tokenAddress, isTokenOnly])
  const dispatch = useDispatch()
  const { onApprove } = useApproveFarm(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()

      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  if (!account) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
            Start Farming
          </Text>
        </ActionTitles>
        <ActionContent>
          <UnlockButton width="100%" />
        </ActionContent>
      </ActionContainer>
    )
  }

  if (isApproved) {
    if (stakedBalance.plus(earnings).gt(0)) {
      return (
        <ActionContainer>
          <ActionTitles>
            <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="4px">
              {lpSymbol}
            </Text>
            <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
              Staked
            </Text>
          </ActionTitles>
          <ActionContent>
            <div>
              <Earned>{displayBalance()}</Earned>
              {stakedBalance.plus(earnings).gt(0) && lpPrice.gt(0) && (
                <Balance
                  fontSize="12px"
                  color="textSubtle"
                  decimals={10}
                  value={getBalanceNumber(lpPrice.times(stakedBalance.plus(earnings)))}
                  unit=" USD"
                  prefix="~"
                />
              )}
            </div>
            <IconButtonWrapper>
              <IconButton variant="secondary" onClick={onPresentWithdraw} mr="6px">
                <MinusIcon color="primary" width="14px" />
              </IconButton>
              <IconButton
                variant="secondary"
                onClick={onPresentDeposit}
                disabled={['history', 'archived'].some((item) => location.pathname.includes(item))}
              >
                <AddIcon color="primary" width="14px" />
              </IconButton>
            </IconButtonWrapper>
          </ActionContent>
        </ActionContainer>
      )
    }

    return (
      <ActionContainer>
        <ActionTitles>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px" pr="4px">
            {'Stake'.toUpperCase()}
          </Text>
          <Text bold textTransform="uppercase" color="secondary" fontSize="12px">
            {lpSymbol}
          </Text>
        </ActionTitles>
        <ActionContent>
          <Button
            width="100%"
            onClick={onPresentDeposit}
            variant="secondary"
            disabled={['history', 'archived'].some((item) => location.pathname.includes(item))}
          >
            Stake LP
          </Button>
        </ActionContent>
      </ActionContainer>
    )
  }

  if (!userDataReady) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
            Start Farming
          </Text>
        </ActionTitles>
        <ActionContent>
          <Skeleton width={180} marginBottom={28} marginTop={14} />
        </ActionContent>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer>
      <ActionTitles>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          Approve Farm
        </Text>
      </ActionTitles>
      <ActionContent>
        <Button width="100%" disabled={requestedApproval} onClick={handleApprove} variant="secondary">
          Approve
        </Button>
      </ActionContent>
    </ActionContainer>
  )
}

export default Staked
