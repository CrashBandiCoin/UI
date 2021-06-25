import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { languageList } from 'config/localization/languages'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import {usePriceCakeBusd, usePriceMintBusd, usePriceTeaSportBusd} from 'state/hooks'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const mintPriceUsd = usePriceMintBusd()
  const teasportPriceUsd = usePriceTeaSportBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={languageList}
      setLang={setSelectedLanguage}
      mintPriceUsd={mintPriceUsd}
      cakePriceUsd={cakePriceUsd.toNumber()}
      teasportPriceUsd={teasportPriceUsd}
      links={config}
      {...props}
    />
  )
}

export default Menu
