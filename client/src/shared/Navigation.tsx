import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
import CompanyLogo from "../assets/svg/logo.svg";
import Account from "./Account";
import { device } from "../common/ScreenSize";
import { Container } from "../common/Container";
import NavigationMobile from "./NavigationMobile";

const Navigation: React.FC = () => {
  return (
    <Nav>
      {/* <Desktop>
        <Logo src={CompanyLogo} alt="logo" />
        <Tab />
        <Account />
      </Desktop> */}
      <Mobile>
        <NavigationMobile />
      </Mobile>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  height: 7.5rem;
  border-bottom: 2px solid #f3f3f3;
  justify-content: space-between;
  align-items: center;
`;

const NavCustom = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Desktop = styled(NavCustom)`
  @media only screen and (${device.tablet}) {
    display: none;
  }
`;

const Mobile = styled(NavCustom)`
  display: block;
  @media only screen and (${device.tablet}) {
    display: block;
  }
`;

const Logo = styled.img`
  width: 130.05px;
  height: 42px;
  margin: 0 0 0 6.25rem;
`;
