import React from "react";
import styled from "styled-components";
import ArticleCenter from "shared/ArticleCenter";
import { DEFAULT_HOME_MARGIN } from "common/Space";

const PoppularProduct: React.FC = () => {
  const data = {
    title: "Product",
    subtitle: "Our popular product",
    description:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.",
  };

  return (
    <Box>
      <ArticleCenter {...data} />
    </Box>
  );
};

export default PoppularProduct;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${DEFAULT_HOME_MARGIN};
`;
