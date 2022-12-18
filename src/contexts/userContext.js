import { createContext, } from "react";


export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const user = {
    firstName: "Давид",
    lastName: "Аракелян ",
    avatar: "/avatar.jpg",
    avatar2: "/avatar@2x.jpg"
  }

  return <UserContext.Provider value={user} >{children}</UserContext.Provider>
}