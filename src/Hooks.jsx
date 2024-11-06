import styled from "styled-components"
import { StBoton, StParrafo, StSection, StTitulo, ThemeContext, UseContext, USeEffect, UseEstate, UseMemo, UseReducer, UseRef } from "./components"
import { useContext, useEffect } from "react"




const StRoot = styled.section`
min-height:100vh;
padding: 2rem;
display:flex;
flex-direction:column;
align-items:center;
background-color: ${ ({$bg})=>$bg };
color:${({$color})=>$color};

` 

export const Hooks = () => {
  const {theme}  = useContext(ThemeContext)
  const { bg , text }=theme
 
  
  
  useEffect(()=>{

  },[theme])
  
  return (
    < StRoot $bg={bg} $color={text} > 
        <h1>Hooks</h1>
        <StParrafo>
        Los hooks en React son funciones que permiten manipular el estado y el ciclo de vida de los componentes funcionales. 
        Existen diferentes tipos de hooks: useState, useEffect, useContext, useMemo, useReducer, custom Hooks.</StParrafo>
        
        <UseEstate/>

        <USeEffect/>
        
        <UseRef/>
        
        <UseMemo/>

        <UseContext/>

        <UseReducer/>
    </ StRoot>    
  )
}
