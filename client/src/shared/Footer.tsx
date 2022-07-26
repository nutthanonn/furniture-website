import React from "react";
import styled from "styled-components";
import Logo from "../assets/svg/logo.svg";
import { Container } from "../common/Container";
import { Paragraph1, Heading4 } from "../common/TextSlyle";
import { Contact } from "../data/Contact";

const Footer: React.FC = () => {
  return (
    <Container>
      <Box>
        <LogoDetail>
          <img src={Logo} alt="" />
          <Paragraph1 style={{ width: "31.5rem" }}>
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </Paragraph1>
        </LogoDetail>
        <ContactBox>
          {Contact.map((item) => {
            return (
              <Grid>
                <Heading4 style={{ margin: 0 }}>{item.title}</Heading4>
                {item.categories.map((categories) => {
                  return (
                    <ContactLink style={{ margin: "12px 0" }}>
                      {categories}
                    </ContactLink>
                  );
                })}
              </Grid>
            );
          })}
        </ContactBox>
      </Box>
    </Container>
  );
};

export default Footer;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1.5px solid #ece4de;
  height: 18.125rem;
  margin-bottom: 5.5rem;
`;

const LogoDetail = styled.div`
  margin: auto 0;
`;

const ContactBox = styled.div`
  display: grid;
  margin-top: auto;
  width: 35rem;
  height: 13rem;
  grid-template-columns: auto auto auto;
`;

const Grid = styled.div`
  margin-left: auto;
`;

const ContactLink = styled(Paragraph1)`
  cursor: pointer;
`;
