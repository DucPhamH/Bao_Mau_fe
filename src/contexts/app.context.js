import { createContext, useState } from 'react'
import { getAccessTokenFromLS, getInfoFromLS } from '../utils/auth'

const initialAppContext = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  info: getInfoFromLS(),
  setInfo: () => null
}

export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAppContext.isAuthenticated)
  const [info, setInfo] = useState(initialAppContext.info)
  //console.log(getAccessTokenFromLS())
  //console.log(info)
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        info,
        setInfo
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
