import React from "react";
import styled from "styled-components";
import { FaFacebookMessenger, FaInfinity } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import Footer2 from "./Footer2";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 4rem;
  background-color: #fff;
  color: #000;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }

  strong {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    display: block;
  }

  p {
    margin-top: 0.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  svg {
    margin: 0 0.5rem;
    font-size: 1.5rem;
    color: blue;
    cursor: pointer;
    transition: color 0.3s;
  }
`;

const CompanyList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;

  li {
    margin: 0.5rem 0;
    cursor: pointer;
    transition: color 0.3s;
  }
`;

const ResourcesList = styled(CompanyList)``;

const NewsletterSection = styled(FooterSection)`
  input {
    margin-top: 0.5rem;
    padding: 0.75rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    width: 100%;
    max-width: 300px;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.75rem 1.5rem;
    background-color: blue;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  p {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: #ccc;
  }
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <FooterSection>
          <strong>AR Shakir</strong>
          <p>Finance helps companies manage payments easily.</p>
          <SocialIcons>
            <FaLinkedinIn />
            <FaFacebookMessenger />
            <FaTwitter />
            <FaInfinity />
          </SocialIcons>
        </FooterSection>
        <FooterSection>
          <strong>Company</strong>
          <CompanyList>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </CompanyList>
        </FooterSection>
        <FooterSection>
          <strong>Resources</strong>
          <ResourcesList>
            <li>Proposal Template</li>
            <li>Invoice Template</li>
            <li>Tutorial</li>
            <li>How to write a contract</li>
          </ResourcesList>
        </FooterSection>
        <NewsletterSection>
          <strong>Join Our Newsletter</strong>
          <div style={{ display: "flex" }}>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
          <p>
            * Will send you weekly updates for your better finance management
          </p>
        </NewsletterSection>
      </StyledFooter>
      <hr />
      <Footer2 />
    </>
  );
};

export default Footer;
