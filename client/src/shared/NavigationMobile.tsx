import React from "react";
import styled from "styled-components";
import Logo from "../assets/svg/logo.svg";
import MenuIconSvg from "../assets/svg/menu.svg";
import { Gray } from "../common/Color";

const NavigationMobile: React.FC = () => {
  return (
    <Box>
      <img src={Logo} alt="" />

      <MenuIcon src={MenuIconSvg} alt="" />
    </Box>
  );
};

export default NavigationMobile;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuIcon = styled.img`
  margin-right: 0.5rem;
  &:hover {
    box-shadow: 0 0 0 0.5rem ${Gray};
    border-radius: 50%;
    background-color: ${Gray};
  }
  transition: all 0.5s ease;
  cursor: pointer;
`;
