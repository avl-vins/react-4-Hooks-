import React, { useState } from 'react'
import { StBoton, StParrafo, StSection, StTitulo } from '..'

export const UseEstate = () => {
    const [active,setActive]= useState(false);
    const [changeColor,setChangeColor] = useState(false)
  return (
    <StSection>
            <StTitulo>useState</StTitulo>
            <StParrafo>EL hook useState permite agregar un estado local a los componentes funcionales.
                Retorna el valor actual del estado y una funcion que actualiza el estado. UseState causa una renderizacion para cambiar el estado.
            </StParrafo>
            <StParrafo>
                El siguiente ejemplo nos muestra el cambio de estado del texto y el color al hacer click.
            </StParrafo>
            <StBoton $color={changeColor?'#0070B8':'#008000'} onClick={()=>{
                setActive(!active)
                setChangeColor(!changeColor)
                }} >{active?'Activo':'Inactivo'}</StBoton>
        </StSection>
  )
}
