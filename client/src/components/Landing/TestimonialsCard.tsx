import React from "react";
import styled from "styled-components";
import DoubleCouteIcon from "../../assets/svg/doubleCoute.svg";
import { Paragraph1, Heading4, Heading5 } from "../../common/TextSlyle";
import { Gray } from "../../common/Color";
import Nut from "../../assets/images/nutpicture.png";
import StarEarn from "../../assets/svg/star-earn.svg";

const TestimonialsCard: React.FC = () => {
  return (
    <Box>
      <img src={DoubleCouteIcon} alt="" />
      <BoxTitle>
        <Paragraph1 color={Gray}>
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non.
        </Paragraph1>
      </BoxTitle>
      <BoxFooter>
        <img src={Nut} alt="" />
        <CustomHeading4>Nutthanon</CustomHeading4>
        <img src={StarEarn} alt="" style={{ width: "24px" }} />
        <Heading5 style={{ marginLeft: "0.625rem" }}>4.3</Heading5>
      </BoxFooter>
    </Box>
  );
};

export default TestimonialsCard;

const Box = styled.div`
  width: 34rem;
  height: 16rem;
  background: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1.625rem 1.5rem 0 1.5rem;
  margin: 0 2rem;
`;

const BoxTitle = styled.div`
  width: 31rem;
  margin: 1.625rem 0;
`;

const BoxFooter = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const CustomHeading4 = styled(Heading4)`
  margin-left: 0.875rem;
  flex-grow: 1;
  /* border: 2px solid black; */
`;
