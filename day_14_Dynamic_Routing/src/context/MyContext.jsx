import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({ children }) => {
    const [productsData, setProductData] = useState([])
    return <MyStore.Provider value={{productsData, setProductData}}>
        {children}
    </MyStore.Provider>
}