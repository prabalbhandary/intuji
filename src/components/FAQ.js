import React from 'react';
import styled from 'styled-components';
import FAQCards from './FAQCards';

const StyledSection = styled.section`
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: left; /* Align text to start from the left */
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333; /* Adjust color as needed */
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #666; /* Adjust color as needed */
`;

const FAQ = () => {
  return (
    <StyledSection>
      <Title>Features That Blow Your Mind</Title>
      <Description>
        We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.
      </Description>
      <FAQCards />
    </StyledSection>
  );
};

export default FAQ;
