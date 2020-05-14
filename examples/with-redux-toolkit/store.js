import { configureStore } from '@reduxjs/toolkit'

import { reducer as counterReducer } from './counterSlice'
import { reducer as clockReducer } from './clockSlice'

export const store = configureStore({
  reducer: { counter: counterReducer, clock: clockReducer },
})
