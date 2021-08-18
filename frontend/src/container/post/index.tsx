import Head from 'next/head'
import { Header,MainContainer, Heading, DateDetails, PostContainer} from '../../components'

export const Post = ({post}: any) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="sant-OS" content={post.title}/>
      </Head>
      <Header/>

      <MainContainer>
        <Heading>
         {post.title} 
        </Heading>

        <DateDetails date={post.createdAt}/>
          
        <PostContainer content={post.body}/>

      </MainContainer>
    </>
  )
}