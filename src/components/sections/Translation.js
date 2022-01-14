import React from "react";
import styled from "styled-components";
import { H3 } from "../styles/TextStyles";

export default function Translation() {
  return (
    <TextWrapper>
      In the name of Allah, the most Gracious, the most Merciful
    </TextWrapper>
  );
}

const TextWrapper = styled(H3)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 23%;
  top: 40%;
  //margin: auto;
  width: 60%;
  height: 193px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;
