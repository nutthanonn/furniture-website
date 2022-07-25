import React, { useState } from "react";
import styled from "styled-components";
import { Paragraph1 } from "../common/TextSlyle";

const Tab: React.FC = () => {
  const TabItem = ["Product", "Service", "Article", "About Us"];
  const [isSelect, setIsSelect] = useState<string>("Product");

  return (
    <div>
      <TabChild>
        {TabItem.map((item, index) => {
          return (
            <HeadingCustom
              key={index}
              val={isSelect === item ? true : false}
              onClick={() => setIsSelect(item)}
            >
              {item}
            </HeadingCustom>
          );
        })}
      </TabChild>
    </div>
  );
};

export default Tab;

const TabChild = styled.div`
  display: flex;
  width: 28.813rem;
  justify-content: space-around;
`;

const HeadingCustom = styled(Paragraph1)`
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props: { val: boolean }) =>
      props.val ? " #518581 " : "transparent"};
    bottom: -140%;
    left: 0;
    transition: background-color 0.25s ease;
  }
`;
