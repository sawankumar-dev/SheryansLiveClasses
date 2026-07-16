import { createContext, useState } from "react";

export const MyStore = createContext()

const ContextProvider = ({children}) => {
    console.log("Context Rendering...")
    const [count, setCount] = useState(0);

    return <MyStore.Provider value={{count, setCount}}>
        {children}
    </MyStore.Provider>
}

export default ContextProvider; 