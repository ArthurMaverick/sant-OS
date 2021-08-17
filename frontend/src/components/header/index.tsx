import React from 'react'
import { HeaderContainer } from './styles'
export const Header = () => {
  return (

    <HeaderContainer>
        <div className="logo">sant-OS</div>
        <nav>
          <ul>
            <li><a href="https://github.com/">github</a></li>
            <li><a href="#">feed</a></li>
            <li><a href="#">newsletter</a></li>
          </ul>
        </nav>
      </HeaderContainer>
    
  )
}
