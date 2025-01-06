import React from 'react'

export const YetkiContext= createContext()

const AuthContext = ({children}) => {
  return (
    <YetkiContext.Provider>
      {children}
    </YetkiContext.Provider>
  )
}

export default AuthContext