import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledCard>
      <Circle>"</Circle>
      <Quote>
        Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted, sir. Wrong widen.
      </Quote>
      <Author>- Mike Taylor, Web Designer</Author>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Quote = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Author = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  text-align: center;
`;
