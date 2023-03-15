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
import React, { useState, useEffect } from "react";
import {
  AiOutlineAppstore,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineInfoCircle,
  AiOutlineLogout,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
  AiFillSetting,
} from "react-icons/ai";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { MdQuiz } from "react-icons/md";
import { BsFillChatLeftDotsFill, BsMenuButton } from "react-icons/bs";
import { useAppSelector } from "../../../app/hooks";
import logo from "../../../assets/logo.png";
import user from "../../../assets/user.png";
import MobileAsideBar from "./MobileAsideBar";
import { useLogoutMutation } from "../../../feature/api/authApi";
import { useAppDispatch } from "../../../app/hooks";
import { logout as logoutAction } from "../../../feature/auth/authSlice";
import { toast } from "react-toastify";
import Router from "next/router";
import { useRouter } from "next/router";
import { ImFilesEmpty } from "react-icons/im";
import { MdNoteAdd } from "react-icons/md";

const AsideBar = () => {
  const { avatar, firstName, lastName, userName, roles, studentType } =
    useAppSelector((state) => state.auth.user);
  const [show, setShow] = useState(true);
  let width = "w-[260px]";
  if (!show) {
    width = "-translate-x-[240px] w-0";
  }
  const router = useRouter();

  const [logout, { isSuccess, isError, error }] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    logout({});
    console.log("logout success");
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logged out successfully!");
      setTimeout(() => {
        Router.push("/");
        dispatch(logoutAction());
      }, 1500);
    } else if (isError) {
      toast.error("Something went wrong while logging out!");
      console.log("logout error", error);
    }
  }, [isSuccess, isError]);

  return (
    <>
      <div
        className={`${width} hidden lg:flex flex-col gap-3 relative font-nunito`}
      >
        <div className="mt-5 text-center">
          <Link href="/">
            <a className="flex justify-center items-center gap-2 ">
              <Image
                src={logo}
                width={35}
                height={35}
                className="h-5 w-6"
                alt={"logo"}
              />
              <span className="uppercase font-semibold text-2xl">FITA</span>
            </a>
          </Link>
        </div>
        {/* profile section  */}
        <div className="p-5 flex flex-col gap-2 items-center font-nunito">
          <div className="border border-blue-600 w-[70px] h-[70px] relative rounded-md overflow-hidden">
            <Image
              src={avatar ? avatar : user}
              layout="fill"
              alt={"avatar"}
              objectFit="cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-[#001F4D] font-medium">
              {firstName + " " + lastName}
            </h3>
            <Link href={"/dashboard/my-account"}>
              <a className="text-sm text-[#8A92A6]">@{userName}</a>
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
        <div className="flex flex-col gap-3 font-nunito">
          {roles.includes("admin")
            ? [
                {
                  name: "Dashboard",
                  id: 1,
                  url: "/dashboard",
                  icon: AiOutlineAppstore,
                  active:
                    router.pathname == "/dashboard"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Users",
                  id: 2,
                  url: "/dashboard/users",
                  icon: AiOutlineUser,
                  active:
                    router.pathname == "/dashboard/users"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Messages",
                  id: 3,
                  url: "/dashboard/messages",
                  icon: BsFillChatLeftDotsFill,
                  active:
                    router.pathname == "/dashboard/messages"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Courses",
                  id: 4,
                  url: "/dashboard/courses",
                  icon: BsMenuButton,
                  active:
                    router.pathname === "/dashboard/courses" ||
                    router.pathname ===
                      "/dashboard/instructor/course/creation" ||
                    router.pathname ===
                      "/dashboard/instructor/course/edit/[editId]"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Students",
                  id: 5,
                  url: "/dashboard/students",
                  icon: AiOutlineTeam,
                  active:
                    router.pathname == "/dashboard/students"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Instructors",
                  id: 6,
                  url: "/dashboard/instructors",
                  icon: AiOutlineUsergroupAdd,
                  active:
                    router.pathname == "/dashboard/instructors"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "My Account",
                  id: 7,
                  url: "/dashboard/my-account",
                  icon: AiOutlineUserAdd,
                  active:
                    router.pathname == "/dashboard/my-account"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
              ].map((single) => <Item key={single.id} item={single} />)
            : roles.includes("instructor")
            ? [
                {
                  name: "Dashboard",
                  id: 1,
                  url: "/dashboard",
                  icon: AiOutlineAppstore,
                  active:
                    router.pathname == "/dashboard"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "My Courses",
                  id: 9,
                  url: "/dashboard/courses",
                  icon: AiOutlineUser,
                  active:
                    router.pathname == "/dashboard/courses"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Messages",
                  id: 10,
                  url: "/dashboard/messages",
                  icon: BsFillChatLeftDotsFill,
                  active:
                    router.pathname == "/dashboard/messages"
                      ? "!border-[#3A57E8] text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Students",
                  id: 11,
                  url: "/dashboard/students",
                  icon: BsMenuButton,
                  active:
                    router.pathname == "/dashboard/students"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Assignments",
                  id: 12,
                  url: "/dashboard/instructor/assignmentcreation",
                  icon: AiOutlineTeam,
                  active:
                    router.pathname ==
                    "/dashboard/instructor/assignmentcreation"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Quiz",
                  id: 13,
                  url: "/dashboard/instructor/quiz-creation",
                  icon: MdQuiz,
                  active:
                    router.pathname == "/dashboard/instructor/quiz-creation"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Live Class",
                  id: 14,
                  url: "/dashboard/Instructor/my-account",
                  icon: VscDeviceCameraVideo,
                },
                {
                  name: "Files",
                  id: 15,
                  url: "/dashboard/instructor/files",
                  icon: ImFilesEmpty,
                  active:
                    router.pathname == "/dashboard/instructor/files"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Grades",
                  id: 16,
                  url: "/dashboard/instructor/grades",
                  icon: MdNoteAdd,
                  active:
                    router.pathname == "/dashboard/instructor/grades"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "My Account",
                  id: 7,
                  url: "/dashboard/my-account",
                  icon: AiFillSetting,
                  active:
                    router.pathname == "/dashboard/my-account"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
              ].map((single) => <Item key={single.id} item={single} />)
            : roles.includes("student") && studentType === "self-pace"
            ? [
                {
                  name: "Dashboard",
                  id: 1,
                  url: "/dashboard",
                  icon: AiOutlineAppstore,
                },
                {
                  name: "My Courses",
                  id: 9,
                  url: "/dashboard/student-self/my-course",
                  icon: AiOutlineUser,
                  active:
                    router.pathname == "/dashboard/student-self/my-course"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Files",
                  id: 15,
                  url: "/dashboard/instructor/files",
                  icon: ImFilesEmpty,
                  active:
                    router.pathname == "/dashboard/instructor/files"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Messages",
                  id: 10,
                  url: "/dashboard/messages",
                  icon: BsFillChatLeftDotsFill,
                  active:
                    router.pathname == "/dashboard/messages"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "My Account",
                  id: 7,
                  url: "/dashboard/my-account",
                  icon: AiFillSetting,
                },
              ].map((single) => <Item key={single.id} item={single} />)
            : roles.includes("student") &&
              studentType === "instructor-led" &&
              [
                {
                  name: "Dashboard",
                  id: 1,
                  url: "/dashboard",
                  icon: AiOutlineAppstore,
                },
                {
                  name: "My Courses",
                  id: 9,
                  url: "/dashboard/student-self/my-course",
                  icon: AiOutlineUser,
                  active:
                    router.pathname == "/dashboard/student-self/my-course"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Assignments",
                  id: 12,
                  url: "/dashboard/Instructor/assignments",
                  icon: AiOutlineTeam,
                },
                {
                  name: "Quiz",
                  id: 13,
                  url: "/dashboard/Instructor/quiz",
                  icon: MdQuiz,
                },
                {
                  name: "Messages",
                  id: 10,
                  url: "/dashboard/messages",
                  icon: BsFillChatLeftDotsFill,
                  active:
                    router.pathname == "/dashboard/messages"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Files",
                  id: 15,
                  url: "/dashboard/instructor/files",
                  icon: ImFilesEmpty,
                  active:
                    router.pathname == "/dashboard/instructor/files"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
                {
                  name: "Live Class",
                  id: 14,
                  url: "/dashboard/Instructor/my-account",
                  icon: VscDeviceCameraVideo,
                },
                {
                  name: "Grades",
                  id: 16,
                  url: "/dashboard/Instructor/grades",
                  icon: MdNoteAdd,
                },
                {
                  name: "My Account",
                  id: 7,
                  url: "/dashboard/my-account",
                  icon: AiFillSetting,
                  active:
                    router.pathname == "/dashboard/my-account"
                      ? "!border-[#3A57E8] !text-[#3A57E8]"
                      : "",
                },
              ].map((single) => <Item key={single.id} item={single} />)}
        </div>
        <div className="border-b mt-4 w-full px-5"></div>

        {/* other section */}
        <div className="px-5 pt-3">
          <h3 className="text-[#232D42] font-semibold uppercase">Other</h3>
        </div>
        <div className="">
          {[
            {
              name: "Sign Out",
              id: 1,
              Icons: AiOutlineLogout,
              clickHandler: logoutHandler,
            },
            { name: "Help", id: 2, Icons: AiOutlineInfoCircle },
          ].map(({ name, id, Icons, clickHandler }) => (
            <div
              key={id}
              className="border-l-2 border-[#8A92A6] hover:border-[#3A57E8] px-10 py-2 flex justify-between items-center text-[#8A92A6] hover:text-[#3A57E8] group/item"
            >
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={clickHandler}
              >
                <Icons className="h-5 w-5" />
                <h4 className="text-[16px] font-medium  ">{name}</h4>
              </div>
              <ChevronRightIcon className="h-5 w-5  group-hover/item:text-gray-700 invisible group-hover/item:visible" />
            </div>
          ))}
        </div>
        <div
          onClick={() => setShow(!show)}
          className={`absolute top-3 ${
            !show ? "right-10" : "-right-4"
          } rounded-full bg-blue-800 text-white p-3 cursor-pointer`}
        >
          <AiOutlineArrowLeft className="text-lg" />
        </div>
      </div>
      {!show && (
        <button
          onClick={() => setShow(!show)}
          className="rounded-full bg-blue-800 text-white text-center inline-block w-10 h-10 font-semibold mt-3 absolute left-2 cursor-pointer"
        >
          <AiOutlineArrowRight className="text-lg inline-block" />
        </button>
      )}
      <MobileAsideBar />
    </>
  );
};

export default AsideBar;

const Item = ({ item }: any) => {
  const [show, setShow] = useState(false);
  return (
    <Link href={item.url}>
      <a
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={`${item.active} border-l-2 border-[#fff] hover:border-[#3A57E8] px-10 py-2 flex justify-between items-center text-[#8A92A6] hover:text-[#3A57E8] group/item cursor-pointer`}
      >
        <div className="flex items-center gap-2">
          <item.icon className="w-5 h-5" />
          <h4 className="text-[16px] font-medium  ">{item.name}</h4>
        </div>
        {show && <ChevronRightIcon className="h-5 w-5" />}
      </a>
    </Link>
  );
};
