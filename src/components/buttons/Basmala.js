import React from "react";
import styled from "styled-components";

export default function Basmala(props) {
  return (
    <Wrapper onClick={() => props.toggle(true)}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Basmala.svg/2880px-Basmala.svg.png"
        style={{ width: "100%", position: "relative" }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;

  left: 20%;
  top: 25%;
  //margin: auto;
  width: 60%;
  height: 193px;

  //width: 50%;
  //left: 200px;
  //top: 243px;

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.4));

  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;
