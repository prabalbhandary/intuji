import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

const UserSaying = () => {
  return (
    <Section>
      <Heading>Testimonials</Heading>
      <Paragraph>We so opinion friends me message as delight. Whole front to do of plate heard oh ought. His defective nor convinced residence own.</Paragraph>
      <UserCardsContainer>
        <UserCard gender='girl' />
        <UserCard />
      </UserCardsContainer>
    </Section>
  )
}

export default UserSaying;const Section = styled.section`
padding: 2rem;
background: #f0f0f0;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
color: #333;
text-align: center;
`;

const Paragraph = styled.p`
color: #666;
text-align: center;
margin-bottom: 2rem;
`;

const UserCardsContainer = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 2rem;
gap: 4rem;
`;
