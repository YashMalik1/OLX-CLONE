import { useState, createContext } from "react";


export const QueryHostelContext = createContext();

export const QueryHostelContextProvider = ({ children }) => {
    const [queryHostel, setQueryHostel] = useState("");

    return (
        <QueryHostelContext.Provider value={{queryHostel, setQueryHostel}}>
            { children }
        </QueryHostelContext.Provider>
    )
}