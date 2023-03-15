import {
  MapPinIcon,
  BellIcon,
  InboxIcon,
  Squares2X2Icon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import logo from "../../../assets/logo.png";
import user from "../../../assets/user.png";

const MobileAsideBar = () => {
  const [show, setShow] = useState(false);
  let width = "w-[260px]";
  if (!show) {
    width = "-translate-x-[240px] w-0";
  }
  return (
    <>
      <div className="relative">
        {show && (
          <div
            className={`${width} lg:hidden flex flex-col gap-3 absolute top-0 left-0 !bg-white z-[1000] h-full`}
          >
            <div className="flex justify-center items-center gap-2 mt-5 ">
              <Image
                src={logo}
                width={35}
                height={35}
                className="h-5 w-6"
                alt={"logo"}
              />
              <h3 className="uppercase font-semibold text-2xl">FITA </h3>
            </div>
            {/* profile section  */}
            <div className="p-5 flex flex-col gap-2 items-center">
              <div className="border border-blue-600 p-1 rounded-md">
                <Image
                  src={user}
                  width={60}
                  height={60}
                  alt={"user"}
                  className=""
                />
              </div>
              <div className="">
                <h3 className="text-[#001F4D] font-medium text-center">
                  Elon musk
                </h3>
                <Link href={"/profile"}>
                  <p className="text-sm text-[#8A92A6] text-center">@musk</p>
                </Link>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  className="rounded-full bg-[#3A57E8] p-3 text-white hover:text-white focus:outline-none "
                >
                  <span className="sr-only">View notifications</span>
                  <InboxIcon className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#3A57E8] p-3 text-white hover:text-white focus:outline-none "
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#3A57E8] p-3 text-white hover:text-white focus:outline-none "
                >
                  <span className="sr-only">View notifications</span>
                  <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="border-b mt-4 w-full"></div>
            </div>
            {/* menu section  */}
            <div className="flex flex-col gap-3 !bg-white">
              {[
                { name: "Dashboard", id: 1, url: "/dashboard/admin/" },
                { name: "Users", id: 2, url: "/dashboard/admin/users" },
                { name: "Messages", id: 3, url: "/dashboard/admin/messages" },
                { name: "Courses", id: 4, url: "/dashboard/admin/courses" },
                { name: "Students", id: 5, url: "/dashboard/admin/students" },
                {
                  name: "Instructors",
                  id: 6,
                  url: "/dashboard/admin/instructors",
                },
                {
                  name: "My Account",
                  id: 7,
                  url: "/dashboard/admin/my-account",
                },
              ].map((single) => (
                <Item key={single.id} item={single} />
              ))}
            </div>
            <div className="border-b mt-4 w-full px-5"></div>

            <div
              onClick={() => setShow(!show)}
              className={`absolute top-3 ${
                !show ? "right-10" : "-right-4"
              } rounded-full bg-blue-800 text-white p-3 cursor-pointer`}
            >
              <AiOutlineArrowLeft className="text-lg" />
            </div>
          </div>
        )}
      </div>
      {!show && (
        <button
          onClick={() => setShow(!show)}
          className="rounded-full bg-blue-800 text-white text-center inline-block w-10 h-10 font-semibold mt-3 absolute left-2 cursor-pointer lg:hidden"
        >
          <AiOutlineArrowRight className="text-lg inline-block" />
        </button>
      )}
    </>
  );
};

export default MobileAsideBar;

const Item = ({ item }: any) => {
  const [show, setShow] = useState(false);
  return (
    <Link href={item.url}>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="border-l-2 border-[#fff] hover:border-[#3A57E8] px-10 py-2 flex justify-between items-center text-[#8A92A6] hover:text-[#3A57E8] group/item cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Squares2X2Icon className="h-5 w-5" />
          <h4 className="text-[16px] font-medium  ">{item.name}</h4>
        </div>
        {show && <ChevronRightIcon className="h-5 w-5" />}
      </div>
    </Link>
  );
};
