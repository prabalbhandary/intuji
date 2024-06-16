import React from "react";
import styled from "styled-components";
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';

const UserCard = ({ gender }) => {
  const imageSrc = gender === 'girl' ? girl : boy;

  return (
    <StyledCard>
      <Content>
        <Circle>"</Circle>
        <Quote>
          Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted, sir. Wrong widen.
        </Quote>
        <Author>- Mike Taylor, Web Designer</Author>
      </Content>
      <ImageContainer>
        <img src={imageSrc} alt={gender} style={{ width: '100px', height: '100px' }} />
      </ImageContainer>
    </StyledCard>
  );
};

export default UserCard;

const StyledCard = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const ImageContainer = styled.div`
  width: '145px';
  height: '140px';
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
`;

const Author = styled.p`
font-size: .9rem;
font-style: italic;
`;
