import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './app/features/counterSlice'

const App = () => {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className='min-h-screen bg-gray-500'>
      <h2>Reduxjs-toolkit</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default App