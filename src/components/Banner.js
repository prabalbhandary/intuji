import React from 'react';
import styled from 'styled-components';
import { FaStar, FaUser } from "react-icons/fa";

const Section = styled.section`
  display: flex; /* Updated to use flexbox */
  flex-direction: row; /* Align items in a row */
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  padding: 2rem;
  background-color: blue;
  color: white;
`;

const VerticalLine = styled.span`
  display: block;
  height: 100px;
  width: 2px;
  background-color: #000;
  margin: 0 1rem; /* Updated margin for spacing around the line */
`;

const Statistic = styled.div`
  display: flex; /* Use flexbox */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  margin: 1rem;
  padding: 0.5rem 1rem;
`;

const StatNumber = styled.p`
  margin-right: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Banner = () => {
  return (
    <Section>
        <p>We speak with our powerful statistics</p>
        <VerticalLine />
        <Statistic>
            <StatNumber>1M+</StatNumber>
            <FaUser /> Active Users
        </Statistic>
        <Statistic>
            <StatNumber>30k+</StatNumber>
            <FaStar /> 5-Stars Reviews
        </Statistic>
        <Statistic>
            <StatNumber>$252M</StatNumber>
            <FaStar /> Transactions
        </Statistic>
    </Section>
  )
}

export default Banner;
