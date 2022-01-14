import React from "react";
import Layout from "../layout/layout";

import styled from "styled-components";
import Basmala from "../buttons/Basmala";
import Translation from "./Translation";
import { MissionStatement } from "./MissionStatement";

const img_source = "https://i.ibb.co/JtQFnzS/CMU.png";

export default function HomePage() {
  //console.log(false);
  const [is_clicked, toggle] = React.useState(false);
  return (
    <Wrapper>
      <Layout />

      <Basmala toggle={toggle} is_clicked={is_clicked} />
      <div>{is_clicked}</div>

      <Translation is_clicked={is_clicked} />
      <MissionStatement is_clicked={is_clicked} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  //background-image: url("src/components/images/hamerschlag.jpeg");
  //position: relative;
  width: 100%;
  height: 1080px;
  left: 0px;
  top: 100px;
  //display: flex;

  background: url("https://i.ibb.co/JtQFnzS/CMU.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  //mix-blend-mode: darken;
`;
