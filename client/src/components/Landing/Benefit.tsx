import React from "react";
import styled from "styled-components";
import { Container } from "common/Container";
import { Heading5, Heading2, Paragraph1 } from "common/TextSlyle";
import BenefitBlog from "./BenefitBlog";
import { Gray, Yellow } from "common/Color";
import { device } from "common/ScreenSize";

const Benefit: React.FC = () => {
  return (
    <Container>
      <Box>
        <BenifitBox>
          <Title color={Yellow}>Benefits</Title>
          <SubTitle>Benefits when using our services</SubTitle>
        </BenifitBox>
        <SubBenifitBox>
          <Paragraph1 color={Gray}>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </Paragraph1>
        </SubBenifitBox>
      </Box>
      <BenefitBlog />
    </Container>
  );
};

export default Benefit;

const Box = styled.div`
  margin-top: 11.25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media only screen and (${device.laptop}) {
    align-items: baseline;
    flex-direction: column;
  }

  /* border: 2px solid black; */
`;

const BenifitBox = styled.div`
  width: 26.688rem;
  height: 9.438rem;
  @media only screen and (${device.mobileL}) {
    width: 100%;
  }
  /* border: 2px solid black; */
`;

const Title = styled(Heading5)`
  margin: 0 0 0.875rem 0;
`;

const SubTitle = styled(Heading2)`
  margin: 0;
  @media only screen and (${device.mobileL}) {
    font-size: 30px;
    width: 100%;
  }
`;

const SubBenifitBox = styled.div`
  width: 31.563rem;
  height: fit-content;
  @media only screen and (${device.mobileL}) {
    width: 100%;
  }
  /* border: 2px solid black; */
`;
