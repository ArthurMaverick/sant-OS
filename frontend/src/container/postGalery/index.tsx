import React from 'react';
import {
  MainContainer, PostThumbnails
} from '../../components';

type DataProps = {
  data: any[]
}

export const PostGalery = ({data}: DataProps) => {
  
  return (
  <>
    <MainContainer>
      <PostThumbnails storageData={data} />
    </MainContainer>
  </>
  );
}

