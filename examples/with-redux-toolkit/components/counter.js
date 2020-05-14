import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
