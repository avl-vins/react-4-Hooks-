import { useState } from "react"
import { StBoton, StParrafo, StSection, StTitulo } from ".."
import { Memo } from "./memo/Memo"
import { CalculoPesado } from "./CalculoPesado"



export const UseMemo = () => {
    const [contador,setContador] = useState(0)
    const [valor,setValor] = useState(1000)
   
  return (
    <StSection>
            <StTitulo>useMemo</StTitulo>
            <StParrafo>Para entender eL hook useMemo es necesario entender el metodo memo de react.</StParrafo>
            <Memo/>
            <StParrafo>Ya que entendimos el metodo memo, podemos entender el uso del hook useMemo. </StParrafo>
            <StParrafo>
            El hook useMemo permite memorizar el resultado de un cálculo pesado o de una función, 
            esto evita que se vuelva a calcular en renderizaciones posteriores, a menos que sus dependencias varien.
            </StParrafo>
            <CalculoPesado valor={valor}/>
            <p>Valor del contador:{contador}</p>
            <StBoton onClick={()=>setContador(contador+1)} $color="green">+1</StBoton>
             
             <StBoton onClick={()=>setValor(valor+1000)} $color="blue">Calcular</StBoton>
            
        </StSection>
  )
}
