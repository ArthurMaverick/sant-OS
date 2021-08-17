import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { postsCounter } from '../../data/count-all-posts';
import { getPosts } from '../../data/get-all-posts';
import { getPostBySlug } from '../../data/get-post-by-slug';

export const DynamicPost = () => {
  const router = useRouter()
  if(router.isFallback) {
    return <div>pagina carregando...</div>
  }
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
    revalidate: 1000*60*60*24 
  }
}
