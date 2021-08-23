import React from 'react'
import { Container } from './styles'


type DataProps = {
  storageData: any[]
}

export const PostThumbnails = ({storageData}: DataProps) => {
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



  return (
  <>
    <Container>
      {storageData.map(post => {
        return (
          <p key={post.slug} style={{color: 'black'}}>{post.title}</p>
        ) 
      })}
      {/* <li  id="sentinela">oi</li> */}
    </Container>
  </>
  );
}


