import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/svg/logo.svg";
import MenuIconSvg from "../assets/svg/menu.svg";
import { Gray, Yellow } from "../common/Color";
import { useNavigate } from "react-router-dom";
import { Heading3 } from "../common/TextSlyle";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";
import { BiGroup } from "react-icons/bi";
import { device } from "../common/ScreenSize";

const NavigationMobile: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const TabItem = ["Product", "Service", "Article", "About Us"];
  const icon = [
    <MdOutlineProductionQuantityLimits size={30} />,
    <AiTwotoneCustomerService size={30} />,
    <RiArticleFill size={30} />,
    <BiGroup size={30} />,
  ];
  const navigate = useNavigate();

  return (
    <Box>
      <img src={Logo} alt="" onClick={() => navigate("")} />
      <MenuIcon src={MenuIconSvg} alt="" onClick={() => setOpenMenu(true)} />
      <MenuBar isOpen={openMenu}>
        {TabItem.map((item, i) => {
          return (
            <MenuItem key={i} onClick={() => navigate(`/${item}`)}>
              {icon[i]}
              <Heading3 color="#3C3B39">{item}</Heading3>
            </MenuItem>
          );
        })}
      </MenuBar>
      {openMenu ? <BackgroundMenuBar onClick={() => setOpenMenu(false)} /> : ""}
    </Box>
  );
};

export default NavigationMobile;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    margin: 0 auto;
  }
`;

const MenuIcon = styled.img`
  &:hover {
    background-color: ${Gray};
  }
  padding: 0.2rem;
  border-radius: 50%;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const BackgroundMenuBar = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(239, 239, 240, 0.7);
  z-index: 998;
`;

const MenuBar = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  width: 50vw;
  margin-left: auto;
  box-shadow: 0px 4px 80px rgba(175, 173, 181, 0.2);
  transform: ${(props: { isOpen: boolean }) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s ease;
`;

const MenuItem = styled.div`
  width: 100%;
  height: 8vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 1rem;
  &:hover {
    background-color: rgba(239, 239, 240, 0.9);
    > h3 {
      color: ${Yellow};
      transition: color 0.5s ease;
    }
  }
  transition: background-color 0.5s ease;
  cursor: pointer;
  gap: 2rem;
  > h3 {
    @media only screen and (${device.mobileL}) {
      font-size: 18px;
    }
  }
  @media only screen and (${device.tablet}) {
    height: 5vh;
  }
`;
