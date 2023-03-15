import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import "./style.css";

// import required modules
import {
  Grid,
  Navigation,
  Autoplay,
  A11y,
  EffectFade,
  Controller,
} from "swiper";
import review from "../../../assets/review.jpg";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="container">
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 3000,
        }}
        grid={{
          rows: 2,
        }}
        spaceBetween={4}
        modules={[Grid, Navigation, Autoplay, A11y, EffectFade, Controller]}
        className="h-[780px] "
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
      >
        {Array.from({ length: 100 }).map((_, id) => (
          <SwiperSlide key={id} className="swiperjs-slide">
            <div className="">
              <Image src={review} alt={""} className="rounded-md" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
