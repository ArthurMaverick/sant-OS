import React from 'react'
import { DashBoard } from './dashBoard'

 type SendFormProps = {
  slug?: string
  body?: string
  title?: string
  images?: string[]
  categories?: string[],
  HttpMethod: string 
}

export const SendForm = ({slug, body, title, images, categories, HttpMethod}: SendFormProps) => { //slug updateInfo mode
  // const [valueProps, setValueProsps] = React.useState([slug, body, title, images, categories])
  
  function getCreateBody  () {
   return { 
      title,
      images,
      categories,
      body
   
   }
   }
  function getUpdateBody  () {
    return { 
       slug,
       title,
       images,
       categories,
       body
    
    }
   }
   function getDeleteBody  () {
    return { 
       slug,
       
    }
   }
  function PassResponse (): RequestInit | Omit<RequestInit, 'body'> {
    let option: RequestInit = {
      method: 'POST',
      body: JSON.stringify(
      HttpMethod === 'POST' 
        ? getCreateBody()
        : HttpMethod === 'PUT'
          ? getUpdateBody()
          : HttpMethod === 'DEL' && getDeleteBody())  ,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };
    if (!slug && !body && !title && !images && !categories){  
      delete option['body'];
      return option;
    }
    
   return option
  }
  
  return (
    <DashBoard  init={PassResponse()} httpMethod={HttpMethod}/>
  )
}



