import { useEffect, useState } from "react"
import { StParrafo, StSection, StTitulo } from ".."
import { getUsers } from "./getUser"
import styled from "styled-components"

const StLista = styled.ul`
text-align:left;
.user__lista{
list-style:none;
padding:.3rem;
}
`

export const USeEffect = () => {
    const [users,setUsers] = useState([])
    
    const getData = async ()=>{
        const data = await getUsers()
        setUsers(data)
    }
    
    useEffect(()=>{
        getData()

    },[])

  return (
    <StSection>
    <StTitulo>useEffect</StTitulo>
    <StParrafo>
    El hook useEffect permite realizar efectos secundarios en componentes funcionales. Se ejecuta después de que el componente se renderiza. Se usa para tareas de recuperación de datos, peticiones, etc
    </StParrafo>
    <StParrafo>
        El siguiente ejemplo nos muestra el cambio de estado usando useEffect, se hizo la peticion de la lista de usuarios despues que se renderizo el componente.
    </StParrafo>
    <StLista>
        {users.map((user)=>(
            <li className="user__lista" key={user.id} >{user.name}/{user.email}</li>
        ))}

    </StLista>
     
</StSection>
  )
}
