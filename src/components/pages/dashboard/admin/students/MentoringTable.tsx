import { AiOutlineDelete } from "react-icons/ai";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import responsiveStyle from "../../../../../styles/ContactStyle.module.css";
// fake data
let mentoringList = [
  {
    name: "Elon Musk",
    image:
      "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Mentoring",
    email: "boss@gmail.com",
    date: "12/3/2022",
    jobTitle: "Lorem ipsum ",
  },
  {
    name: "Elon Musk",
    image:
      "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Coaching",
    email: "boss@gmail.com",
    date: "12/3/2022",
    jobTitle: "Lorem ipsum ",
  },
  {
    name: "Elon Musk",
    image:
      "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Coaching",
    email: "boss@gmail.com",
    date: "12/3/2022",
    jobTitle: "Lorem ipsum ",
  },
  {
    name: "Elon Musk",
    image:
      "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Mentoring",
    email: "boss@gmail.com",
    date: "12/3/2022",
    jobTitle: "Lorem ipsum ",
  },
];

interface IStudentProps {
  student: any;
}

function Table({ student }: IStudentProps) {
  const { name, image, role, jobTitle, date, email, grade, status, country } =
    student || {};
  return (
    <tr className="border-b">
      <td scope="row" className="py-4 px-6">
        <div className="flex items-center space-x-2">
          <div className="lg:w-[60px] w-[40px] lg:h-[60px] h-[40px]  ">
            <img className="w-full h-full rounded-md" src={image} alt="" />
          </div>
          <div>
            <h2 className="text-[16px] md:text-[18px] text-[#232D42] font-medium">
              {name}
            </h2>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">{email}</td>
      <td className="py-4 px-6">{date}</td>
      <td className="py-4 px-6">{role}</td>
      <td className="py-4 px-6">
        <button className="text-[16px] flex items-center space-x-1.5 text-white px-4 py-1.5 rounded bg-[#3A57E8] ">
          <FaEnvelopeOpenText /> <span>Email</span>
        </button>
      </td>
      <td className="py-4 px-6">
        <div className="flex justify-center space-x-6">
          <button className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] ">
            <MdOutlineRemoveRedEye />
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] ">
            <AiOutlineDelete />
          </button>
        </div>
      </td>
    </tr>
  );
}

function MentoringTable() {
  return (
    <>
      <div
        className={` ${responsiveStyle.responsiveTable} overflow-x-scroll lg:overflow-x-auto md:w-full mx-auto shadow-md sm:rounded-lg mt-12`}
      >
        <table className="w-full text-[16px] md:text-[18px] text-left">
          <thead className="text-[#ADB5BD] font-normal">
            <tr>
              <th scope="col" className="py-3 px-6">
                Profiles
              </th>
              <th scope="col" className="py-3 px-6 ">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Area of interest
              </th>
              <th scope="col" className="py-3 px-6 ">
                Message
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-[#232D42]">
            {mentoringList?.map((student, idx) => (
              <Table key={idx} student={student} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MentoringTable;
