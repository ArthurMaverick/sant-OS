import styled from 'styled-components'
import {theme } from '../../styles'
type Theme = typeof theme

export const Container = styled.div`
    display: flexbox;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
 
  .content {
    display: flexbox;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;  
    width: 400px;
    /* padding: 10px; */
    margin: 20px 10px;
  
   img {
     width: 100%;
   }

   .links {
     width: 90%;
     display: flexbox;
     justify-content: space-between;
     
   }


    

  }



`