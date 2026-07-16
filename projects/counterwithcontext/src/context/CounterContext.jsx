import { createContext, useState } from "react"


const Counter = createContext()

export const CounterProvider = ({children}) => {
    const [count, setCount] = useState(0)
    return <Counter.Provider value={{count, setCount}}>
        {children}
    </Counter.Provider>
}
export default Counter