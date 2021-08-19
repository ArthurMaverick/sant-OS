import React from 'react';

type DataProps = {
  storageData: object[]
}

export const PostGalery = ({storageData}: DataProps) => {
  const [value, setValue] = React.useState<boolean>(false)
  const [data, setData] = React.useState<any[]>(storageData)
  const [downData, setDowndata] = React.useState<any[]>([])

  React.useEffect(()=> {
    const intersectionObserver = new IntersectionObserver((e) => {
     e.some(entries => entries.isIntersecting) 
      ? setValue(true)
      : setValue(false) //renderiazar somentw uma vez
    });
    intersectionObserver.observe(document.querySelector('#sentinela') as Element)

    return ()=> intersectionObserver.disconnect();
  },[])

  React.useEffect(()=> {
    let newData = data
   const posts = newData.splice(0, 3)

   setData(newData)
   setDowndata(currPosts => [...currPosts, posts])
  },[value])



  return (
    <div style={{height: '130vh'}}>
      {downData.map(post => {
        <div>
          <img src={post.image[0]} alt={post.title} />
          <p>{post.title}</p>
          <span>{post.category}</span>
        </div>
      })}

       <li style={{bottom: -199, position: 'absolute'}} id="sentinela">oi</li>
    </div>
  );
}

