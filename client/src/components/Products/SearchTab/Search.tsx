import React, { useRef, useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../../assets/svg/search.svg";
import { PrimaryButton } from "../../../common/ButtonStyle";
import { Input } from "../../../common/InputStyle";
import { Heading5 } from "../../../common/TextSlyle";
import { Gray } from "../../../common/Color";
import { Container } from "../../../common/Container";
import Filter from "./Filter";
import { ProductStoreImpl } from "store/ProductStore";

interface SearchPropsType {
  store: ProductStoreImpl;
}

const Search: React.FC<SearchPropsType> = (props) => {
  const { store } = props;

  const handleInput = useRef<HTMLInputElement>(null);
  const [searchVal, setSearchVal] = useState<string>("");

  const handleClick = () => {
    handleInput.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;

    setSearchVal(val);
    store.setSearchValue(val);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchVal("");
    store.setSearchValue("");
  };

  return (
    <ContainerCustom>
      <Box role="form" onSubmit={handleSubmit}>
        <img
          src={SearchIcon}
          alt=""
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <InputCustom
          type="text"
          ref={handleInput}
          placeholder="Search property"
          spellCheck="false"
          autoComplete="false"
          onChange={handleChange}
          value={searchVal}
          style={{ color: Gray }}
        />
        <PrimaryButton type="submit">
          <Heading5 color="white">Find Now</Heading5>
        </PrimaryButton>
      </Box>
      <Filter />
    </ContainerCustom>
  );
};

export default Search;

const ContainerCustom = styled(Container)`
  margin: 3.125rem 0;
  display: flex;
  gap: 20px;
`;

const Box = styled.form`
  background: #ffffff;
  box-shadow: 0px 4px 80px rgba(175, 173, 181, 0.2);
  display: flex;
  align-items: center;
  width: 1030px;
  height: 84px;
  > * {
    margin: 1.125rem;
  }
`;

const InputCustom = styled(Input)`
  margin: 0 1rem;
  flex-grow: 1;
  ::placeholder {
    color: #afadb5;
  }
`;
