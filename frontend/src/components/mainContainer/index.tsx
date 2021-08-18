import { ReactNode } from "react";
import {Container}  from './styles'

type MainContainerProps = {
  children: ReactNode
}

export const MainContainer = ({children}: MainContainerProps) => {
  return (
    <Container>
      {children}
    </Container>
      
    
  )
}