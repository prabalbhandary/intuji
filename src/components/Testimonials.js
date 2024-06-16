import React from 'react';
import styled from 'styled-components';
import img from '../assets/test.png';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: left;
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-right: 2rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ContentWrapper = styled.div`
  flex: 2;
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

const IconWrapper = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  color: #ff8c00; /* Adjust color as needed */
`;

const Testimonials = () => {
  return (
    <StyledSection id='testimonials'>
      <ImageWrapper>
        <Image src={img} alt="img" />
      </ImageWrapper>
      <ContentWrapper>
        <p style={{ color: 'purple' }}>WHY CHOOSE US</p>
        <Title>Track your payments on the go with the best way possible</Title>
        <Description>
          Indulgence way everything joy alteration boisterous the attachment. Party we years to orders allow asked of.
        </Description>
        <hr />
        <IconWrapper>
          <IoIosCheckmarkCircle />
        </IconWrapper>
        Get Overview at a glance
        <br />
        <IconWrapper>
          <IoIosCheckmarkCircle />
        </IconWrapper>
        Deposit funds easily and securely
        <br />
        <IconWrapper>
          <IoIosCheckmarkCircle />
        </IconWrapper>
        Get Live Support
      </ContentWrapper>
    </StyledSection>
  );
};

export default Testimonials;
