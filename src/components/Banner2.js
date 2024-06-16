import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: blue; /* Banner background color */
  color: white; /* Banner text color */
`;

const StyledButton = styled.button`
  background-color: orange; /* Button background color */
  color: white; /* Button text color */
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
`;

const Banner2 = () => {
  return (
    <BannerContainer>
        <h1>Discover a better way to manage spendings</h1>
        <StyledButton>Get Started Now</StyledButton>
    </BannerContainer>
  )
}

export default Banner2;
