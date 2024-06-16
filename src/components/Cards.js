import React from "react";
import styled from "styled-components";

const Cards = () => {
  return (
    <StyledCards>
      <Card>
        <p>
          <strong>01</strong>
        </p>
        <span className="black-rectangle"></span>
        <span className="blue-rectangle"></span>
        <h1>Connect wallets & companies</h1>
        <p>
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to orders allow asked of
        </p>
      </Card>
      <Card>
        <p>
          <strong>02</strong>
        </p>
        <span className="black-rectangle"></span>
        <span className="orange-rectangle"></span>
        <h1>Review transactions</h1>
        <p>
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to orders allow asked of
        </p>
      </Card>
      <Card>
        <p>
          <strong>03</strong>
        </p>
        <span className="black-rectangle"></span>
        <span className="yellow-rectangle"></span>
        <h1>Get income insights</h1>
        <p>
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to orders allow asked of
        </p>
      </Card>
    </StyledCards>
  );
};

export default Cards;

const StyledCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem; /* Add gap between cards */
`;

const Card = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 300px;

  h1 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .black-rectangle,
  .orange-rectangle,
  .blue-rectangle,
  .yellow-rectangle {
    display: block;
    height: 20px;
    width: 40px;
    margin: 0 auto; /* Center horizontally */
    margin-bottom: 1rem;
  }

  .black-rectangle {
    background-color: #000;
  }

  .orange-rectangle {
    background-color: #ff8c00;
  }
  .blue-rectangle {
    background-color: blue;
  }
  .yellow-rectangle {
    background-color: yellow;
  }
`;
