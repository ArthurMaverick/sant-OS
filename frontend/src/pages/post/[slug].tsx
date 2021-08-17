import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

export const DynamicPost = () => {
  const router = useRouter()
  if(router.isFallback) {
    return <div>pagina carregando...</div>
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  
}

