import React from "react";
import Textfield from "../../../common/forms/Textfield";
import contactLogo from "../../../../assets/contact-us-logo.png";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="container font-nunito sm:mx-4 xsm:mx-4 lg:mx-auto md:mx-auto  xl:mx-auto">
      <div className="p-[2rem] sm:p-[1rem] xsm:p-[1rem] mt-[-260px]  lg:mt-[-300px]  sm:max-w-[650px] xsm:max-w-[400px] bg-white mx-auto md:max-w-[950px]    mb-10 shadow-slate-300 shadow-xl rounded-xl">
        <div className="container  ">
          <div className="flex justify-center items-center">
            <Image alt="" src={contactLogo} width={50} height={50} />

            <h1 className="text-4xl font-semibold ">Contact us</h1>
          </div>
          <div>
            <div className="text-sm flex lg:items-center md:items-center lg:justify-center md:justify-center flex-col my-5 text-gray-400">
              <p>
                For general inquires, Partnership Requests, and Collaborations.
              </p>
              <p className="my-2">
                kindly fill out the form below and a member from our staff will
                get back to you within 48 hours with
              </p>
              <p>Actionable Steps.</p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="flex justify-center items-center flex-wrap gap-3">
            <div className="basis-full sm:basis-[49%]">
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
          </div>
          <div className="my-5  mx-1">
            <p className="mb-2 text-small-text-color">
              Message to Hiring Manager
            </p>
            <textarea
              placeholder="Type here..."
              aria-label="Message"
              rows={2}
              cols={85}
              name="Message"
              className="border-2 rounded-r-[0.25rem] rounded-l-[0.25rem] p-2 border-gray-300 w-full"
            ></textarea>
          </div>
          <div className="mx-1">
            <SelectOptions
              label=" How did you find Fourth IT Academy"
              byDefault="Select an option"
              name="interest"
              options={["Twitter", "Instagram", "Facebook", "Linkedin"]}
            />
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
    <div className="w-[49%] font-nunito">
      <label htmlFor="media" className="block mb-1 text-small-text-color">
        {label}
      </label>
      <select
        name={name}
        id="media"
        className="bg-gray-50 border rounded-l-[0.25rem] rounded-r-[0.25rem] border-gray-300 text-small-text-color text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

export default ContactForm;
