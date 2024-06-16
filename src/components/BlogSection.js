import React from 'react';
import styled from 'styled-components';
import image from '../assets/Image.png';
import Card from './Card';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: left;
`;

const ContentWrapper = styled.div`
  flex: 1;
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

const ImageWrapper = styled.div`
  flex: 1;
  text-align: right;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const BlogSection = () => {
  return (
    <StyledSection>
      <ContentWrapper>
        <p style={{ color: 'purple' }}>WHY CHOOSE US</p>
        <Title>Save money with proper transactions</Title>
        <Description>
          We so opinion friends me message at delight. Whole front do of plate heard oh ought. His defectivenor convinced residence own.
        </Description>
        <Card />
      </ContentWrapper>
      <ImageWrapper>
        <Image src={image} alt="image" />
      </ImageWrapper>
    </StyledSection>
  );
};

export default BlogSection;
