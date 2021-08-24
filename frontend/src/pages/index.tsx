import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import { Header } from '../components';
import { CallToAction } from '../container/callToAction';
import { PostGalery } from '../container/postGalery';
import { getPosts } from '../data/get-all-posts';

export default function Home({posts}: InferGetStaticPropsType<GetStaticProps>) {

  return (
    <>
      <Header/> 
      
      <PostGalery  data={posts}/>

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

