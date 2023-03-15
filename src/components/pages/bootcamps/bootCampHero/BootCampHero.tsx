import React from "react";
import heroStyle from "../../../../styles/GeneralStyles.module.css";
const BootCampHero = () => {
  return (
    <>
      <div
        className={` w-full font-nunito  bg-blend-darken  h-[500px] ${heroStyle.bgImg}`}
      >
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-white text-4xl mt-[15rem]">
            Upcoming Bootcapms
          </h1>
        </div>
      </div>
    </>
  );
};

export default BootCampHero;
