import React from 'react'
import { SectionContainer } from './styles'


export const ChoiceList = () => {
  return (

    <SectionContainer>
      <div className="frontend">Frontend</div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      <div className="backend">Backend</div>
      </SectionContainer>
    
  )
}


// preciso saber como funciona o elemento opiton
//precisa popular a api para pelo menos o front e o back ter 1 artigo
//saber qual o melhor forma de puxar os dados da api spa, ssr
// saber a melhor forma de deixar os dados na lateral
//aplicar ternario para busca dados com baxe no option o useEfect deve ser usado para fazer uma nova busca qaundo option mudar
// aplicar estilo.
//refatorar e testar 
