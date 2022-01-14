import React from "react";
import NavBar from "../sections/Navbar";
import styled from "styled-components";
import "./layout.css";
import HomePage from "../sections/HomePage";

function Layout({ children }) {
  return (
    <>
      <Wrapper>
        <NavBar />
      </Wrapper>
    </>
  );
}

export default Layout;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    180deg,
    rgba(36, 81, 32, 0.88785) 0.01%,
    #009000 27.08%,
    rgba(255, 255, 255, 0) 100%
  );

  overflow: hidden;
`;
