import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/features/counterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        dispatch(increment())
      }}>increment</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>decrement</button>
    </div>
  )
}

export default App