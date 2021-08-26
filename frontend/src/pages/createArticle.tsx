import React from 'react';
import { Header } from '../components';
import { CallToAction, ArticleForm} from '../container';


export default function CreateArticle() {

  return (
    <>
      <Header/> 
      
      <ArticleForm/>

      <CallToAction/>
    </>
  )
}