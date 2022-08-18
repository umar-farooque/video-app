import styled from '@emotion/styled';

const StyledPara = styled.p`
  line-height: 20px;
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
  &::after {
    content: '...';
  }
`;
export default StyledPara;
