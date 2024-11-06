import { useMemo } from "react";

export const CalculoPesado = ({valor}) => {
    
    const calcular = ()=>{
        let result = 10
        for (let i = 0; i < valor; i++) {
            result += 1
            console.log(result);
            
        }
        return result
    }
    const nuevo = useMemo(()=>calcular(),[valor])
     
        
  return (
    <div>El valor calculado:{nuevo}</div>
  )
}
