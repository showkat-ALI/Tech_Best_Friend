import React from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import CardImage1 from "../../../../assets/ServicesImages/servicesImage/Risk_Management+Framework(bootcamp).jpg";
import CardImage2 from "../../../../assets/ServicesImages/servicesImage/177095938_m.jpg";
import CardImage3 from "../../../../assets/ServicesImages/servicesImage/167774282_m.jpg";

import BootCampsCard from "../../bootcamps/bootCampsCard/BootCampsCard";
import { useGetAllActiveCourseQuery } from "../../../../feature/api/dashboardApi";

const card = [
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
  },
  {
    name: "Risk Management Framework Cybersecurity",
    imgSrc: CardImage2,
    duration: 3,
    cutprice: 300,
    price: 200,
    timeHour: 20,
    timeMinute: 10,
    level: "Expert",
    modules: 4,
    linkTo: "/registration",
  },
  {
    name: "Risk Management Framework Cybersecurity",
    imgSrc: CardImage3,
    duration: 3,
    cutprice: 300,
    price: 200,
    timeHour: 20,
    timeMinute: 10,
    level: "Expert",
    modules: 4,
    linkTo: "/registration",
  },
];

const Bootcamps = () => {
  const { data, isSuccess, isError, isLoading } = useGetAllActiveCourseQuery(
    {}
  );
  console.log(data);
  return (
    <div className="mx-auto font-nunito ">
      <div className="max-w-3xl mx-auto space-y-4 my-8">
        <h4 className="text-2xl font-medium text-blue-500 text-center">
          Fourth IT Academy
        </h4>
        <h3 className="text-4xl px-2  sm:text-4xl font-bold text-center">
          How our bootcamps compare to other training providers.
        </h3>
      </div>

      <div
        className="grid grid-cols-1 gap-4 lg:gap-3 2xl:gap-9 xl:gird-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-x-5 xsm:px-5 sm:px-5 xl:px-[7.25rem] xl:gap-7 md:px-10 lg:px-1 md:gap-y-4 
      "
      >
        {isSuccess &&
          data?.data?.courses?.length > 0 &&
          data.data.courses
            .slice(0, 3)
            .map(
              (item: {
                _id: string;
                title: string;
                price: number;
                level:string;
                courseImage: string;
                durationInMinutes: number;
                modules: [];
              }) => (
                <BootCampsCard
                  key={item._id}
                  id={item._id}
                  name={item.title}
                  duration={3}
                  cutprice={300}
                  price={item.price}
                  timeMinute={0}
                  imgSrc={item.courseImage}
                  timeHour={item.durationInMinutes}
                  level={item.level}
                  modules={item.modules.length}
                  linkTo={item.title}
                />
              )
            )}
      </div>
    </div>
  );
};

export default Bootcamps;
