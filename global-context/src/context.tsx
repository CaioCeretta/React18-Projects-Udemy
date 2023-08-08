import React, { ReactNode, createContext, useContext, useState } from 'react'

interface MyContextData {
  name: string;
  setName: (value: string) => void;
}
const GlobalContext = createContext<MyContextData>({} as MyContextData);

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}


export default function AppContext({children}: {children: ReactNode}) {
  const [name, setName] = useState('anything');

  return (
    <GlobalContext.Provider value={{name, setName}}>{children}</GlobalContext.Provider>
  )
}
