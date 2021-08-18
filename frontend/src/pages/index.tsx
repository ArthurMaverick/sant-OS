import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react'
import {Header} from '../components'
import { getPosts } from '../data/get-all-posts';

export default function Home() {
  const [value, setValue] = React.useState<boolean>(false)
  const [data, setData] = React.useState<any[]>([])
  
  React.useEffect(()=> {
    const intersectionObserver = new IntersectionObserver((e) => {
     e.some(entries => entries.isIntersecting) 
      ? setValue(true)
      : setValue(false) 
    });
    intersectionObserver.observe(document.querySelector('#sentinela') as Element)

    return ()=> intersectionObserver.disconnect();
  },[])

  React.useEffect(()=> {
    async () => {
      const posts = await getPosts('limit=100')
      setData(posts)
    }
    
  },[value])

  return (
    <>
    <div style={{height: '130vh'}}>
      <Header/>
      {value && 
        data.map(post => {
          //implements this tomorrow
        })
      }


      <li style={{bottom: -199, position: 'absolute'}} id="sentinela">oi</li>
      </div>

    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getPosts('limit=100')
//   return {
//     props: {
//       posts: posts
//     }
//   }
//}

