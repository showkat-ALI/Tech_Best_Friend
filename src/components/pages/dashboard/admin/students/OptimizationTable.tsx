import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineFileDownload, MdOutlineRemoveRedEye } from "react-icons/md";
import responsiveStyle from "../../../../../styles/ContactStyle.module.css";
// fake data
let studentsList = [
  {
    profile: {
      name: "Elon Musk",
      image:
        "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      role: "Instructor-led",
    },
    contract: "+880123456789",
    degree: "High School",
    linkedin: "https://www.linkedin.com/..",
  },
  {
    profile: {
      name: "Elon Musk",
      image:
        "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      role: "Instructor-led",
    },
    contract: "+880123456789",
    degree: "High School",
    linkedin: "https://www.linkedin.com/..",
  },
  {
    profile: {
      name: "Elon Musk",
      image:
        "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      role: "Instructor-led",
    },
    contract: "+880123456789",
    degree: "High School",
    linkedin: "https://www.linkedin.com/..",
  },
  {
    profile: {
      name: "Elon Musk",
      image:
        "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      role: "Instructor-led",
    },
    contract: "+880123456789",
    degree: "High School",
    linkedin: "https://www.linkedin.com/..",
  },
  {
    profile: {
      name: "Elon Musk",
      image:
        "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      role: "Instructor-led",
    },
    contract: "+880123456789",
    degree: "High School",
    linkedin: "https://www.linkedin.com/..",
  },
];

interface IStudentProps {
  student: any;
}

function Table({ student }: IStudentProps) {
  const { profile, contract, degree, linkedin } = student || {};
  return (
    <tr className="border-b">
      <td scope="row" className="py-4 px-6">
        <div className="flex space-x-2">
          <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] ">
            <img
              className="w-full h-full rounded-md"
              src={profile?.image}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[16px] md:text-[18px] text-[#232D42] font-medium">
              {profile?.name}
            </h2>
            <p className="text-[16px] text-[#8A92A6]">{profile?.role}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">{contract}</td>
      <td className="py-4 px-6">{degree}</td>
      <td className="py-4 px-6">{linkedin}</td>
      <td className="py-4 px-6">
        <button className="text-[16px] flex items-center space-x-1.5 text-white px-4 py-1.5 rounded bg-[#3A57E8] ">
          <MdOutlineFileDownload /> <span>Email</span>
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

function OptimizationTable() {
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
                Contact
              </th>
              <th scope="col" className="py-3 px-6">
                Education
              </th>
              <th scope="col" className="py-3 px-6">
                LinkedIn URL
              </th>
              <th scope="col" className="py-3 px-6 ">
                Resume
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-[#232D42]">
            {studentsList?.map((student, idx) => (
              <Table key={idx} student={student} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OptimizationTable;
