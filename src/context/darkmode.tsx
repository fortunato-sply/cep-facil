import React, { ReactNode, useState } from 'react';

export interface DarkModeContextType {
    isDarkMode: boolean,
    toggleDarkMode: () => void
}

interface ProviderType {
    children: ReactNode
}

export const DarkModeContext = React.createContext<DarkModeContextType | null>(null);
DarkModeContext.displayName = 'DarkModeContext';

export const DarkModeProvider = ({ children }: ProviderType) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <DarkModeContext.Provider
            value={{
                isDarkMode,
                toggleDarkMode
            }}
        >
            {children}
        </DarkModeContext.Provider>
    )
}