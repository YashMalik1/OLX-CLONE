import { useState, createContext } from "react";


export const QueryNameContext = createContext();

export const QueryNameContextProvider = ({ children }) => {
    const [queryName, setQueryName] = useState("");

    return (
        <QueryNameContext.Provider value={{queryName, setQueryName}}>
            { children }
        </QueryNameContext.Provider>
    )
}