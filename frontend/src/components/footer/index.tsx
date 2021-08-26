import React from 'react'
import {Container} from './styles'
export const Footer = () => {
  return (
    <Container>
      <div className="perfil" >
        <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt="" />
      </div>

      <div>
        <h1>Arthur Santos</h1>
        <p>desenvolvedor full-stack</p>

        <div className="socials">
          <img src="/linkedin.png" alt="linkedin-account"/>
          <img src="/github.png" alt="github-account"/>
        </div>
      </div>

      
    </Container>
  )
}
