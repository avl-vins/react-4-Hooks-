import { useState } from "react"
import { StBoton, StParrafo, StSection, StTitulo } from "../.."
import { Mensaje } from "./Mensaje"

export const Memo = () => {
    const [active,setActive] = useState(false)
    const handleClick = ()=>{
        setActive(!active)
    }
  return (
    <StSection>
    <StTitulo>Metodo Memo</StTitulo>

    <StParrafo>
    El método memo es una función de optimización de rendimiento en React que permite memorizar componentes funcionales. 
    Esto significa que React puede evitar re-renderizar un componente si sus props no han cambiado, 
    lo que puede ser útil para mejorar el rendimiento en aplicaciones grandes o complejas.
    </StParrafo>
    <StParrafo>
        En este ejemplo tenemos al componente padre con una variable de estado booleano, 
        al hacer click, el texto cambiara de activo a inactivo. Tambien dentro de este componente tenemos un componente hijo que 
        da un mesaje de Hola!!!. En el momento que renderiza el componente padre tambien renderizaran todos los componetes
        internos. Para evitarlo aplicamos el metodo memo en el componente hijo. 
         
    </StParrafo>
    
    <h4>{active?"activo":"inactivo"}</h4>
    <Mensaje/>
    <StBoton $color="#000" onClick={handleClick} >Haz Click</StBoton>
    
    </StSection>
  )
}
