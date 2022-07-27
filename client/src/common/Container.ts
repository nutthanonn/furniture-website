import { device } from "./ScreenSize";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 6.25rem;
  @media only screen and (${device.mobileL}) {
    padding: 0 1.5rem;
  }
  /* border: 2px solid black; */
`;
