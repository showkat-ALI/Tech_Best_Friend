import React from "react";
import style from "../../../../../styles/GeneralStyles.module.css";
import { TbChevronRight } from "react-icons/tb";
import {useGetAllLessonCourseQuery} from "../../../../../feature/api/dashboardApi";

export default function AllLessons({enrollmentData}:{enrollmentData:any}) {
  const { isError,data, error, isLoading, isSuccess } =  useGetAllLessonCourseQuery(enrollmentData.course.id);

  console.log(data)
  return (
    <div className="bg-white rounded-xl py-4 px-3 flex flex-col mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-title-clr mb-3 font-bold">All Lessons:</h1>
        <TbChevronRight className="text-xl" />
      </div>

      <div className="flex flex-col">
    {
      isLoading ?
           <div>Loading...</div>
           : isError ?
                <div>Error</div>
                    : isSuccess && data.data.videos  ?   

        data.data.videos.map(({topicName}:{topicName:string},i:number) => (
          <div
            key={i}
            className="flex flex-col items-center py-3 px-1 bg-transparent  md:flex-row md:max-w-xl hover:bg-gray-100"
          >
            <div>
              <p className="text-small-text-color font-bold text-xl">d</p>
            </div>
            <div
              className={` w-full flex justify-end items-end p-2 mx-3 h-24 rounded-xl ${style.CompletedLesBg}`}
            >
              <div className="w-20 p-1 text-white flex justify-center items-center text-xs h-6 rounded-lg bg-indigo-900">
                01 : 20 : 30
              </div>
            </div>

            <p className=" text-small-text-color text-sm  ">
              {topicName}
            </p>
          </div>
        ))
         : <div>not found</div>
      
      }
      </div>
    </div>
  );
}
