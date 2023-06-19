import { createContext, useState } from "react";

export type AuthUser = {
   name: string,
   email: string 
}
type UserContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
// use type insersion on useContext when we are not sure about the type in the future. 
export const UserContext = createContext({} as UserContextType)



type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContextProvide = ({children}: UserContextProviderProps)=> {
    const [user, setUser] = useState<AuthUser|null>(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}