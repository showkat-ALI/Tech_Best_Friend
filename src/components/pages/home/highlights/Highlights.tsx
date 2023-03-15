import Image from "next/image";
import React from "react";
import CardSlider from "../../../common/cardSlider/CardSlider";
import { SwiperSlide } from "swiper/react";
import "../../../../styles/testimonialsSwiperStyles.module.css";
import cardImg from "../../../../assets/instructors.png";
import { FaQuoteRight } from "react-icons/fa";
import {
  Pagination,
  Navigation,
  Autoplay,
  Grid,
  Controller,
  A11y,
  EffectFade,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import "./styles.css";

// import required modules

const Highlights = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center font-nunito mb-5 mt-10  ">
        Student Highlights
      </h2>
      <div className="container lg:p-6 p-4 mb-10">
        <CardSlider
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          grid={{
            rows: 2,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            851: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Grid, Navigation, Autoplay, A11y, EffectFade, Controller]}
          className="lg:h-[800px] h-[800px] md:[700px] "
        >
          {Array.from({ length: 100 }).map((_, idx) => (
            <SwiperSlide key={idx} className="swiperjs-slide-highlights">
              <div
                key={idx}
                className="lg:w-full  bg-cyan-100 rounded-lg  shadow-slate-200 shadow-xl font-nunito"
              >
                <div className="flex justify-center items-center">
                  <div className="flex flex-col items-center justify-center lg:py-8 lg:px-4 px-3 py-5 ">
                    <FaQuoteRight className="my-3 text-3xl" />
                    <p className="text-center my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa, esse corrupti? Fuga, explicabo sed?
                    </p>

                    <Image
                      width={50}
                      height={50}
                      className="mb-3 w-50 h-50 rounded-full shadow-lg my-3"
                      src={cardImg}
                      alt="Bonnie image"
                    />
                    <p className="mb-1 text-3xl font-medium text-gray-900  my-3">
                      Jhon Doe
                    </p>
                    <span className="text-xl text-gray-500  my-3 font-nunito">
                      Tech Lead
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </CardSlider>
      </div>
    </>
  );
};

export default Highlights;
