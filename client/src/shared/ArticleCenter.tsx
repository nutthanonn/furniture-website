import React from "react";
import styled from "styled-components";
import { Yellow, Gray } from "../common/Color";
import { Heading5, Heading2, Paragraph1 } from "../common/TextSlyle";

interface ArticleProps {
  title: string;
  subtitle: string;
  description: string;
}

const ArticleCenter: React.FC<ArticleProps> = (props) => {
  const { title, subtitle, description } = props;
  return (
    <div>
      <BoxTitle>
        <CustomHeading5 color={Yellow}>{title}</CustomHeading5>
        <CustomHeading2>{subtitle}</CustomHeading2>
      </BoxTitle>
      <BoxSubtitle>
        <Paragraph1 color={Gray} style={{ margin: 0 }}>
          {description}
        </Paragraph1>
      </BoxSubtitle>
    </div>
  );
};

export default ArticleCenter;

const BoxTitle = styled.div`
  margin: auto;
  text-align: center;
  margin-bottom: 1.875rem;
  /* border: 2px solid black; */
`;

const CustomHeading5 = styled(Heading5)`
  margin: 0;
`;

const CustomHeading2 = styled(Heading2)`
  margin: 0.875rem 0 0 0;
`;

const BoxSubtitle = styled.div`
  text-align: center;
  width: 41rem;
  margin: 0 auto;
  /* border: 2px solid black; */
`;
