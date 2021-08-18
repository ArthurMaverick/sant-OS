import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { postsCounter } from '../../data/count-all-posts';
import { getPosts } from '../../data/get-all-posts';
import { getPostBySlug } from '../../data/get-post-by-slug';
import {Post} from '../../container/post'
export const DynamicPost = ({post}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  if(router.isFallback) return <div>pagina carregando...</div>
  if(!post.title) return <div>pagina não existe</div>

  return <Post post={post}/>  
}
export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await postsCounter() //after limit is optional remove this
  const posts = await getPosts(`limit=${numberOfPosts}`)
  return {
    paths: posts.map(post=> {
      return {
        params: post.slug
      }
    }),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<any> ) => {
  const posts = await getPostBySlug(ctx.params.slug)
  const post = posts.length > 0 ? posts[0] : {}
  return {
    props: {
      post: post
    },
    revalidate: 1*60*60*24 
  }
}
