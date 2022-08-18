import styled from '@emotion/styled';

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  height: 160px;
  background-color: ${(props) => props.theme.palette.secondary.main};
  @media (max-width: 600px) {
    flex-direction: column;
    height: 360px;
    position: relative;
  }
`;

export default StyledCard;
