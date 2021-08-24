import { DateDetails, Heading, MainContainer, PostContainer } from '../../components';

export const Post = ({ post }: any) => {
  return (
    <>
   

    <MainContainer>
      <Heading>
        {post.title}
      </Heading>

      <DateDetails date={post.createdAt} />

      <PostContainer content={post.body} />

    </MainContainer>
  </>
  )
  };
