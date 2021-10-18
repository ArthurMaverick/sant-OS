import React from 'react'
import {Create} from './create'
import {Delete} from './delete'
import {Update} from './update'


export const DashBoard = ({init, httpMethod}: any) => { 
 

 
  return (
   <>
      {
        httpMethod === 'POST' 
          ?  <Create init={init}/>
          :  httpMethod === 'DEL' 
            ?  <Delete init={init}/>
            :  httpMethod === 'PUT' 
                ? <Update init={init}/>
                : ''
      }
    </>
     
  )
}



