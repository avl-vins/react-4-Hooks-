import React, { useRef } from 'react'
import { StParrafo, StSection, StTitulo } from '..'
import styled from 'styled-components'

const StContentInput = styled.div`
display:flex;
gap:.5rem;
flex-wrap:wrap;
justify-content:center;  
input[type="text"]{
  padding:.5rem;
}
input[type="button"]{
  padding:.5rem;
}
`

export const UseRef = () => {
  const inputRef = useRef()

  const handleInput = ()=>{
    inputRef.current.select();
    
  }

  const countRef = useRef(0)
  const handleAdd = ()=>{
    countRef.current+=1;
    console.log(`COntador:${countRef.current}`);
    
  }


  return (
    <StSection>
            <StTitulo>UseRef</StTitulo>
            <StParrafo>
            El hook useRef en React es una función que permite crear una referencia mutable que persiste durante el ciclo de vida del componente. 
            UseRef no provoca una nueva re-renderización cuando su estado cambia. 
            </StParrafo>
            <StParrafo>
                El siguiente ejemplo nos muestra el acceso al DOM por medio de useRef,
                Al hacer click en el boton, veremos seleccionado el segundo input.
            </StParrafo>
            <StContentInput>
              <input type="text" placeholder='NO SELECCIONADO' />
              <input type="text" ref={inputRef} placeholder='SELECCIONADO' />
              <input type="text" placeholder='NO SELECCIONADO' />
              <input type="button" value="Seleccinar Input" onClick={ handleInput}  />
            </StContentInput>
            <StParrafo>
                El siguiente ejemplo guarda valores mutables por medio de useRef pero sin hacer una re-renderizacion.
                Al hacer click en el boton estaremos cambiando el valor del contador, pero no veremos los cambios 
                visiblemente, sino hasta la proxima renderizacion.  
            </StParrafo>
            <h3>Contador:{countRef.current}</h3>

            <input style={{padding:".5rem 1rem"}} type="button" value="+1" onClick={handleAdd} />
            
        </StSection>
  )
}
