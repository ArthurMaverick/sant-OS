import styled from 'styled-components'
import {theme } from '../../styles'
type Theme = typeof theme

export const Container = styled.div`
    display: flexbox;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    
 
  .content {
    display: flexbox;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;  
    min-width: 200px;
    max-width: 300px;
    margin: 20px 10px;
    padding-bottom: 10px;

    p {
      position: relative;
      margin: 0 0 0 4px;
      top: 30px;
      color: white;
    }
  
   img {
     width: 100%;
     border-radius: 2%;
   }

   .links  {
     width: 100%;  
     text-align: center;
   }


    

  }



`