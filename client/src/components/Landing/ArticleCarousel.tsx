import "swiper/css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleExample from "../../assets/images/article1.png";
import ArticleCard from "./ArticleCard";

const data = [
  {
    image: ArticleExample,
    val: {
      id: 1,
      categories: "Tip and Trick",
      title: "Create Cozy Dinning Room Vibes",
      description:
        "Decorating with neutrals brings balance to the dining room. With eclectic decoration on the sides, Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room. The modern furniture set gives personality to any space in all types of architecture. The wide volume enables everyone to sit back and relax, be it in the dining room, conference, or office.",
    },
  },
];

const ArticleCarousel: React.FC = () => {
  return (
    <Swiper>
      {data.map((item) => {
        return (
          <SwiperSlide>
            <ArticleCard {...item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ArticleCarousel;
