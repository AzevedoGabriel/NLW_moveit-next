import { createContext, ReactNode } from "react";

interface CountDownContextData {

}

interface CountDownProviderProps {
    children: ReactNode;
}

const CountDownContext = createContext({} as CountDownContextData);

export function CountDownProvider({ children }: CountDownProviderProps) {

    return (
        <CountDownContext.Provider value={{}}>
            children
        </CountDownContext.Provider>
    )
}