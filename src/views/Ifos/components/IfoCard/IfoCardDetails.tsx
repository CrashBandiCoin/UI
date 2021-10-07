import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, LinkExternal, Link } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Contract } from 'web3-eth-contract'
import { getBalanceNumber } from '../../../../utils/formatBalance'
import { IfoStatus } from '../../../../config/constants/types'

export interface IfoCardDetailsProps {
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  projectSiteUrl: string
  raisingAmount: BigNumber
  totalAmount: BigNumber
  status:IfoStatus
  contract:Contract
}

const StyledIfoCardDetails = styled.div`
  margin-bottom: 24px;
`

const Item = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
`

const Display = styled(Text)`
  flex: 1;
`


const IfoCardDetails: React.FC<IfoCardDetailsProps> = ({
  launchDate,
  launchTime,
  saleAmount,
  raiseAmount,
  cakeToBurn,
  projectSiteUrl,
  raisingAmount,
  totalAmount,
  status,
  contract,
}) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const [userInfo, setUserInfo] = useState({ amount: 0, claimed: false })
  const [offeringTokenBalance, setOfferingTokenBalance] = useState(new BigNumber(0))

  const { account } = useWallet()

  useEffect(() => {
    const fetch = async () => {
      const balance = new BigNumber(await contract.methods.getOfferingAmount(account).call())
      const userinfo = await contract.methods.userInfo(account).call()

      setUserInfo(userinfo)
      setOfferingTokenBalance(balance)
    }

    if (account) {
      fetch()
    }
}, [account, contract.methods, pendingTx])


  const percent = ((getBalanceNumber(new BigNumber(userInfo.amount))/totalAmount.toNumber())*100000000000000000000)
  const partIfo = (5000 * percent) / 100;

  return (
    <>
      <StyledIfoCardDetails>
        <Item>
          <Display>{TranslateString(582, 'Launch Time')}</Display>
          <Text>
            {launchDate},
            <Link
              href="https://www.timeanddate.com/worldclock/singapore/singapore"
              target="blank"
              rel="noopener noreferrer"
              ml="4px"
              style={{ display: 'inline' }}
            >
              {launchTime}
            </Link>
          </Text>
        </Item>
        <Item>
          <Display>Total contribution: </Display>
          <Text>{(totalAmount.toNumber()*0.000000000000000001).toFixed(0)}</Text>
        </Item>
        <Item>
          <Display>Total JAG to deliver: </Display>
          <Text>5000 JAG</Text>
        </Item>
        <Item>
          <Display>Your part of JAG Tokens: </Display>
          <Text>{partIfo.toFixed(0)} JAG</Text>
        </Item>
      </StyledIfoCardDetails>
      <LinkExternal href={projectSiteUrl} style={{ margin: 'auto' }}>
        {TranslateString(412, 'View project site')}
      </LinkExternal>
    </>
  )
}

export default IfoCardDetails
