import React from "react";
import styled from "styled-components";
import BagIcon from "../assets/svg/bag.svg";
import AccountIcon from "../assets/svg/account.svg";

const Account: React.FC = () => {
  return (
    <div>
      <Img src={BagIcon} />
      <Img src={AccountIcon} />
    </div>
  );
};

export default Account;

const Img = styled.img`
  margin-inline: 0.75rem;
`;
