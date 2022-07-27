import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../assets/test/data/popularProduct";
import { Navigation, Mousewheel, Autoplay } from "swiper";
import ArrowLeft from "../../assets/svg/arrow-left.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import PopularProductCard from "./PopularProductCard";

const PoppularProductCarousel: React.FC = () => {
  return (
    <Box>
      <Swiper
        slidesPerView={window.innerWidth <= 1024 ? 1 : 4}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        // mousewheel={true}
        modules={[Navigation, Mousewheel, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <PopularProductCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowSlideLeft className="swiper-button-prev-custom">
        <img src={ArrowLeft} alt="arrow-left" />
      </ArrowSlideLeft>
      <ArrowSlideRight className="swiper-button-next-custom">
        <img src={ArrowLeft} alt="arrow-right" />
      </ArrowSlideRight>
    </Box>
  );
};

export default PoppularProductCarousel;

const Box = styled.div`
  margin-top: 3.125rem;
  position: relative;
`;

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
