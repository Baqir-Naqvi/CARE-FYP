import React, { createContext, useState, useContext } from 'react'
const Context = createContext()
export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(true)
  const [renderSection, setRenderSection] = useState('true')

  return (
    <Context.Provider value={{ 
        state, setState,
        renderSection, setRenderSection
     }}>{children}</Context.Provider>
  )
}
export const useGlobalContext = () => useContext(Context)
