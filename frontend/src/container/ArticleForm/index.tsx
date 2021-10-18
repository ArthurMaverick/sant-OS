import React from 'react'
import {SendForm, MainContainer} from '../../components'
export const ArticleForm = ({posts, method}: any) => {
const {slug, body, title, images, categories} = posts
  return (
    <MainContainer>
      <SendForm 
        slug={slug} 
        body={body} 
        title={title} 
        images={images} 
        categories={categories} 
        HttpMethod={method}/>
    </MainContainer>
  )
}
