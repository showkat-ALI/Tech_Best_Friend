import React from "react";
import Textfield from "../../../common/forms/Textfield";
import contactLogo from "../../../../assets/contact-us-logo.png";
import Image from "next/image";

const MentoringCoachingFrom = () => {
  return (
    <div className="container font-nunito">
      <div className="p-[2rem] mt-[-260px]  lg:mt-[-465px] bg-white container md:max-w-[1080px]  pt-16 mb-20 shadow-slate-300 shadow-xl rounded-xl">
        <div className="">
          <div className="flex justify-center items-center">
            <Image alt="" src={contactLogo} width={50} height={50} />

            <h1 className="text-4xl font-semibold font-nunito">
              Mentoring and Coaching
            </h1>
          </div>
          <div>
            <div className="text-lg flex font-bold lg:items-center md:items-center lg:justify-center md:justify-center flex-col my-5 text-sky-300">
              <p className="max-w-[500px] text-center font-nunito text-small-text-color">
                Passionate about mentoring and coaching?
              </p>
            </div>
          </div>
        </div>
        <div className=" my-3">
          <div className="flex  items-center justify-center flex-wrap gap-3">
            <div className="basis-full sm:basis-[49%] ">
              <Textfield label="First Name" name="first name" type="text" />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <Textfield label="Last Name" name=" Second name" type="text" />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <Textfield
                label="Email Address"
                name="Email Address"
                type="email"
              />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <Textfield label="Phone" name="phone" type="number" />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <SelectOptions
                label=" Area of interest"
                byDefault=""
                name="interest"
                options={["Mentoring"]}
              />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <Textfield
                label="What is your curent job title"
                name="job"
                type="text"
              />
            </div>
          </div>

          <div className="mx-1 mt-5">
            <p className="mb-2 text-small-text-color ">
              Message to Hiring Manager
            </p>
            <textarea
              placeholder="Type here..."
              aria-label="Message"
              rows={2}
              cols={85}
              name="Message"
              className="border-2 border-gray-300 w-full rounded-l-[0.25rem] rounded-r-[0.25rem] p-2"
            ></textarea>
          </div>

          <div className=" my-8 mx-1">
            <button
              type="button"
              className="text-white bg-[#0d4cf9] hover:bg-[#5177e0]/90 focus:ring-4 focus:outline-none focus:ring-[#0d4cf9]/50 font-medium rounded-lg text-sm px-14 py-3 text-center inline-flex items-center  mr-2 mb-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringCoachingFrom;

const SelectOptions = ({
  label,
  name,
  byDefault,
  onChange,
  className,
  options,
}: {
  label?: string | undefined;
  name: string;
  byDefault: string;
  onChange?: any;
  className?: string | undefined;
  options: string[];
}) => {
  return (
    <div className="font-nunito">
      <label htmlFor="media" className="block mt-1  text-small-text-color">
        {label}
      </label>
      <select
        name={name}
        id="media"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-l-[0.25rem] rounded-r-[0.25rem]"
      >
        <option defaultValue={byDefault}>{byDefault}</option>
        {options.map((item, id) => (
          <option value={item} key={id}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
