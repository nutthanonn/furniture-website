import React from "react";
import styled from "styled-components";
import { data } from "../../../assets/test/data/CarouselSale";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArrowCarousel from "../../../shared/ArrowCarousel";
import CarouselSaleCard from "./CarouselSaleCard";

const CarouselSale: React.FC = () => {
  return (
    <Box>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 10000 }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <CarouselSaleCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowCarouselCustom />
    </Box>
  );
};

export default CarouselSale;

const Box = styled.div`
  height: 500px;
  position: relative;
  > .swiper > .swiper-pagination > .swiper-pagination-bullet {
    background-color: white;
  }
`;

const ArrowCarouselCustom = styled(ArrowCarousel)`
  border: 2px solid black;
`;
