import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Paragraph1 } from "../common/TextSlyle";
import { useNavigate } from "react-router-dom";
import { Green } from "../common/Color";
import { GetPath } from "../helper/GetPath";

const Tab: React.FC = () => {
  const TabItem = ["Product", "Service", "Article", "About Us"];
  const [isSelect, setIsSelect] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    setIsSelect(GetPath());
  });

  const handleClick = (item: string) => {
    setIsSelect(item);
    navigate(`/${item}`);
  };

  return (
    <div>
      <TabChild>
        {TabItem.map((item, index) => {
          return (
            <HeadingCustom
              key={index}
              val={isSelect === item ? true : false}
              onClick={() => handleClick(item)}
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
    bottom: -141%;
    left: 0;
    transition: background-color 0.25s ease;
  }
  color: ${(props: { val: boolean }) => (props.val ? Green : "black")};
  &:hover {
    color: ${Green};
  }
`;
