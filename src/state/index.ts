import { configureStore } from '@reduxjs/toolkit'
import farmsReducer from './farms'
import poolsReducer from './pools'
import vaultsReducer from './vaults'
import matchdaysReducer from './matchdays'

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    farms: farmsReducer,
    pools: poolsReducer,
    vaults: vaultsReducer,
    matchdays: matchdaysReducer,
  },
})