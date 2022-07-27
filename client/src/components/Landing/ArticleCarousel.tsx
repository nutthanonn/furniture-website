import "swiper/css";
import React from "react";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleCard from "./ArticleCard";
import { Navigation, Autoplay } from "swiper";
import styled from "styled-components";
import { Button } from "../../common/ButtonStyle";
import ArrowLeft from "../../assets/svg/arrow-article-left.svg";
import ArrowRight from "../../assets/svg/arrow-article-right.svg";
import { data } from "../../assets/test/data/articleCarouselData";
import { device } from "../../common/ScreenSize";

const ArticleCarousel: React.FC = () => {
  return (
    <Box>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {data.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <ArticleCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <BoxBtn>
        <NextBtn className="swiper-button-prev-custom">
          <img src={ArrowLeft} alt="" />
        </NextBtn>
        <PrevBtn className="swiper-button-next-custom">
          <img src={ArrowRight} alt="" />
        </PrevBtn>
      </BoxBtn>
    </Box>
  );
};

export default ArticleCarousel;

const Box = styled.div`
  position: relative;
  width: 36.375rem;
  height: 35.3rem;
  @media only screen and (${device.mobileL}) {
    width: 20rem;
    height: fit-content;
  }
  /* border: 2px solid black; */
`;

const BoxBtn = styled.div`
  position: absolute;
  display: flex;
  bottom: calc(-70px / 2);
  right: 0;
  @media only screen and (${device.laptop}) {
    display: none;
    visibility: hidden;
  }
`;

const BtnCustom = styled(Button)`
  display: flex;
  width: 70px;
  height: 70px;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
  > * {
    margin: auto;
  }
`;

const NextBtn = styled(BtnCustom)`
  background: #ffffff;
  box-shadow: 0px 4px 90px rgba(175, 173, 181, 0.2);
`;

const PrevBtn = styled(BtnCustom)`
  background: #518581;
  box-shadow: 0px 4px 80px rgba(175, 173, 181, 0.2);
  fill: white;
`;
