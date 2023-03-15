import React from "react";
import CourseTab from "./course-tab";
import style from "../../../../../styles/GeneralStyles.module.css";
import Video from "../../../../../Icon/Video";
import Pause from "../../../../../Icon/pause";
import { useRouter } from "next/router";
import { useGetEnrollmentQuery } from "../../../../../feature/api/dashboardApi";
// import ReactPlayer from 'react-player';
import Image from "next/image"
import { useAppSelector } from "../../../../../app/hooks";

export default function Singlelesson({
  enrollmentData,
}: {
  enrollmentData: any;
}) {
  const {
    playVideo: { localVideo },
  } = useAppSelector((state) => state.playVideo);

  console.log("this",enrollmentData.course)
  return (
    <div className="flex flex-col ">
      <div>
        <h1 className="font-bold text-2xl ">{enrollmentData.course.title}</h1>
      </div>
      <div>
        {" "}
        <div
          className={` w-full  my-5 flex justify-center items-center h-[30rem] rounded-3xl bg-center bg-no-repeat`}
          style={{backgroundImage:localVideo ?"":`url(${enrollmentData.course.courseImage})`}}
        >
         
         { 
           localVideo &&
          //<video src={localVideo} controls className="w-full h-full object-fill" /> 
          <iframe src={`${localVideo}?modestbranding=1&rel=0&showinfo=0`}  width="100%" height={"100%"} allowFullScreen></iframe>
        
         }
        </div>
      </div>
      <div>
        <CourseTab enrollmentData={enrollmentData} />
      </div>
    </div>
  );
}
