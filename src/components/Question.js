import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import QuestionCard from "./QuestionCard";

const StyledSection = styled.section`
  padding: 2rem;
  background: #f7f7f7; // Example background color
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between; // Distribute space between child components
`;

const StyledDivWrapper = styled.div`
  display: flex;
  flex-direction: column; // Stack items vertically
  align-items: flex-start; // Align items to the start of the flex container
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column; // Stack items vertically
  align-items: flex-start; // Align items to the start of the flex container
  margin-bottom: 1rem; // Adds a margin at the bottom of each div
  padding: 1rem;
  background: #fff; // Example background color for each div
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); // Example shadow for each div

  h2 {
    font-size: 1.25rem; // Example font size for h2
    color: #333; // Example text color for h2
    margin-bottom: 0.5rem; // Adds a margin at the bottom of h2
  }

  svg {
    align-self: flex-end; // Align icon to the end of the flex container
    cursor: pointer; // Changes cursor to pointer when hovering over the icon
    transition: transform 0.3s ease; // Smooth transition for icon rotation
    /* Removed hover effect that rotates the icon */
    margin-top: -2.5rem; // Adjust position relative to h2
    margin-right: -1rem; // Adjust position relative to container
    z-index: 1; // Ensure icon is above paragraph content
  }

  p {
    font-size: 1rem; // Example font size for p
    color: #666; // Example text color for p
    line-height: 1.5; // Example line height for p
    /* Paragraph is now always displayed */
    padding-left: 2.5rem; // Adjust paragraph position to not overlap icon
  }
`;

const Question = () => {
  return (
    <>
      <StyledSection>
        <h1>Frequently asked questions</h1>
        <StyledContainer>
          <StyledDivWrapper>
            <StyledDiv>
              <h2>The expense windows adapted sir. Wrong widen drawn</h2>
              <FaPlus />
              <p>
                Offending belonging promotion provision an be oh consulted
                ourselves it. Blessing welcomed ladyship she met humored sir
                breeding her.
              </p>
            </StyledDiv>
            <StyledDiv>
              <h2>Six curiosity day assurance bed necessary?</h2>
              <FaPlus />
            </StyledDiv>
            <StyledDiv>
              <h2>Produce say the ten moments parties?</h2>
              <FaPlus />
            </StyledDiv>
            <StyledDiv>
              <h2>Simple innate summer fat appear basket his desire joy?</h2>
              <FaPlus />
            </StyledDiv>
            <StyledDiv>
              <h2>Outward clothes promise at gravity do excited?</h2>
              <FaPlus />
            </StyledDiv>
          </StyledDivWrapper>
          <QuestionCard />
        </StyledContainer>
      </StyledSection>
    </>
  );
};

export default Question;
