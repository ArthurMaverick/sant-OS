import React from 'react';
import { Container } from './styles';

import Link from 'next/link'
type DataProps = {
  storageData: any[]
}

export const PostThumbnails = ({ storageData }: DataProps) => (
      <Container>
        {storageData.map((post) => (
          <div  key={post.slug} className="content">

           
              <img src={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'}/>
            

            <div className="links">
              <Link href={`/post/${encodeURIComponent(post.slug)}`} as={`/post/${post.slug}` } passHref>
                  <a>{post.title}</a>
              </Link>
                <p>{post.categories[0]} </p>  
            </div>
             
           
            
          </div>
        ))}
        {/* <li  id="sentinela">oi</li> */}
      </Container>
  
  );
//   const [value, setValue] = React.useState<boolean>(false)
//   const [data, setData] = React.useState<any[]>(storageData)
//   const [downData, setDowndata] = React.useState<any[]>([])
// console.log(storageData)
// React.useEffect(()=> {
//   const intersectionObserver = new IntersectionObserver((e) => {
//    e.some(entries => entries.isIntersecting) && setValue(false)

//   });
//   intersectionObserver.observe(document.querySelector('#sentinela') as Element)

//   return ()=> intersectionObserver.disconnect();
// },[])




// React.useEffect(()=> {
//  const posts = data.splice(0, 3)
//  setDowndata(posts)

// },[value])