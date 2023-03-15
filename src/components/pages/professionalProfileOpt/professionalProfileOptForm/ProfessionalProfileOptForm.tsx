import React from "react";
import Textfield from "../../../common/forms/Textfield";
import contactLogo from "../../../../assets/contact-us-logo.png";
import Image from "next/image";
import { FaCloudUploadAlt } from "react-icons/fa";

const ProfessionalProfileOptForm = () => {
  return (
    <div className="container font-nunito">
      <div className="p-[2rem] mt-[-260px]  lg:mt-[-465px] bg-white container md:max-w-[1080px]  pt-16 mb-20 shadow-slate-300 shadow-xl rounded-xl">
        <div className="">
          <div className="flex justify-center items-center">
            <Image alt="" src={contactLogo} width={50} height={50} />

            <h1 className="text-4xl font-semibold ">
              Professional Profile Optimization
            </h1>
          </div>
          <div>
            <div className=" flex font-bold lg:items-center md:items-center lg:justify-center md:justify-center flex-col my-5 ">
              <p className="max-w-[500px] text-center text-small-text-color">
                What is stopping you from landing that interview? Learn how to
                tailor your resume to match your dream job.
              </p>
            </div>
          </div>
        </div>
        <div className=" my-3">
          <div className="flex justify-center items-center flex-wrap gap-3">
            <div className="basis-full sm:basis-[49%]">
              <Textfield label="First Name" name="first name" />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <Textfield className="" label="Last Name" name=" Second name" />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <Textfield
                className=""
                label="Email Address"
                name="Email Address"
                type="email"
              />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <Textfield className="" label="Phone" name="phone" type="phone" />
            </div>

            {/* </div> *} */}
            <div className="basis-full sm:basis-[49%] w-full">
              <SelectOptions
                label="Highest level of education"
                byDefault=""
                className="  "
                name="Highest Level of education"
                options={[
                  "Some high school",
                  "High school diploma or GED",
                  "Bachelor's degree ",
                  "Some graduate coursework",
                  "Graduate degree",
                ]}
              />
            </div>
            <div className="basis-full sm:basis-[49%] ">
              <Textfield
                className=" my-4"
                label="Linkedin URL"
                name="linkedin"
                type="text"
              />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <SelectOptions
                label="City, State"
                className=""
                byDefault=""
                name="staffing-need"
                options={["Florida", "Los Angels", "New york"]}
              />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <SelectOptions
                label="Country"
                className=""
                byDefault=""
                name="staffing-need"
                options={["India", "America", "Australia"]}
              />
            </div>
          </div>

          <div className="my-4 mx-1">
            <p className="mb-2  text-small-text-color">
              Message to Hiring Manager
            </p>
            <textarea
              placeholder="Type here..."
              aria-label="Message"
              rows={2}
              cols={85}
              name="Message"
              className="border-2 p-2 rounded-l-[0.25rem] rounded-r-[0.25rem] border-gray-300 w-full"
            ></textarea>
          </div>
          <div className="mx-1">
            <p className="mb-3 text-small-text-color">Upload Resume</p>
            <div className="flex flex-col lg:flex-row items-center">
              <div
                className={` xl:flex-row lg:flex-row md:flex-row sm:flex-row xsm:flex-col  flex xl:items-end xsm:items-start sm:items-end md:items-end lg:items-end rounded-l-[0.25rem] rounded-r-[0.25rem] bg-gray-200 p-2 `}
              >
                <FaCloudUploadAlt className="w-8 h-8 mr-1" />
                <input
                  className={`text-red-500 border-none outline-none `}
                  type="file"
                  required={true}
                />
              </div>
              <p className="font-bold xl:ml-4 lg:ml-4 md:ml-4 sm:ml-4 xsm:ml-1">
                Max file size 10 MB
              </p>
            </div>
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

export default ProfessionalProfileOptForm;

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
    <div className="">
      <label htmlFor="media" className="block mb-2  text-small-text-color">
        {label}
      </label>
      <select
        name={name}
        id="media"
        className="bg-gray-50 border rounded-l-[0.25rem] rounded-r-[0.25rem] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
