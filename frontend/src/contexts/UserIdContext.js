import React, { createContext, useState } from 'react';

export const UserIdContext = createContext();

export const UserIdContextProvider = ({ children }) => {

    const [userId, setUserId] = useState('');

    return (
        <UserIdContext.Provider value={{userId, setUserId}}>
            { children }
        </UserIdContext.Provider>
    )

}