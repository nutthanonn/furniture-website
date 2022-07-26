import React from "react";
import styled from "styled-components";
import { Heading5, Heading2, Paragraph1 } from "../../common/TextSlyle";
import { Yellow, Gray } from "../../common/Color";
import { PrimaryButton } from "../../common/ButtonStyle";
import Example1 from "../../assets/images/example1.png";

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
      <PrimaryButton>
        <Heading5 color="white">Learn more</Heading5>
      </PrimaryButton>
      <Img>
        <img src={Example1} alt="" />
      </Img>
    </LeftContent>
  );
};

export default OurProductLeftContent;

const LeftContent = styled.div`
  /* border: 2px solid black; */
`;

const BoxTitle = styled.div`
  width: 31.938rem;
`;

const BoxSubTitle = styled.div`
  width: 35.5rem;
  margin: 3.125rem 0;
`;

const Img = styled.div`
  margin-top: 3.6rem;
`;
