import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import heroImage from "../assets/hero-image.png";
import { IoIosCheckmarkCircle } from "react-icons/io";

const HeroSection = () => {
  return (
    <Hero>
      <TextContainer>
        <h1>Managing freelance payments has never been easier</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing.
        </p>
        <ButtonContainer style={{ cursor: "pointer" }}>
          <Button>Get Started</Button>
          <Circle>
            <FaPlay />
          </Circle>
          <p>See How It Works</p>
        </ButtonContainer>
        <ServiceInfo>
          <p>
            <IoIosCheckmarkCircle /> Free Register
          </p>
          <p>
            <IoIosCheckmarkCircle /> Great Service
          </p>
        </ServiceInfo>
      </TextContainer>
      <StyledImage src={heroImage} alt="Hero Image" />
    </Hero>
  );
};

export default HeroSection;

const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background: #f0f4f8;
`;

const TextContainer = styled.div`
  max-width: 50%;

  h1 {
    font-size: 2.5rem;
  }

  p {
    margin: 1rem 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 71px;
  cursor: pointer;
  margin-right: 1rem;
`;

const Circle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  color: #333;
  font-size: 1rem;
`;

const StyledImage = styled.img`
  max-width: 40%;
`;

const ServiceInfo = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  gap: 6rem;
`;
