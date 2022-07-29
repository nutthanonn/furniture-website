import React from "react";
import styled from "styled-components";
import { Heading2, Paragraph1 } from "common/TextSlyle";
import { Gray } from "common/Color";

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
      {data.map((item, i) => {
        return (
          <div key={i}>
            <Heading2 style={{ margin: 0 }}>{item.nums}</Heading2>
            <Paragraph1Impl color={Gray} style={{ margin: 0 }}>
              {item.title}
            </Paragraph1Impl>
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

const Paragraph1Impl = styled(Paragraph1)`
  font-size: 1.5vw;
`;
