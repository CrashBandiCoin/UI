import React, { useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import { Modal, Button, Flex, LinkExternal } from '@pancakeswap-libs/uikit'
import BalanceInput from 'components/Input/BalanceInput'
import useTokenBalance from 'hooks/useTokenBalance'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface Props {
  currency: string
  contract: any
  currencyAddress: string
  onDismiss?: () => void
}

const ContributeModal: React.FC<Props> = ({ currency, contract, currencyAddress, onDismiss }) => {
  const [value, setValue] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const balance = getFullDisplayBalance(useTokenBalance(currencyAddress))

  return (
    <Modal title={`Contribute ${currency}`} onDismiss={onDismiss}>
      <BalanceInput
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        symbol={currency}
        max={balance}
        onSelectMax={() => setValue(balance.toString())}
      />
      <Flex justifyContent="space-between" mb="24px">
        <Button width="100%" variant="secondary" onClick={onDismiss} mr="8px">
          Cancel
        </Button>
        <Button
          width="100%"
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await contract.methods
              .deposit(new BigNumber(value).times(new BigNumber(10).pow(18)).toString())
              .send({ from: account })
            setPendingTx(false)
            onDismiss()
          }}
        >
          Confirm
        </Button>
      </Flex>
      <LinkExternal
        href="https://pancakeswap.finance/add/0x41AA9F842AF935cC71252C0dE4BFF13F821546b8/0x2Deb28ec61E7B6B4Bba5f8398398330227Cd293f"
        style={{ margin: 'auto' }}
      >
        {`Get ${currency}`}
      </LinkExternal>
    </Modal>
  )
}

export default ContributeModal
