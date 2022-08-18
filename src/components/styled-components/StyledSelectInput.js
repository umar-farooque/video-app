import styled from '@emotion/styled';

const StyledSelectInput = styled.select`
  width: 100%;
  height: 50px;
  background-color: #182c47;
  color: #c1d1e8;
  margin: 10px 0px;
  border: none;
`;

const StyledInputWithIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIconContainer = styled.div`
  width: 10%;
  background-color: #5692e8;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const StyledInputContainer = styled.div`
  width: 90%;
  height: 100%;
`;

export { StyledInputWithIcon, StyledIconContainer, StyledInputContainer };
export default StyledSelectInput;
