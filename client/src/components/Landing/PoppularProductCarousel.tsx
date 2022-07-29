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
import { SlidePerScreen } from "../../helper/CarouselPerScreen";
import ArrowCarousel from "../../shared/ArrowCarousel";

const PoppularProductCarousel: React.FC = () => {
  return (
    <Box>
      <Swiper
        slidesPerView={SlidePerScreen()}
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
      <ArrowCarousel />
    </Box>
  );
};

export default PoppularProductCarousel;

const Box = styled.div`
  margin-top: 3.125rem;
  position: relative;
`;
