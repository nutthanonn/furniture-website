import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Paragraph1 } from "../common/TextSlyle";
import { Green } from "../common/Color";
import { GetPath } from "../helper/GetPath";

const Tab: React.FC = () => {
  const TabItem = ["product", "service", "article", "about us"];
  const [isSelect, setIsSelect] = useState<string>("");

  useEffect(() => {
    setIsSelect(GetPath());
  }, [isSelect]);

  const handleClick = (item: string) => {
    setIsSelect(item);
  };

  return (
    <div>
      <TabChild>
        {TabItem.map((item, index) => {
          return (
            <li key={index}>
              <a href={`/${item}`}>
                <HeadingCustom
                  val={isSelect === item ? true : false}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </HeadingCustom>
              </a>
            </li>
          );
        })}
      </TabChild>
    </div>
  );
};

export default Tab;

const TabChild = styled.ul`
  display: flex;
  width: 28.813rem;
  justify-content: space-around;

  list-style: none;
  padding: 0;
  > li > a {
    text-decoration: none;
  }
`;

const HeadingCustom = styled(Paragraph1)`
  position: relative;
  cursor: pointer;
  text-transform: capitalize;
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
