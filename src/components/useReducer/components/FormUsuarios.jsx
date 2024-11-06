import React, { useState } from 'react'
import { StBoton, StInput } from '../..'
import styled from 'styled-components'

const StForm = styled.form`
 display:flex;
 flex-direction:column;
 gap:.5rem;
 border:2px solid #c9c9c9;
 padding:1rem;
 border-radius:.5rem;
 .group{
 text-align:left;
 display:flex;
 flex-direction:column;
 gap:.3rem;
 }
`
export const FormUsuarios = ({ title="Agregar Usuario" , mode , userAdd , user }) => {

    const [form,setForm] = useState(  !user? {nombre:'',email:'',password:''} : user )
    
    const {nombre,email,password} = form
    
    const HandleChange = ({target})=>{
        
        const {value,name} = target
        
        setForm({...form,[name]:value})
    
      }
    
    const handleSubmit = (e)=>{
            
        e.preventDefault()
        
        setForm({nombre:'',email:'',password:''})
        userAdd(form)
        mode('list')   
    }

  return (
    <StForm method="post" onSubmit={handleSubmit}>
        <h4>{title}</h4>
    <div className="group">
    <label htmlFor="nombre">Usuario:</label>
    <StInput type="text" id="nombre" name="nombre" 
            value={nombre} onChange={HandleChange} autoComplete='false' required />
    </div>
    <div className="group">
    <label htmlFor="email">Correo:</label>
    <StInput type="email" id="email" name="email" 
            value={email} onChange={HandleChange} autoComplete='false'   required />
    </div>
    <div className="group">
    <label htmlFor="password">password:</label>
    <StInput type="password" id="password" name="password" 
            value={password} onChange={HandleChange} autoComplete='false'   required />
    </div>
    <StBoton type="submit">{user?'Editar':'Agregar'}</StBoton>
</StForm>
  )
}
