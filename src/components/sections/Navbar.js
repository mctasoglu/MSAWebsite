import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { BodyIntro, BodyMain, H1, H3 } from "../styles/TextStyles";

const headerData = [
  { title: "Who We Are", icon: <i class="fa fa-star-and-crescent"></i> },
  { title: "Our Services", icon: <i className="fa fa-mosque"></i> },
  { title: "Exec Board", icon: <i className="fa fa-laugh"></i> },
  { title: "Contact Us", icon: <i className="fa fa-comment"></i> },
];

const menuData = [
  { title: "Courses", icon: "/images/icons/courses.svg", link: "/courses" },
  {
    title: "Tutorials",
    icon: "/images/icons/tutorials.svg",
    link: "/tutorials",
  },
  { title: "Pricing", icon: "/images/icons/pricing.svg", link: "/pricing" },
  { title: "", icon: "/images/icons/search.svg", link: "/search" },
  { title: "", icon: "/images/icons/account.svg", link: "/account" },
];

export default function NavBar() {
  //const [is_inside, setCursor] = React.useState(false);

  const handleMouseEnter = (e) => {
    //setCursor(!is_inside);
    //console.log("Inside");
    e.target.style.cursor = "pointer";
    //e.target.style.cursor = "pointer";

    //console.log(is_inside);
  };

  const handleMouseLeave = (e) => {
    //is_inside = false;
    //console.log("outside");
    //console.log(e.target.parentElement);
    e.target.style.cursor = "default";
  };

  return (
    <Wrapper>
      <LogoWrapper>CMU MSA</LogoWrapper>
      <NavWrapper>
        {headerData.map((item, index) => (
          <NavItem
            className={index}
            id={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <IconWrapper onMouseEnter={handleMouseEnter}>
              {item.icon}
            </IconWrapper>
            <TextWrapper onMouseEnter={handleMouseEnter}>
              {item.title}
            </TextWrapper>
          </NavItem>
        ))}
      </NavWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 173px;
  left: 50px;
  top: 40px;
`;

const LogoWrapper = styled(H1)`
  position: absolute;
  left: 0%;
  right: 89.6%;
  top: 0%;
  bottom: 0%;
  color: white;
`;

const NavWrapper = styled.div`
  position: absolute;
  left: 29.58%;
  right: 0%;
  top: 13.29%;
  bottom: 44.51%;
  display: grid;
  grid-template-columns: 220px 220px 220px 220px;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;

  border-radius: 16px;

  :hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }
`;

const TextWrapper = styled(BodyIntro)`
  position: static;
  width: 150px;
  height: 41px;
  left: 81px;
  top: 16px;

  display: flex;
  align-items: center;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  margin: 0px 1px;
`;

const IconWrapper = styled.div`
  position: static;
  width: 36px;
  height: 41px;
  left: 43.5px;
  top: 16px;

  font-family: Font Awesome 5 Free;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 41px;
  display: flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.6);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 20px;
`;
