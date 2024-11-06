import { useEffect, useReducer, useState } from "react"
import { StBoton, StParrafo, StSection, StTitulo } from ".."
import { FormUsuarios } from "./components/FormUsuarios"
import { ListaUsuarios } from "./components/ListaUsuarios"
import { userReducer } from "./helper/userReducer"
import { TYPES } from "./helper/types"
import { v4 as uuidv4 } from 'uuid';


const initialState = [{id:'1',nombre:'user1',email:'user1@user.com',password:'123456'} ]
export const UseReducer = () => {
    const [ users , dispatch ] = useReducer( userReducer , initialState )

    const [ user , setUser ] = useState(null)
    
    const [mode,setMode] = useState({add:false,edit:false,list:true})

    const {add,edit,list} = mode

    const handleMode  = (mode)=>{
        if( mode==='add' ){
            setMode({add:true,edit:false,list:false})
        }else if( mode==='edit' ){
            setMode({add:false,edit:true,list:false})

        }else if( mode==='list' ){
            setMode({add:false,edit:false,list:true})
            setUser(null)

        }
    }

    const handleAdd = (data)=>{
        if(!data.id){
            const action = {
                type:TYPES.add,
                payload:{...data,id:uuidv4()}
            }
            dispatch(action)
        }else {
            handleEdit(data)
        }
        

    }

    const handleDelete = (id)=>{
        
        const action = {
            type:TYPES.delete,
            payload:id
        }
        dispatch(action)

    }

    const handleEdit = (data)=>{
    
        const action = {
            type:TYPES.edit,
            payload:data
        }
        dispatch(action)

    }

    const getUser = (dato) =>{
       
        setUser(dato)
        
       
    }
    
    
    useEffect(()=>{
        if(user){
            setMode({add:false,edit:true,list:false})
        }

        
    },[user])
  return (
    <StSection>
            <StTitulo>useReducer</StTitulo>
            <StParrafo>
            El hook useReducer permite gestionar el estado de un componente de manera más estructurada y predecible, 
            </StParrafo>
            <StParrafo>
                En el siguiente ejemplo se usa useReducer para crear un crud.
            </StParrafo>
             {
                list&&<ListaUsuarios mode={handleMode } users={users} userDelete = {handleDelete}  getUser={getUser} />
             }
             {
                edit && <FormUsuarios title="Editar"  mode={ handleMode }  userAdd={handleAdd}  user = {user} /> 
                || add && <FormUsuarios  mode={handleMode }  userAdd={handleAdd}  />
             } 
            
        </StSection>
  )
}
