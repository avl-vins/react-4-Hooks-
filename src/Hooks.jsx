import styled from "styled-components"
import { StBoton, StParrafo, StSection, StTitulo, USeEffect, UseEstate, UseMemo, UseRef } from "./components"


const StRoot = styled.section`
height:100vh;
padding: 2rem;
display:flex;
flex-direction:column;
align-items:center;
` 

export const Hooks = () => {
  return (
    < StRoot>
        <h1>Hooks</h1>
        <StParrafo>
        Los hooks en React son funciones que permiten manipular el estado y el ciclo de vida de los componentes funcionales. 
        Existen diferentes tipos de hooks: useState, useEffect, useContext, useMemo, useReducer, custom Hooks.</StParrafo>
        
        <UseEstate/>

        {/* <USeEffect/> */}
        
        <UseRef/>
        
        <UseMemo/>
        <StSection>
            lkñk
        </StSection>
    </ StRoot>    
  )
}
