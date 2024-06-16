import React from "react";
import styled from "styled-components";
import img1 from "../assets/r.png";
import { FaArrowRightLong } from "react-icons/fa6";
import RecentBlogsCard from "./RecentBlogsCard";

const FlexContainer = styled.div`
  display: flex;
  align-items: center; // This will vertically center align items if they have different heights
  justify-content: space-between; // This will add space between your items
`;

const RecentBlogs = () => {
  return (
    <>
      <FlexContainer>
        <section>
          <h1>Recent Blogs</h1>
          <p>Best practices</p>
          <strong>
            In design active temper be uneasy. Thirty for remove plenty regard.
          </strong>
          <p>
            Read More <FaArrowRightLong />
          </p>
        </section>
        <img src={img1} alt="img1" />
      </FlexContainer>
      <RecentBlogsCard />
    </>
  );
};

export default RecentBlogs;
