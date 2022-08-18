import styled from '@emotion/styled';

const StyledContainer = styled.div`
  width: 100vw;
  min-height: 100vw;
  background-color: ${(props) => props.theme.palette.primary.main};
  display: flex;
  margin: 0px auto;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default StyledContainer;
