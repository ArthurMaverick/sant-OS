import React from 'react'
import {Container} from './styles'
import { fetchJson } from '../../services/fetch-json'
import {CREATE_ARTICLES} from '../../config/env'



export const Create = ({init}: any) => { //slug updateInfo mode
  const [title, setTitle] = React.useState<string>('')
  const [images, setImage] = React.useState<string[]>([])
  const [categories, setCategory] = React.useState<string[]>([])
  const [body, setBody] = React.useState<string>('')
  const [res, setRes] = React.useState<any>(undefined) 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    

    setRes(await fetchJson(CREATE_ARTICLES, init).then(data => JSON.stringify(data))); // params it'll change

  }
  
  // some labels will to change to a generic and personalized mode
  return (
    <Container>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titulo:</label>
          <input type="text" value={init.body?.title} onChange={(e) => setTitle(e.target.value)}  id="title"/>
      
          <label htmlFor="images">Imagens:</label>
          <input type="text" value={images} onChange={(e) => setImage([e.target.value])}  id="images"/>
        
          <label htmlFor="category">Categoria:</label>
          <input type="text" value={categories} onChange={(e) => setCategory([e.target.value])} id="category"/>

          <label htmlFor="subject">Conteúdo:</label>
          <textarea id="subject"  name="subject"  value={body} onChange={(e) => setBody(e.target.value)} placeholder="Write something.." style={{height:'200px'}}></textarea>
      
          <input type="submit" value="Enviar"/>
        </form>
        <span>{
        res === undefined
        ? ''
        : res
          ? 'seu artigo foi enviado com sucesso!'
          : 'nao foi possivel enviar seu artigo'
      }</span>

    </Container>
  )
}
