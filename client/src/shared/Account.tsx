import React from "react";
import styled from "styled-components";
import BagIcon from "../assets/svg/bag.svg";
import AccountIcon from "../assets/svg/account.svg";

const Account: React.FC = () => {
  return (
    <Box>
      <Img src={BagIcon} />
      <Img src={AccountIcon} />
    </Box>
  );
};

export default Account;

const Box = styled.div`
  margin: 0 6.25rem 0 0;
`;

const Img = styled.img`
  margin-inline: 0.75rem;
`;
