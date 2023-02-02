import { createContext, useState } from 'react';
import React from 'react'

export const MyContext = createContext();

export function ContextProvider({children}){
    
    const [ openModalAgendador , setOpenModalAgendador ] = useState(false);

    return(
        <MyContext.Provider value={{ openModalAgendador , setOpenModalAgendador }}>
            {children}
        </MyContext.Provider>
    )
}
