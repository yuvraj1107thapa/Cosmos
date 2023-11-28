import { useState } from "react";
import { createContext } from "react";

export const AsideDataContext = createContext();

export const AsideDataContextProvider = ({children}) =>{
     const [searchUser, setSearchUser] = useState("")

    return <AsideDataContext.Provider value={{searchUser,setSearchUser}}>{children}</AsideDataContext.Provider>
}