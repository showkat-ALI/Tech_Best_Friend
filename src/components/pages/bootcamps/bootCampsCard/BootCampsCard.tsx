import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "../../../../app/hooks";
import { motion } from "framer-motion";
import { useState } from "react";
import ActionConfirmModal from "../../../utils/modals/ActionConfirmModal";
import { useEnrollMutation } from "../../../../feature/api/dashboardApi";

import {
  AiFillSignal,
  AiOutlineDollar,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { TbStack2 } from "react-icons/tb";

const BootCampsCard = ({
  name,
  id,
  duration,
  cutprice,
  price,
  timeHour,
  timeMinute,
  level,
  modules,
  imgSrc,
  linkTo,
}: {
  name: any;
  duration: number;
  id: any;
  imgSrc: any;
  cutprice: number;
  timeHour: number;
  timeMinute: number;
  level: string;
  linkTo: string;
  modules: number;
  price: number;
}) => {
  const {
    user: { roles, studentType },
  } = useAppSelector((state) => state.auth);
  const [showEnrollConfirmModal, setShowEnrollConfirmModal] = useState(false);
  const handleCloseEnrollConfirmModal = () => setShowEnrollConfirmModal(false);
  return (
    <>
      <ActionConfirmModal
        show={showEnrollConfirmModal}
        handleClose={handleCloseEnrollConfirmModal}
        title="Are you sure you want to enroll this course?"
        id={id}
        mutationHook={useEnrollMutation}
        successMessage="Successfully enrolled!"
        sureButtonColor="success"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 100, ease: "linear" }}
        className=" flex justify-center items-center font-nunito rounded-lg w-full "
      >
        <div className=" bg-base-100 shadow-xl font-nunito rounded-lg w-full h-full flex flex-col">
          <Image
            width={350}
            height={200}
            layout="responsive"
            src={imgSrc}
            alt="Shoes"
            className="rounded-tl-xl rounded-tr-xl"
          />
          <div className="px-3">
            <p className="font-bold text-[1.1rem] leading-6 mt-[15px] regular-font">
              {name}
            </p>
          </div>
          <div className="px-3 mt-auto">
            
            <div className="my-6 text-gray-400">
              <p className="Nunito">Duration: {duration} Months</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div>
                  <AiOutlineDollar className="w-5 h-5" />
                </div>
                <div className="flex ml-1 lg:ml-1 justify-around text-lg items-center">
                  <div className=" line-through mr-2 text-gray-400">
                    ${cutprice}
                  </div>
                  <div className="mr-5 text-blue-500">${price}</div>
                </div>
              </div>
              <div className="flex items-center justify-evenly">
                <div className="flex items-center justify-between">
                  <span className="mr-1 lg:mr-2">
                    <AiFillSignal className="w-4 h-4 text-blue-600 font-bold" />
                  </span>{" "}
                  <span className="font-bold ">{level}</span>
                </div>
                <div className="flex ml-4 items-center justify-center">
                  <span className="mr-1 lg:mr-2">
                    <AiOutlineClockCircle className="w-4 h-4 text-gray-400" />
                  </span>{" "}
                  <span className="mr-1 text-gray-400">{timeHour}h</span>
                  <span className="text-gray-400">{timeMinute}m</span>
                </div>
              </div>
            </div>

            <div className="flex items-center my-6 text-gray-400">
              <span>
                <TbStack2 className="w-6 h-6" />
              </span>
              <p className="mx-2">{modules}</p>
              <p>Modules</p>
            </div>
            <div className={`flex justify-between items-center pb-2 mt-auto`}>
              <div className="border rounded-lg p-1  bg-blue-700 text-white text-center">
                <Link href={linkTo}>
                  <button className="">View Bootcamp</button>
                </Link>
              </div>
              {roles.includes("student") && (
                <div
                  onClick={() => setShowEnrollConfirmModal(true)}
                  className="border rounded-lg p-1 w-5/12 bg-emerald-700 text-center text-white"
                >
                  <button>
                    {studentType === "self-pace"
                      ? "Self pace"
                      : "Instructor led"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BootCampsCard;
