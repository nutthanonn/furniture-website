import React from "react";
import styled from "styled-components";
import ArrowLeft from "../assets/svg/arrow-left.svg";

const ArrowCarousel: React.FC = () => {
  return (
    <div>
      <ArrowSlideLeft className="swiper-button-prev-custom">
        <img src={ArrowLeft} alt="arrow-left" />
      </ArrowSlideLeft>
      <ArrowSlideRight className="swiper-button-next-custom">
        <img src={ArrowLeft} alt="arrow-right" />
      </ArrowSlideRight>
    </div>
  );
};

export default ArrowCarousel;

const ArrowSlide = styled.div`
  position: absolute;
  width: 3.25rem;
  height: 3.25rem;
  top: calc(50% - (3.25rem / 2));
  z-index: 10;
  background: rgba(21, 20, 17, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  > * {
    margin: auto;
  }
`;

const ArrowSlideLeft = styled(ArrowSlide)`
  left: 3.125rem;
`;

const ArrowSlideRight = styled(ArrowSlide)`
  right: 3.125rem;
  > img {
    transform: rotate(180deg);
  }
`;
