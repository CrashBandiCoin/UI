/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import matchdays from 'config/constants/matchdays'
import fetchMatchdays from './fetchMatchdays'
import fillInMatchdays from './fillInMatchdays'
import { MatchdayState, Matchday } from '../types'



const initialState: MatchdayState = { data: [...matchdays] }

export const matchdaysSlice = createSlice({
  name: 'Matchdays',
  initialState,
  reducers: {
    setMatchdaysPublicData: (state, action) => {
      const liveMatchdaysData: Matchday[] = action.payload
      state.data = state.data.map((matchday) => {
        const liveMatchdayData = liveMatchdaysData.find((f) => f.id === matchday.id)
        return { ...matchday, ...liveMatchdayData }
      })
    },
  },
})

// Actions
export const { setMatchdaysPublicData, } = matchdaysSlice.actions

// Thunks
export const fetchMatchdaysPublicDataAsync = () => async (dispatch) => {
  let thunkMatchdays = await fetchMatchdays()
  thunkMatchdays = fillInMatchdays(thunkMatchdays)
  dispatch(setMatchdaysPublicData(thunkMatchdays))
}

export default matchdaysSlice.reducer
