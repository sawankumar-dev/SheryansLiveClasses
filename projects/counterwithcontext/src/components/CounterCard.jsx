import { useContext } from 'react'
import  Counter  from '../context/CounterContext'

const CounterCard = () => {
    const {count, setCount} = useContext(Counter)
  return (
    <div>
        <h2>Counter Card</h2>
        <p>{count}</p>
        <button onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}

export default CounterCard