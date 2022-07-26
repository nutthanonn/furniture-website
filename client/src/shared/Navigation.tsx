import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
import CompanyLogo from "../assets/svg/logo.svg";
import Account from "./Account";

const Navigation: React.FC = () => {
  return (
    <Nav>
      <Logo src={CompanyLogo} alt="logo" />
      <Tab />
      <Account />
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  height: 7.5rem;
  width: 100%;
  border-bottom: 2px solid #f3f3f3;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 130.05px;
  height: 42px;
  margin: 0 0 0 6.25rem;
`;