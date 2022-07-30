import React from "react";
import styled from "styled-components";
import { Container } from "common/Container";
import ArticleCenter from "shared/ArticleCenter";
import { DEFAULT_HOME_MARGIN } from "common/Space";

const Testimonials: React.FC = () => {
  const data = {
    title: "Testimonials",
    subtitle: "What our customer say",
    description:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.",
  };

  return (
    <Box>
      <ArticleCenter {...data} />
    </Box>
  );
};

export default Testimonials;

const Box = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: ${DEFAULT_HOME_MARGIN};
  /* border: 2px solid black; */
`;
