import React from 'react'
import {Container} from './styles'
import { fetchJson } from '../../services/fetch-json'
import {DELETE_POST} from '../../config/env'

export const Delete = ({init}: any) => { //slug updateInfo mode
  const [res, setRes] = React.useState<any>(undefined) 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setRes(await fetchJson(DELETE_POST, init).then(data => JSON.stringify(data))); // params it'll change

  }
  
  return (
    <Container>
        <form onSubmit={handleSubmit}>
          <label htmlFor="slug">slug</label>
          <input type="text" value={init.option?.body.slug} readOnly={true} id="slug"/>
      
          <input type="submit" value="Deletar"/>
        </form>
        <span>{
        res === undefined
        ? ''
        : res
          ? 'seu artigo foi delteado com sucesso!'
          : 'nao foi possivel deletar seu artigo'
      }</span>

    </Container>
  )
}
