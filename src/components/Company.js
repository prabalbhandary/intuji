import React from "react";
import styled from "styled-components";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";

const Company = () => {
  return (
    <>
        <p style={{textAlign: "center", fontWeight: "bold"}}>Over 32k+ software businesses growing with AR Shakir.</p>
      <ImageContainer>
        <img src={img1} alt="Img1" />
        <img src={img2} alt="Img2" />
        <img src={img3} alt="Img3" />
        <img src={img4} alt="Img4" />
        <img src={img5} alt="Img5" />
        <img src={img6} alt="Img6" />
        <img src={img7} alt="Img7" />
      </ImageContainer>
    </>
  );
};

export default Company;

const ImageContainer = styled.div`
  display: flex;
  gap: 5rem;
  overflow-x: auto;
`;
