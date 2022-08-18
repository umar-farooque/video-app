import styled from '@emotion/styled';

const StyledPostsConatiner = styled.div`
  width: 70%;
  color: white;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (max-width: 600px) {
    width: 100%;
    row-gap: 50px;
  }
`;

export default StyledPostsConatiner;
