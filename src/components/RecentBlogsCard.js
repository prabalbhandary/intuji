import React from "react";
import styled from 'styled-components';
import img1 from "../assets/Rectangle155.png";
import img2 from '../assets/Rectangle156.png';
import img3 from '../assets/Rectangle157.png';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around; // This will distribute space evenly around the sections
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column; // This stacks the p, h1, and img elements vertically
  align-items: center; // This centers them horizontally
  text-align: center; // This centers the text within p and h1
`;

const RecentBlogsCard = () => {
  return (
    <CardContainer>
      <StyledSection>
        <p>BEST PRACTICES</p>
        <h1>Partially on or continuing particular principles as.</h1>
        <img src={img1} alt="img1" />
      </StyledSection>
      <StyledSection>
        <p>BEST PRACTICES</p>
        <h1>Village did removed enjoyed explain</h1>
        <img src={img2} alt="img2" />
      </StyledSection>
      <StyledSection>
        <p>BEST PRACTICES</p>
        <h1>Wise busy past both park when an ye no. Nay likely her length.</h1>
        <img src={img3} alt="img3" />
      </StyledSection>
    </CardContainer>
  );
};

export default RecentBlogsCard;
