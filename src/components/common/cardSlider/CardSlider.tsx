import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../styles/testimonialsSwiperStyles.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { SwiperProps } from "./../../../../src/interfaces/ICommon";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const CardSlider = ({
  loop,
  longSwipes,
  loopFillGroupWithBlank,
  autoplay,
  className,
  children,
  breakpoints,
  grid,
  slidesPerView,
  navigation,
  spaceBetween,
  modules,
}: {
  loop?: boolean | undefined;
  longSwipes?: boolean | undefined;
  loopFillGroupWithBlank?: any | undefined;
  autoplay?: any | undefined;
  className?: string | undefined;
  children?: React.ReactNode | undefined;
  breakpoints?: any | undefined;
  modules?: any | undefined;
  grid?: any | undefined;
  navigation?: any | undefined;
  slidesPerView?: any | undefined;
  spaceBetween?: any | undefined;
}) => {
  return (
    <Swiper
      loop={loop}
      longSwipes={longSwipes}
      loopFillGroupWithBlank={loopFillGroupWithBlank}
      autoplay={autoplay}
      modules={modules}
      grid={grid}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      className={className}
    >
      {children}
    </Swiper>
  );
};

export default CardSlider;
