import React, { useState } from "react";
import Textfield from "../../common/forms/Textfield";
import Image from "next/image";

const BottomRegisForm = () => {
  const [show, setShow] = useState(false);
  const [hide, sethide] = useState(false);

  return (
    <div className="container font-nunito">
      <div className="p-[2rem] mt-10 bg-white container md:max-w-[1080px]  pt-16 mb-20 shadow-slate-300 shadow-xl">
        <div className="">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-semibold ">Registration Form</h1>
          </div>
          <div>
            <div className="text-sm flex lg:items-center md:items-center lg:justify-center md:justify-center flex-col my-5 text-gray-400">
              <p className="max-w-[500px] text-center">
                Are you skilled in a specific field in Information Technology
                and interested in teaching and impacting lives with your
                professional experiences? Come join our team!
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className=" font-bold flex  items-center">
            <div>
              <p className="font-bold"> Title:</p>
            </div>
            <div className=" flex">
              <div>
                  <input type="radio" id="Mr" name="title" value="Mr" /> {" "}
                <label htmlFor="Mrs">Mr</label>
              </div>
              <div>
                  <input type="radio" id="Mrs" name="title" value="Mrs" /> {" "}
                <label htmlFor="Mrs">Mrs</label>
              </div>
              <div>
                  <input type="radio" id="Ms" name="title" value="Ms" /> {" "}
                <label htmlFor="Ms">Ms</label>
              </div>
              <div>
                  <input type="radio" id="Dr" name="title" value="Dr" /> {" "}
                <label htmlFor="Dr">Dr</label>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-3">
            <Textfield
              className="basis-full sm:basis-[49%]"
              label="First Name"
              name="first name"
            />
            <Textfield
              className="basis-full sm:basis-[49%]"
              label="Last Name"
              name=" Second name"
            />
            <Textfield
              className="basis-full sm:basis-[49%]"
              label="Email Address"
              name="Email Address"
              type="email"
            />
            <Textfield
              className="basis-full sm:basis-[49%]"
              label="Phone"
              name="phone"
              type="number"
            />
            <Textfield
              className="basis-full sm:basis-[49%]"
              label="What is your current job title"
              name="job"
              type="text"
            />

            <SelectOptions
              label=" Are you a self-pacedlearner or do you prefer a live instructor"
              byDefault="Instructor"
              className="w-1/2 basis-full sm:basis-[49%]"
              name="Medium"
              options={["Selfpaced", "Instructor"]}
            />
            {}
            {/* <div className="flex gap-4">
            <div className="basis-full sm:basis-[49%]">
              <p>
                Are you a self-pacedlearner or do you prefer a live instructor
              </p>
              <SelectOptions
                byDefault="Instructor"
                className="w-1/2"
                name="Medium"
                options={["Selfpaced", "Instructor"]}
              />
            </div>
            {/* <SelectOptions
              byDefault="Country"
              className="w-1/2"
              name="staffing-need"
              options={["Instructor", "HR", "Sponsor", "Consulting"]}
            /> */}
            {/* </div> *} */}
            <SelectOptions
              label="Highest label of education"
              byDefault="Associate degree"
              className="w-1/2 basis-full sm:basis-[49%]"
              name="Highest Level of education"
              options={[
                "Some high school",
                "High school diploma or GED",
                "Bachelor's degree ",
                "Some graduate coursework",
                "Graduate degree",
              ]}
            />
            <SelectOptions
              label="How did you hear about us"
              byDefault="Twitter"
              className="w-1/2 basis-full sm:basis-[49%]"
              name="How did you hear about us"
              options={["Facebook", "Likedin", "Others"]}
            />
          </div>
          <div className="mt-4">
            <input
              className="ml-1 mr-2"
              type="checkbox"
              id="Mrs"
              name="title"
              value="Mrs"
            />
            <label htmlFor="consent">
              By checking this box, I consent to be contacted by or on behalf of
              Fourth IT Academy, including by email, phone or text, about my
              interest in furthering my career with the bootcamp. I also agree
              to the Terms of Use and Privacy Policy.
            </label>
          </div>

          <div className="lg:pl-[1rem] md:pl-[1rem] pl-[2rem] my-8">
            <button
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-14 py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomRegisForm;

export const SelectOptions = ({
  label,
  name,
  byDefault,
  onChange,
  className,
  options,
}: {
  label?: string | undefined;
  name?: string | undefined;
  byDefault: string;
  onChange?: any;
  className?: string | undefined;
  options: string[];
}) => {
  return (
    <div className={` ${className}`}>
      <label
        htmlFor="media"
        className="block mb-2 text-sm font-bold text-gray-900"
      >
        {label}
      </label>
      <select
        name={name}
        id="media"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option defaultValue={""}>{byDefault}</option>
        {options.map((item, id) => (
          <option value={item} key={id}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
