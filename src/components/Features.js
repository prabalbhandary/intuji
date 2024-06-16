import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Features = () => {
  return (
    <StyledSection id="features">
      <h1>Automated Portfolio Tracking</h1>
      <Content>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing.
        </p>
        <Card />
      </Content>
    </StyledSection>
  );
};

export default Features;

const StyledSection = styled.section`
  padding: 2rem 0;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
