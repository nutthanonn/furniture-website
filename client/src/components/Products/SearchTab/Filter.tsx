import React from "react";
import styled from "styled-components";
import FilterIcon from "assets/svg/filter.svg";
import { Button } from "common/ButtonStyle";
import { Paragraph1 } from "common/TextSlyle";

const Filter: React.FC = () => {
  return (
    <ButtomCustom>
      <Box>
        <img src={FilterIcon} alt="" />
        <Paragraph1>Filter</Paragraph1>
      </Box>
    </ButtomCustom>
  );
};

export default Filter;

const ButtomCustom = styled(Button)`
  width: 190px;
  height: 84px;
  background: #ffffff;
  box-shadow: 0px 4px 120px rgba(175, 173, 181, 0.15);
`;

const Box = styled.div`
  display: flex;
  gap: 0.5rem;
`;
