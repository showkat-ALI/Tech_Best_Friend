import Image, { StaticImageData } from "next/image";
import React from "react";
import seriveOne from "../../../../assets/service1.png";
import serivetwo from "../../../../assets/service2.png";
import serivethree from "../../../../assets/service3.png";

import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Service = () => {
  return (
    <div className="container my-20 space-y-6 pb-10 px-4 sm:px-0">
      <h3 className="text-4xl font-bold max-w-[690px] text-center mx-auto font-nunito">
        Shaping the Future in IT, One student at a time
      </h3>

      {/* <h4 className='text-center font-bold text-2xl text-gray-800'> When you win, we win.</h4> */}
      <div className="flex flex-wrap justify-center gap-6">
        <div className="max-w-[350px] flex items-center gap-4 bg-[#FEF6E0] rounded-md px-10 py-4">
          <FiMonitor className="font-bold text-6xl text-[#F7C32E] stroke-2" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">7+</span>
            <span className="text-xs">Online Courses</span>
          </div>
        </div>
        <div className="max-w-[350px] flex items-center gap-4 bg-[#FEF6E0] rounded-md px-10 py-4">
          <FaUserTie className="font-bold text-6xl text-[#1D3B53] stroke-2" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">7+</span>
            <span className="text-xs">Expert Tutors</span>
          </div>
        </div>
        <div className="max-w-[350px] flex items-center gap-4 bg-[#FEF6E0] rounded-md px-10 py-4">
          <FaUserGraduate className="font-bold text-6xl text-[#406E95] stroke-2" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">7+</span>
            <span className="text-xs">Online Students</span>
          </div>
        </div>
        <div className="max-w-[350px] flex items-center gap-4 bg-[#FEF6E0] rounded-md px-10 py-4">
          <BsFillPatchCheckFill className="font-bold text-6xl text-[#8FB6E1]" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">7+</span>
            <span className="text-xs">Certified Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
