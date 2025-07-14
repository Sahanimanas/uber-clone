import React, { createContext } from 'react'

const userDataContext = createContext();

const userContext = ({children}) => {

const user = 'manas'

  return (
  
    <userDataContext.Provider value ={user}>
        {children}
    </userDataContext.Provider>

  )
}

export default userContext