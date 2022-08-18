import React from 'react';
import StyledCard from './styled-components/StyledCard';
import StyledHeading1 from './styled-components/StyledHeading1';
import StyledHeading2 from './styled-components/StyledHeading2';
import StyledImageContainer from './styled-components/StyledImageContainer';
import StyledPara from './styled-components/StyledPara';
import StyledTextContainer from './styled-components/StyledTextContainer';
import StyledScore from './styled-components/StyledScore';
import StyledScoreContainer from './styled-components/StyledScoreContainer';

const getDateString = (date) => {
  date = new Date(date);
  return `${date.getDate().toString().padStart(2, '0')}-${date
    .getMonth()
    .toString()
    .padStart(2, '0')}-${date.getFullYear()}`;
};

const PostCard = ({ data }) => {
  return (
    <StyledCard>
      <StyledImageContainer />
      <StyledTextContainer>
        <StyledHeading1>{data.name}</StyledHeading1>
        <StyledHeading2>{`Released on: ${getDateString(
          data.first_release_date
        )}`}</StyledHeading2>
        <StyledPara>{data.summary}</StyledPara>
      </StyledTextContainer>
      <StyledScoreContainer>
        <StyledScore>{Number(String(data.rating)[0])}</StyledScore>
      </StyledScoreContainer>
    </StyledCard>
  );
};

export default PostCard;
