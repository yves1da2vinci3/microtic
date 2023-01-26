import React, {createContext,useState } from 'react'

export const NavContext = createContext()

 function NavProvider({children}) {
    const [open,setOpen] = useState(true)
   const Toggle = () => { 
    setOpen(!open)
    }
  return (
    <NavContext.Provider value={{open,Toggle}}>
        {children}
    </NavContext.Provider>
  )
}

export default NavProvider