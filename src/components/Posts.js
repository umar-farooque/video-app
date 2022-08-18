import React from 'react';
import PostCard from './PostCard';
import StyledPostsConatiner from './styled-components/StyledPostContainer';

const Posts = ({ data }) => {
  return (
    <StyledPostsConatiner>
      {data.map((d) => (
        <PostCard data={d} />
      ))}
    </StyledPostsConatiner>
  );
};

export default Posts;
