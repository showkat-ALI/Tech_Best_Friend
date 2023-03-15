import React from "react";
import CardSlider from "../../../../common/cardSlider/CardSlider";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay, History } from "swiper";
import "../../../../../styles/testimonialsSwiperStyles.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardImage1 from "../../../../../assets/ServicesImages/servicesImage/Risk_Management+Framework(bootcamp).jpg";
import CardImage2 from "../../../../../assets/ServicesImages/servicesImage/177095938_m.jpg";
import CardImage3 from "../../../../../assets/ServicesImages/servicesImage/167774282_m.jpg";
import CardImage4 from "../../../../../assets/ServicesImages/servicesImage/160820192_m.jpg";

// import "./styles.css";

// import required modules
import Image from "next/image";
import BootCampsCard from "../../bootCampsCard/BootCampsCard";

const AllCources = () => {
  const cards = [
    {
      name: "Risk Management Framework Cybersecurity",
      imgSrc: CardImage1,
      duration: 3,
      cutprice: 300,
      price: 200,
      timeHour: 20,
      timeMinute: 10,
      level: "Expert",
      modules: 4,
      linkTo: "/registration",
      id: 1,
    },
    {
      name: "Cyber Secuiry and Cyber Crime Awareness",
      imgSrc: CardImage2,
      duration: 3,
      cutprice: 500,
      price: 300,
      timeHour: 20,
      timeMinute: 10,
      level: "Beginner",
      modules: 8,
      linkTo: "/registration",
    },
    {
      name: "Software Development with JavaScript, NodeJS",
      imgSrc: CardImage3,
      duration: 3,
      cutprice: 850,
      price: 750,
      timeHour: 20,
      timeMinute: 10,
      level: "Begineer",
      modules: 12,
      linkTo: "/registration",
    },
    {
      name: "Ethical Hacking and Hacking Risk Management",
      imgSrc: CardImage4,
      duration: 3,
      cutprice: 450,
      price: 150,
      timeHour: 20,
      timeMinute: 10,
      level: "Middle",
      modules: 14,
      linkTo: "/registration",
    },
    {
      name: "Ethical Hacking and Hacking Risk Management",
      imgSrc: CardImage4,
      duration: 3,
      cutprice: 450,
      price: 150,
      timeHour: 20,
      timeMinute: 10,
      level: "Middle",
      modules: 14,
      linkTo: "/registration",
    },
    {
      name: "Ethical Hacking and Hacking Risk Management",
      imgSrc: CardImage4,
      duration: 3,
      cutprice: 450,
      price: 150,
      timeHour: 20,
      timeMinute: 10,
      level: "Middle",
      modules: 14,
      linkTo: "/registration",
    },
    {
      name: "Ethical Hacking and Hacking Risk Management",
      imgSrc: CardImage4,
      duration: 3,
      cutprice: 450,
      price: 150,
      timeHour: 20,
      timeMinute: 10,
      level: "Middle",
      modules: 14,
      linkTo: "/registration",
    },
    {
      name: "Ethical Hacking and Hacking Risk Management",
      imgSrc: CardImage4,
      duration: 3,
      cutprice: 450,
      price: 150,
      timeHour: 20,
      timeMinute: 10,
      level: "Middle",
      modules: 14,
      linkTo: "/registration",
    },
  ];
  return (
    <div className=" bg-white mb-10">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1080: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={false}
        modules={[Navigation]}
      >
        {cards.map((item, idx) => (
          <SwiperSlide key={idx}>
            <BootCampsCard
              id={item?.id}
              name={item.name}
              duration={item.duration}
              cutprice={item.cutprice}
              price={item.price}
              imgSrc={item.imgSrc}
              timeHour={item.timeHour}
              timeMinute={item.timeMinute}
              level={item.level}
              modules={item.modules}
              linkTo={item.linkTo}
            ></BootCampsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllCources;
