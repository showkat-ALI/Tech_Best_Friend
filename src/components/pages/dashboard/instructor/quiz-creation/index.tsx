import React, { useMemo, useState,useEffect } from "react";
import QuizNaming from "./quiz-naming";
import "react-quill/dist/quill.snow.css";
import Camera from "../../../../../Icon/Camera";
import {toast} from 'react-toastify'
import Answers from "./answers";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import {
  useCreateQuizMutation,
  useGetCategoriesQuery,
  useCreateQuizQuestionMutation
} from "../../../../../feature/api/dashboardApi";
import Delete from "../../../../../Icon/Delete";
import Plus from "../../../../../Icon/Plus";
import { InputErrorMessage } from '../../../../utils/error';
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";


export default function QuizCreation() {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const [question, setValue] = useState("");
  const [createQuiz, { error, data, isLoading: loading, isSuccess: success,isError:iserror }] =
    useCreateQuizMutation();
  const [createQuizQuestion, { error:QuestionError, data:QuestionData, isLoading: questionloading, isSuccess: Questionsuccess,isError:Questioniserror }] =
  useCreateQuizQuestionMutation();  
  
  const {
    data: allcategory,
    isSuccess,
    isError,
    isLoading,
  } = useGetCategoriesQuery({});

  let singleCategory;
  isLoading ? (
    <div>Loading....</div>
  ) : isError ? (
    <div>Error....</div>
  ) : isSuccess &&
    allcategory?.data?.categories &&
    allcategory.data.categories.length > 0 ? (
    (singleCategory = allcategory.data.categories)
  ) : (
    <div>No categories found</div>
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    createQuiz(data);
    // console.log(data);
  };

  // answers
  const [answers, setAnswers] = useState<{ value: string; checked: boolean }[]>(
    []
  );
  const [newQuestion, setnewQuestion] = useState<any>(
    []
  );

  const handleAddQuestion = () => {

    setnewQuestion([...newQuestion,{value:"yes"}])
  }

  const [inputValue, setInputValue] = useState("");

  const handleAddInput = (e: any,index:any) => {
    e.preventDefault();
    setAnswers([...answers, { value: inputValue, checked: false }]);
    setInputValue("");
  };

  const handleDeleteInput = (index: number, e: any) => {
    e.preventDefault();

    const newInputs = [...answers];
    newInputs.splice(index, 1);
    setAnswers(newInputs);
  };

  const handleCheckboxChange = (index: number) => {
    const newInputs = [...answers];
    newInputs[index].checked = !newInputs[index].checked;
    setAnswers(newInputs);
  };
  const onQuestionSubmit = (e: any) => {
    e.preventDefault();
    if(data === undefined){
      toast.error("quiz not created")
    }else{
      const quiz = data.data.quiz.id;
      console.log({ answers, question,quiz });
      createQuizQuestion({quiz:quiz,question:question,answers:answers})
    }
  };
  // console.log({ ...inputs, value });

  useEffect(() => {
    if (iserror) {
        toast.error("quiz create  error");
    } else if (success) {
        toast.success("quiz create successfully!");
    }
}, [iserror, success]);

useEffect(() => {
  if (Questioniserror) {
      toast.error("quiz question  error");
  } else if (Questionsuccess) {
      toast.success("quiz create question successfully!");
  }
}, [Questioniserror, Questionsuccess]);

  return (
    <div className="grid  lg:grid-cols-12 w-full justify-between gap-x-8 font-nunito">
      <div className="lg:col-span-8 md:col-span-8 col-span-12">

        <form onSubmit={handleSubmit(onSubmit)}>
           <div>
               <label>Quiz Title</label>
               <input
                 type="text"
                 className="mt-3"
                 placeholder="Enter course time"
                 {...register("title",{required:true})}
                 style={{
                   background: " #FFFFFF",
                   boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                   borderRadius: "8px",
                   width: "100%",
                   border: "none",
                   padding: " 11px 17px",
              }}
              />
               {errors.title && (
                  <div className="text-xs text-red-600 font-nunito">
                    Enter Quiz title
                  </div>
                )}
           </div>
        </form>
      
          <div className="my-5">
           
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <p className="font-semibold text-base font-nunito">
                    Quiz Name{" "}
                  </p>
                  <button className="p-3 flex justify-between rounded-md border-blue-700 bg-[#EBEEFD]">
                    <Camera />
                    <p className="font-nunito">Add Media</p>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito"
                    onClick={handleAddQuestion}
                  >
                    Add new question
                  </button>
                </div>
              </div>
  
              
            </div>
            {
          newQuestion.map((value:any,index:any) => (
         
        <form onSubmit={(e) => onQuestionSubmit(e)} key={index}>
            <div>
                <ReactQuill
                  theme="snow"
                  className="font-nunito"
                  onChange={(e) => {setValue(e)}}
                />
                <div>
                           {errors.question && <InputErrorMessage message="Enter question"/>}
                </div>
            </div>
         
          <div>
            <>
              <div>
                <h1 className="font-bold text-xl text-black font-nunito">
                  Answers
                </h1>
              </div>
              <div className="px-24 py-11 bg-white rounded-lg">
                <div>
                  <div>
                    {answers?.map((input, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center mb-3 font-nunito"
                      >
                        <button onClick={(e) => handleDeleteInput(index, e)}>
                          <Delete />
                        </button>
                        <input
                          type="text"
                          onChange={(e) => (input.value = e.target.value)}
                          className="font-nunito"
                          style={{
                            background: " #FFFFFF",
                            boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                            borderRadius: "8px",
                            width: "500px",
                            border: "none",
                            padding: " 11px 17px",
                          }}
                        />
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={input.checked}
                            onChange={() => handleCheckboxChange(index)}
                            className="text-blue-600 p-2 border-black font-nunito"
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" mt-10">
                  <button
                    onClick={(e) => handleAddInput(e,index)}
                    className=" flex items-center"
                  >
                    <Plus />
                    <p className="text-blue-600 ml-2 text-xl font-nunito">
                      Add
                    </p>
                  </button>
                </div>
                <div className="flex justify-center items-center w-full lg:mt-0 md:mt-0 mt-5">
                  <div>
                    <button
                      type="submit"
                      className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito"
                    >
                     {
                      questionloading ? <ButtonLoader /> : "Save question"
                     } 
                    </button>
                  </div>
                </div>
              </div>
            </>
          </div>
        </form>
           
           ))}
      </div>

      <div className="lg:col-span-4 md:col-span-4 col-span-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
           
          </div>
          <div className="bg-white flex mt-5 lg:mt-0 md:mt-0   flex-col px-5 py-3">
            <div className="w-4/5 ">
              <Category
                label="Category"
                className="font-nunito"
                register={register}
                byDefault="Unlimited"
                name="category"
                options={singleCategory}
              />
            </div>
            <div className="w-4/5 my-4">
              <SelectOptions
                label="Quiz Type"
                className=" font-nunito"
                byDefault="Unlimited"
                register={register}
                name="type"
                options={["True false", "Checkbox", "Text"]}
              />
            </div>
            <div className="w-4/5 ">
              <SelectOptions
                label="Question Attempts"
                className=" font-nunito"
                byDefault="Unlimited"
                name="attempts"
                register={register}
                options={[5, 7, 8]}
              />
            </div>
          </div>
          <div className="my-5">
            <div className="bg-white flex   flex-col pb-10 pt-4 px-5">
              <div className="w-4/5 ">
                <SelectOptions
                  label="Score per question "
                  className=" font-nunito"
                  byDefault="Unlimited"
                  name="scorePerQuestion"
                  register={register}
                  options={[5, 3, 4]}
                />
              </div>
              <div className="w-4/5 my-5">
                <SelectOptions
                  label="Question displayed per page"
                  className="font-nunito"
                  byDefault="Unlimited"
                  name="questionPerPage"
                  register={register}
                  options={[5, 3, 4]}
                />
              </div>
              <div className="w-4/5 flex justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("isSort")}
                    className="text-blue-600 p-2 border-black font-nunito"
                  />
                </label>
                <p className="font-semibold font-nunito lg:ml-3 xl:ml-0 md:ml-0 sm:ml-0 xsm:ml-0">
                  Question sorted randomly
                </p>
              </div>
              <div className="my-5">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    {...register("isRequired")}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-bold text-gray-900 dark:text-gray-300 font-nunito">
                    Required
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white flex mt-5  flex-col px-5 py-7 rounded-lg">
            <div className="flex lg:flex-col xl:flex-col sm:flex-row xsm:flex-row justify-between lg:items-baseline sm:items-center xsm:items-center xl:items-baseline">
              <div className="my-8">
                <label
                  htmlFor="startDate"
                  className="font-semibold font-nunito"
                >
                  Start Date
                </label>
                <br />
                <input
                  className="border border-blue-400 rounded-lg px-5 py-2 text-blue-500 font-nunito"
                  type="date"
                  id="startDate"
                  // {...register("startDate", { required: "start date is required" })}
                  {...register("startDate", {
                    required: "start date is required",
                  })}
                />
                {errors.startDate && (
                  <div className="text-xs text-red-600 font-nunito">
                    start date is required
                  </div>
                )}
              </div>
              <div className=" lg:ml-[-25px] xl:ml-0 md:ml-5 sm:ml-5 xsm:ml-5 lg:mb-4 md:my-0 sm:my-0 xsm:my-0  xl:mb-4">
                <label
                  htmlFor="startTime "
                  className="font-semibold mb-2 font-nunito"
                >
                  Start Time
                </label>
                <br />

                <input
                  className="border border-blue-400 rounded-lg px-5 py-2 text-blue-500 font-nunito"
                  type="time"
                  id="startTime"
                  {...register("startTime", {
                    required: "start time is required ",
                  })}
                />
                {errors.startTime && (
                  <div className="text-xs text-red-600">
                    start time is required
                  </div>
                )}
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="until "
                className="font-semibold mb-2 font-nunito"
              >
                Time Allowed
              </label>
              <br />

              <input
                type="time"
                className="border border-blue-400 rounded-lg px-5 py-2 text-blue-500 font-nunito"
                id="timeAllowed"
                {...register("timeAllowed", {
                  required: "end time is required",
                })}
              />
              {errors.timeAllowed && (
                <div className="text-xs text-red-600 font-nunito">
                  end time is required
                </div>
              )}
            </div>
          </div>
          <div className="mt-5 ">
          {
           data === undefined &&
            <button
              type="submit"
              className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-nunito focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2"
            
            >
                {
                  loading?<ButtonLoader />:"submit"
                }
            </button>
          }  
          </div>
        </form>
      </div>
    </div>
  );
}
const Category = ({
  label,
  name,
  byDefault,
  onChange,
  className,
  register,
  options,
}: {
  label?: string | undefined;
  name: string;
  byDefault: string;
  onChange?: any;
  className?: string | undefined;
  options: any;
  register: any;
}) => {
  return (
    <div className="">
      <label
        htmlFor="category"
        className="block mb-3 font-bold  text-blue-600 font-nunito"
      >
        {label}
      </label>
      <select
        name={name}
        {...register(name)}
        id="category"
        className=" bg-gray-50 border rounded-l-[0.25rem] rounded-r-[0.25rem]   border-blue-600 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex flex-col justify-between font-nunito "
      >
        {options?.length > 0 &&
          options?.map((item: any, id: any) => (
            <option
              value={item.id}
              key={id}
              className="p-4 my-3 border border-b-2 border-black font-nunito"
            >
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};
const SelectOptions = ({
  label,
  name,
  byDefault,
  onChange,
  className,
  register,
  options,
}: {
  label?: string | undefined;
  name: string;
  byDefault: string;
  onChange?: any;
  className?: string | undefined;
  options: any;
  register: any;
}) => {
  return (
    <div className="">
      <label
        htmlFor="media"
        className="block mb-3 font-bold  text-blue-600 font-nunito"
      >
        {label}
      </label>
      <select
        name={name}
        {...register(name)}
        id="media"
        className=" bg-gray-50 border rounded-l-[0.25rem] rounded-r-[0.25rem]   border-blue-600 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex flex-col justify-between font-nunito"
      >
        {options.map((item: any, id: any) => (
          <option value={item} key={id} className="p-4 my-3">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
