'use client'
import React, { useState, createContext, useContext } from "react";

const NavigationContext = createContext({
    isOpen: false,
    toggle: () => {},
    close: () => {}
});

export const NavigationContextProvider = (
    {
        children
    }:{
        children: React.ReactNode
    }
) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(prevState => !prevState)
    const close = () => setIsOpen(false)

    return(
        <NavigationContext.Provider value={{
            isOpen,
            toggle,
            close
        }}>
            { children }
        </NavigationContext.Provider>
    )
}

const useNavigationContext = () => useContext(NavigationContext)
export default useNavigationContext