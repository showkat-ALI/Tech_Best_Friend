import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { MdPersonAddAlt } from "react-icons/md";
import DeleteCourseModal from "./DeleteCourseModal";
import { useState } from "react";
import Link from "next/link"

type ITable = {
  title: string;
  createdAt: Date;
  price: number;
  isPending: boolean;
  isPublished: boolean;
  id: string;
  isActive: boolean;
  totalEnroll: number;
};

function Table(props: ITable) {
  const {
    title,
    createdAt,
    price,
    isPending,
    isPublished,
    id,
    isActive,
    totalEnroll,
  } = props;
  const [showDeleteCourseModal, setshowDeleteCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleClose = () => {
    setshowDeleteCourseModal(false);
    setSelectedCourse("");
  };

  const handleDeleteCourse = (id: string) => {
    console.log("delete course");
    setshowDeleteCourseModal(true);
    setSelectedCourse(id);
  };
  return (
    <tr className="border-b">
      <DeleteCourseModal
        show={showDeleteCourseModal}
        handleClose={handleClose}
        userId={selectedCourse}
      />
      <td scope="row" className="py-4 px-6 font-nunito">
        {title}
      </td>
      <td className="py-4 px-6 text-center font-nunito">{totalEnroll}</td>
      <td className="py-4 px-6 text-center font-nunito">
        {new Date(createdAt).toLocaleDateString()}
      </td>
      <td className="py-4 px-6 font-nunito">${price}</td>
      <td className="py-4 px-6 font-nunito">
        <button
          className={`rounded-xl px-2 py-1 text-[12px] font-nunito
           ${
             (isActive && "text-[#3A57E8]") ||
             (isPending && "text-[#F16A1B]") ||
             (status === "Hold" && "text-white") ||
             (isPublished && "text-[#1AA053]") ||
             (status === "Inactive" && "text-[#C03221]")
           } 
           ${
             (isActive && "bg-[#EBEEFD]") ||
             (isPending && "bg-[#FCE1D1]") ||
             (status === "Hold" && "bg-[#3A57E8]") ||
             (isPublished && "bg-[#D5EBDF]") ||
             (status === "Inactive" && "bg-[#F2D6D3]")
           } 
           `}
        >
          {isActive
            ? "Active"
            : isPending
            ? "Pending"
            : isPublished && "Published"}
        </button>
      </td>
      <td className="py-4 px-6 font-nunito">
        <div className="flex justify-center space-x-6 font-nunito">
          {/* <button className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] ">
            <MdPersonAddAlt />
          </button> */}
        <Link href={"/dashboard/instructor/course/edit/[editId]"} as={`/dashboard/instructor/course/edit/${id}`}>
          <button className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] ">
            <BiEditAlt />
          </button>
        </Link>  
          <button
            onClick={() => handleDeleteCourse(id)}
            className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] "
          >
            <AiOutlineDelete />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Table;
