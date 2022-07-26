import React from "react";
import styled from "styled-components";
import { Heading2, Paragraph1 } from "../../common/TextSlyle";
import { Gray } from "../../common/Color";

interface OurProductNumberProps {
  title: string;
  nums: string;
}

const data: Array<OurProductNumberProps> = [
  {
    title: "Year expreience",
    nums: "20+",
  },
  {
    title: "Happy Client",
    nums: "483",
  },
  {
    title: "Project Finish",
    nums: "150+",
  },
];

const OurProductNumber: React.FC = (props) => {
  return (
    <Box>
      {data.map((item) => {
        return (
          <div>
            <Heading2 style={{ margin: 0 }}>{item.nums}</Heading2>
            <Paragraph1 color={Gray}>{item.title}</Paragraph1>
          </div>
        );
      })}
    </Box>
  );
};

export default OurProductNumber;

const Box = styled.div`
  margin-top: 2.3rem;
  display: flex;
  gap: 3.125rem;
  justify-content: flex-end;
  /* border: 2px solid black; */
`;
