import React, { useRef, useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/svg/search.svg";
import { PrimaryButton } from "../../common/ButtonStyle";
import { Input } from "../../common/InputStyle";
import { Heading5 } from "../../common/TextSlyle";
import { Gray } from "../../common/Color";
import { device } from "../../common/ScreenSize";

const Search: React.FC = () => {
  const handleInput = useRef<HTMLInputElement>(null);
  const [searchVal, setSearchVal] = useState<string>("");

  const handleClick = () => {
    handleInput.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchVal("");
  };

  return (
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
        <Heading5 color="white">Search</Heading5>
      </PrimaryButton>
    </Box>
  );
};

export default Search;

const Box = styled.form`
  width: 50.625rem;
  height: 5.25rem;
  background: #ffffff;
  box-shadow: 0px 4px 80px rgba(175, 173, 181, 0.2);
  position: absolute;
  top: -2.5rem;
  left: calc(50% - (50.625rem / 2));
  display: flex;
  align-items: center;
  padding: 0 1.625rem;

  @media only screen and (${device.laptop}) {
    width: calc(100% - 1.6rem);
    height: calc(100% - 20rem);
    position: static;
    padding: 0 0 0 1.625rem;
    /* border: 2px solid black; */
  }

  > button > h5 {
    @media only screen and (${device.mobileM}) {
      font-size: 10px;
      padding: 0 0.1rem;
    }
  }
`;

const InputCustom = styled(Input)`
  margin: 0 1rem;
  @media only screen and (${device.mobileS}) {
    width: 5rem;
  }
  flex-grow: 1;
  ::placeholder {
    color: #afadb5;
  }
`;
