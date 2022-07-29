import React from "react";
import styled from "styled-components";
import Logo from "../assets/svg/logo.svg";
import { Container } from "../common/Container";
import { device } from "../common/ScreenSize";
import { Paragraph1, Heading4 } from "../common/TextSlyle";
import { Contact } from "../data/Contact";
import { Gray } from "../common/Color";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <Container>
      <Box>
        <LogoDetail>
          <img src={Logo} alt="" onClick={handleClickLogo} />
          <Paragraph1Impl>
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </Paragraph1Impl>
        </LogoDetail>
        <ContactBox>
          {Contact.map((item, i) => {
            return (
              <Grid key={i}>
                <Heading4>{item.title}</Heading4>
                {item.categories.map((categories, i) => {
                  return (
                    <ContactLink style={{ margin: "12px 0" }} key={i}>
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
  margin-bottom: 5.5rem;
  @media only screen and (${device.tablet}) {
    flex-direction: column;
    padding-top: 3rem;
  }

  /* border: 2px solid black; */
`;

const LogoDetail = styled.div`
  margin: auto 0;
  width: 30rem;
  @media only screen and (${device.mobileL}) {
    width: 100%;
  }

  > img {
    cursor: pointer;
  }

  /* border: 2px solid black; */
`;

const ContactBox = styled.div`
  display: grid;
  margin-top: auto;
  width: 35rem;
  height: fit-content;
  grid-template-columns: auto auto auto;
  @media only screen and (${device.mobileL}) {
    width: 100%;
  }
  /* border: 2px solid black; */
`;

const Grid = styled.div`
  margin-left: auto;
  @media only screen and (${device.laptop}) {
    margin-right: auto;
    margin-left: 0;
  }
`;

const ContactLink = styled(Paragraph1)`
  cursor: pointer;
  &:hover {
    color: ${Gray};
  }
  @media only screen and (${device.tablet}) {
    color: ${Gray};
  }

  @media only screen and (${device.mobileM}) {
    font-size: 10px;
    color: ${Gray};
  }
`;

const Paragraph1Impl = styled(Paragraph1)`
  @media only screen and (${device.tablet}) {
    color: ${Gray};
  }

  @media only screen and (${device.mobileM}) {
    font-size: 10px;
    color: ${Gray};
  }
`;
