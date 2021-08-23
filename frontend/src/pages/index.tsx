import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react'
import {Header} from '../components'
import {PostGalery} from '../container/postGalery'
import { getPosts } from '../data/get-all-posts';

export default function Home({posts}: InferGetStaticPropsType<GetStaticProps>) {

  return (
    <>
      <Header/> {/*remove this from components*/}
      
      <PostGalery  data={posts}/>

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

