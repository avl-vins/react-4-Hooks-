
export * from './useState/UseEstate'

import styled from "styled-components"



export const StSection = styled.section`
    padding: 1rem;
    margin-top:1rem;
    width:70%;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:2px solid #c9c9c9;
    border-radius:.5rem;
` 
export const StParrafo = styled.p`
    padding:1rem;
    width:80%;
`
export const StTitulo = styled.h3`

`
export const StBoton = styled.button`
    padding:.5rem 1rem;
    border:1px solid #c9c9c9;
    outline:none;
    background-color:${({$color})=>$color};
    color:#fff;   
    &:hover{
        cursor:pointer;
        scale:.98;
    }
    &:active{
        scale:1;
    }    
     
`
