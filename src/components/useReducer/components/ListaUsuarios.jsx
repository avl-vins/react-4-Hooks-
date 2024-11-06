import React from 'react'
import styled from 'styled-components'
import { StBoton } from '../..'
import { MdOutlineEdit } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'

const StContainer = styled.div`
    padding:1rem;
        text-align:right;

    .list__title{
        text-align:center;
    }
    .list__table{
        padding:1rem;    
    }
     th , td{
        padding:.5rem 2rem;
        border-bottom:2px solid #c9c9c9;
        text-align:center;
    }
    .tabla__icon{
        font-size:1.25rem;
    }
    .tabla__icon:hover{
        cursor:pointer;
        scale:.9;
    }
    .tabla__icon:active{
        scale:1;
    }
`

export const ListaUsuarios = ({ users=[], mode , userDelete ,  getUser }) => {
    
    const handleClick = ()=>{
        mode('add')
        
    }
    
    return (
    <StContainer>
        <h4 className='list__title' >Lista Usuarios</h4>
        <table className='list__table' >
        <thead>
            <tr>
                <th>Usuario</th>
                <th>Correo</th>
                <th>password</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>(
                <tr key={user.id} >
                    <td>{user.nombre}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td><MdOutlineEdit className='tabla__icon' onClick={ ()=> getUser(user) } /></td>
                    <td><AiOutlineDelete onClick={()=>userDelete(user.id)} className='tabla__icon' /></td>
                </tr>
                ))
            }
            
           
        </tbody>
       
        </table>
        <StBoton $color="#111111" onClick={handleClick} >Agregar Usuario</StBoton>

    </StContainer>
  )
}
