import React from 'react';
import StyledInput from './styled-components/StyledInput';
import StyledInputlabel from './styled-components/StyledInputLabel';
import StyledSideBar from './styled-components/StyledSideBar';
import StyledFiltersContainer from './styled-components/StyledFiltersContainer';

import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import StyledSelectInput, {
  StyledInputContainer,
  StyledIconContainer,
  StyledInputWithIcon,
} from './styled-components/StyledSelectInput';

const options = [
  { name: 'Order By', value: 'orderBy' },
  { name: 'Release Date', value: 'releaseDate' },
  { name: 'Score', value: 'score' },
  { name: 'Name', value: 'name' },
];
const SideBar = ({
  name,
  score,
  handleOnNameChange,
  handleOnScoreChange,
  Asc,
  handleSortDirection,
  handleOnSelectChange,
}) => {
  return (
    <StyledSideBar>
      <StyledFiltersContainer>
        {/* <StyledHeading2>Filters</StyledHeading2> */}
        <StyledInputlabel>Name(Contains)</StyledInputlabel>
        <StyledInput
          name='name'
          type='text'
          placeholder='Name'
          value={name}
          onChange={handleOnNameChange}
        />
        <StyledInputlabel>Minimum Score</StyledInputlabel>
        <StyledInput
          name='score'
          type='number'
          placeholder='Minimum 1-10'
          value={score}
          onChange={handleOnScoreChange}
        />

        <StyledInputlabel>OrderBy</StyledInputlabel>
        <StyledInputWithIcon>
          <StyledIconContainer onClick={handleSortDirection}>
            {Asc ? (
              <AiOutlineArrowUp onClick={handleSortDirection} />
            ) : (
              <AiOutlineArrowDown onClick={handleSortDirection} />
            )}
          </StyledIconContainer>
          <StyledInputContainer>
            <StyledSelectInput onChange={handleOnSelectChange}>
              {options.map((option) => (
                <option value={option.value} defaultValue={options[0]}>
                  {option.name}
                </option>
              ))}
            </StyledSelectInput>
          </StyledInputContainer>
        </StyledInputWithIcon>
      </StyledFiltersContainer>
    </StyledSideBar>
  );
};

export default SideBar;
