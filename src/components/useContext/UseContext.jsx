import { useContext } from 'react'
import {StParrafo, StSection, StTitulo, ThemeContext } from '..'
import styled from 'styled-components'
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md'

const StContentButtons = styled.div`
    padding:1rem;
    display:flex;
    gap:1rem;
    .icon__boton{
        font-size:1.5rem;
        cursor:pointer;
    }
    
`

export const UseContext = () => {

    const { setDark } = useContext( ThemeContext )
 
return (
    <StSection>
    <StTitulo>useContext</StTitulo>
    <StParrafo>
    El  hook useContext es una funcion que permite acceder al contexto de una manera más sencilla y directa. 
    Permite compartir valores (como datos o funciones) entre componentes sin tener que pasar props manualmente.
    </StParrafo>
    <StParrafo>
        El siguiente ejemplo se muestra el cambio del color del fondo y del color del texto.
    </StParrafo>
    <StContentButtons>
    <MdOutlineLightMode  onClick={()=>setDark(false)} className='icon__boton' />    
    <MdOutlineNightlight onClick={()=>setDark(true)}  className='icon__boton'  />     

    </StContentButtons>
    
    </StSection>
  )
}
