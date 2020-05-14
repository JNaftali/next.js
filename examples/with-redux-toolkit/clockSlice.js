import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  light: false,
  lastUpdate: 0,
}

const slice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    tick: {
      reducer: (state, action) => ({
        ...state,
        lastUpdate: action.payload.lastUpdate,
        light: !!action.light,
      }),
      prepare: (light) => {
        return {
          payload: {
            light: light,
            lastUpdate: Date.now(),
          },
        }
      },
    },
  },
})

export const {
  actions: { tick },
  reducer,
} = slice
