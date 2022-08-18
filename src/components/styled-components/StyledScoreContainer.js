import styled from '@emotion/styled';

const StyledScoreContainer = styled.div`
  width: 20%;
  height: 100%;
  &,
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 600px) {
    position: absolute;
    top: -35%;
    right: 5%;
  }
`;

export default StyledScoreContainer;
