import React from 'react'
import {Container} from './styles'
import { fetchJson } from '../../services/fetch-json'
import {UPDATE_POST} from '../../config/env'



export const Update = ({init}: any) => { //slug updateInfo mode
  const [title, setTitle] = React.useState<string>(init.option?.body.title)
  const [images, setImage] = React.useState<string[]>([init.option?.body.images[0]])
  const [categories, setCategory] = React.useState<string[]>([init.option?.body.categories[0]])
  const [body, setBody] = React.useState<string>(init.option?.body.title)
  const [res, setRes] = React.useState<any>(undefined) 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setRes(await fetchJson(UPDATE_POST, init).then(data => JSON.stringify(data))); // params it'll change
  }
  
  // some labels will to change to a generic and personalized mode
  return (
    <Container>
        <form onSubmit={handleSubmit}>
        <label htmlFor="slug">slug:</label>
          <input type="text" value={init.option?.body.slug} readOnly={true} id="slug"/>

          <label htmlFor="title">Titulo:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title"/>
      
          <label htmlFor="images">Imagens:</label>
          <input type="text" value={images} onChange={(e) => setImage([e.target.value])} id="images"/>
        
          <label htmlFor="category">Categoria:</label>
          <input type="text" value={categories} onChange={(e) => setCategory([e.target.value])} id="category"/>

          <label htmlFor="subject">Conteúdo:</label>
          <textarea id="subject"  name="subject"  value={body} onChange={(e) => setBody(e.target.value)} style={{height:'200px'}}></textarea>
      
          <input type="submit" value="Atualizar"/>
        </form>
        <span>{
        res === undefined
        ? ''
        : res
          ? 'seu artigo foi atualizado com sucesso!'
          : 'nao foi possivel atualizar seu artigo'
      }</span>

    </Container>
  )
}
