import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { getPosts } from '../../data/get-all-posts';
import { getPostBySlug } from '../../data/get-post-by-slug';
import {Post} from '../../container/post'
import Head from 'next/head';
import { Header } from '../../components';

 const DynamicPost = ({post}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  if(router.isFallback) return <div>pagina carregando...</div>
  if(!post.title) return <div>pagina nao existe</div>

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="sant-OS" content={post.title} />
      </Head>

      <Header />
      
      <Post post={post}/>
    </>
  ) 
}

export default DynamicPost
export const getStaticPaths: GetStaticPaths = async () => {
  
  const posts = await getPosts(`findposts/?limit=100`)
  
  return {
    paths: posts.map(post=> {
      const params = {
        slug: post.slug
      }
      return {
        params
       }
    }),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<any> ) => {
  const posts = await getPostBySlug(ctx.params.slug)
  const post = posts
  return {
    props: {
      post: post
    },
    revalidate: 1*60*60*24 
  }
}
