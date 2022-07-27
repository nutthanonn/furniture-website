import React from "react";
import styled from "styled-components";
import { Heading5, Heading2, Paragraph1 } from "../../common/TextSlyle";
import { Yellow, Gray } from "../../common/Color";
import { PrimaryButton } from "../../common/ButtonStyle";
import Example1 from "../../assets/images/example1.png";
import OurProductNumber from "./OurProductNumber";
import { device } from "../../common/ScreenSize";

const OurProductLeftContent: React.FC = () => {
  return (
    <LeftContent>
      <BoxTitle>
        <Heading5 color={Yellow} style={{ margin: 0 }}>
          Our Product
        </Heading5>
        <Heading2 style={{ margin: "0.875rem 0 0 0" }}>
          Crafted by talented and high quality material
        </Heading2>
      </BoxTitle>
      <BoxSubTitle>
        <Paragraph1 color={Gray} style={{ margin: 0 }}>
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient. morbi
          fermentum, vivamus et accumsan dui tincidunt pulvinar
        </Paragraph1>
      </BoxSubTitle>
      <PrimaryButtonImpl>
        <Heading5 color="white">Learn more</Heading5>
      </PrimaryButtonImpl>
      <OurProductNumberImpl>
        <OurProductNumber />
      </OurProductNumberImpl>
      <Img src={Example1} alt="" />
    </LeftContent>
  );
};

export default OurProductLeftContent;

const LeftContent = styled.div`
  /* border: 2px solid black; */
  @media only screen and (${device.mobileL}) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const BoxTitle = styled.div`
  width: 31.938rem;
  @media only screen and (${device.mobileL}) {
    width: calc(100% - 5rem);
  }
`;

const BoxSubTitle = styled.div`
  width: 35.5rem;
  margin: 3.125rem 0;
  @media only screen and (${device.mobileL}) {
    width: calc(100% - 5rem);
  }
`;

const Img = styled.img`
  margin-top: 3.6rem;
  @media only screen and (${device.mobileL}) {
    width: 327px;
    height: 200px;
    object-fit: cover;
  }
`;

const PrimaryButtonImpl = styled(PrimaryButton)`
  @media only screen and (${device.laptop}) {
    width: calc(100% - 2rem);
  }
`;

const OurProductNumberImpl = styled.div`
  display: none;
  visibility: hidden;

  @media only screen and (${device.laptop}) {
    display: flex;
    visibility: visible;
    align-items: center;
    justify-content: center;
    /* border: 2px solid black; */
  }
`;
