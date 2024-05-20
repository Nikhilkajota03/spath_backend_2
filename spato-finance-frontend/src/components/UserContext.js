import React, { createContext, useState } from "react"

export const UserContext = createContext({
  user: undefined,
  setUser: () => {},
})

export const UserContextProvider = props => {
  const [username, setUserName] = useState(undefined)

  return (
    <UserContext.Provider value={{ username, setUserName }}>
      {props.children}
    </UserContext.Provider>
  )
}
