import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: left;
  display: flex;
  gap: 1rem; /* Add gap between cards */
`;

const Card = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;

  h1 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    height: 20px;
    width: 40px;
    margin-bottom: 1rem;
  }
`;

const BlackRectangle = styled.span`
  background-color: black;
`;
const OrangeRectangle = styled.span`
  background-color: orange;
`;

const BlueRectangle = styled.span`
  background-color: blue;
`;

const FAQCards = () => {
  return (
    <StyledSection>
      <Card>
        <BlackRectangle></BlackRectangle>
        <OrangeRectangle></OrangeRectangle>
        <h1>Really boy law county she unable her sister</h1>
        <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
      </Card>
      <Card>
        <BlackRectangle></BlackRectangle>
        <BlueRectangle></BlueRectangle>
        <h1>Among sex are leave law built now</h1>
        <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
      </Card>
      <Card id='up'>
        <h1>Merits behind on afraid or warmly</h1>
      </Card>
      <Card id='down'>
        <h1>Believing neglected so so allowance existence</h1>
      </Card>
    </StyledSection>
  );
};

export default FAQCards;
