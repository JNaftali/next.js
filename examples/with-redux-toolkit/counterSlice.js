import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => ({ ...state, count: state.count + 1 }),
    decrement: (state, action) => ({ ...state, count: state.count - 1 }),
    reset: (state, action) => ({ ...state, count: initialState.count }),
  },
})

export const {
  actions: { increment, decrement, reset },
  reducer,
} = slice
