import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({children}) => {
    const [dark,setDark] = useState(false)

    const themeDark = {
        bg:'#000',
        text:'#fff'
    }
    const themeLigth ={
        bg:'#fff',
        text:'#000'
    }

   
    const valor={
        theme:dark===false?themeLigth:themeDark,
        setDark
    }
   
    return (
    <ThemeContext.Provider value={valor} >
        {children}
    </ThemeContext.Provider>
  )
}
