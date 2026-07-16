import { useState } from "react";
import { createContext } from "react";

export const MyStore = createContext();

// ye puri website ka data handle karega aur sabhi component ko dega
export const ContextProvider = ({children}) => {
    const [centralValue, setCentralValue]= useState("I am from MyStore")

    return <MyStore.Provider value={centralValue}>
        {children}
    </MyStore.Provider>
}