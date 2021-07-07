/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'
import farmsConfig from 'config/constants/vaults'
import fetchVaults from './fetchVaults'
import fetchVaultsPrices from './fetchVaultsPrices'
import {
  fetchVaultUserEarnings,
  fetchVaultUserAllowances,
  fetchVaultUserTokenBalances,
  fetchVaultUserStakedBalances,
} from './fetchVaultUser'
import { FarmsState, Farm } from '../types'

const initialState: FarmsState = { data: [...farmsConfig] }

export const vaultsSlice = createSlice({
  name: 'Vaults',
  initialState,
  reducers: {
    setVaultsPublicData: (state, action) => {
      const liveFarmsData: Farm[] = action.payload
      state.data = state.data.map((farm) => {
        const liveFarmData = liveFarmsData.find((f) => f.pid === farm.pid && f.id === farm.id && f.type === farm.type)
        return { ...farm, ...liveFarmData }
      })
    },
    setVaultUserData: (state, action) => {
      const { arrayOfUserDataObjects } = action.payload
      arrayOfUserDataObjects.forEach((userDataEl) => {
        const { index } = userDataEl
        state.data[index] = { ...state.data[index], userData: userDataEl }
      })
    },
  },
})

// Actions
export const { setVaultsPublicData, setVaultUserData } = vaultsSlice.actions

// Thunks
export const fetchVaultsPublicDataAsync = () => async (dispatch) => {
  let farms = await fetchVaults()
  farms = await fetchVaultsPrices(farms)
  dispatch(setVaultsPublicData(farms))
}
export const fetchVaultUserDataAsync = (account) => async (dispatch) => {
  const userVaultAllowances = await fetchVaultUserAllowances(account)
  const userVaultTokenBalances = await fetchVaultUserTokenBalances(account)
  const userStakedBalances = await fetchVaultUserStakedBalances(account)
  const userVaultEarnings = await fetchVaultUserEarnings(account)

  const arrayOfUserDataObjects = userVaultAllowances.map((vaultAllowance, index) => {
    return {
      index,
      allowance: userVaultAllowances[index],
      tokenBalance: userVaultTokenBalances[index],
      stakedBalance: userStakedBalances[index],
      earnings: userVaultEarnings[index],
    }
  })

  dispatch(setVaultUserData({ arrayOfUserDataObjects }))
}

export default vaultsSlice.reducer
