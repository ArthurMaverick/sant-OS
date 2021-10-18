import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import { Header } from '../components';
import { CallToAction, ArticleForm} from '../container';
import { getPosts } from '../data/get-all-posts';


export default function CreateArticle({posts}: InferGetStaticPropsType<GetStaticProps>) {
  const [create, setCreate] = React.useState(false)
  const [update, setUpdate] = React.useState(false)
  const [del, setDel] = React.useState(false)

  React.useEffect(()=> {
    setUpdate(false)
    setDel(false)

  }, [create])

  React.useEffect(()=> {
    setCreate(false)
    setDel(false)
  }, [update])

  React.useEffect(()=> {
    setUpdate(false)
    setCreate(false)
    
  }, [del])


  return (
    <>
      <Header/> 
      <button onClick={() =>setCreate(!create)}>Create Article</button>
      <button onClick={() =>setUpdate(!update)}>Update Article</button>
      <button onClick={() =>setDel(!del)}>Delete Article</button>
        
      { create && <ArticleForm posts={posts} method='POST'/>}
      { update && <ArticleForm posts={posts} method='PUT'/>}
      { del && <ArticleForm posts={posts} method='DEL'/>}


      <CallToAction/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts('findposts/?limit=100')
  return {
    props: {
      posts: posts
    }
  }
}