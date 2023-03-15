import responsiveStyle from "../../../../../../styles/ContactStyle.module.css";
import Table from "./table";
// fake data
let courses = [
  {
    id: 1,
    StudentName: "Business",
    Quiz1: 200,
    Quiz2: 50,
    Quiz3: 200,
    Assignment1: 100,
    Assignment2: 100,
    Assignment3: 100,
    Grades: "A",
  },
  {
    id: 2,
    StudentName: "Business",
    Quiz1: 200,
    Quiz2: 50,
    Quiz3: 200,
    Assignment1: 100,
    Assignment2: 100,
    Assignment3: 100,
    Grades: "A",
  },
  {
    id: 3,
    StudentName: "Business",
    Quiz1: 200,
    Quiz2: 50,
    Quiz3: 200,
    Assignment1: 100,
    Assignment2: 100,
    Assignment3: 100,
    Grades: "A",
  },
  {
    id: 4,
    StudentName: "Business",
    Quiz1: 200,
    Quiz2: 50,
    Quiz3: 200,
    Assignment1: 100,
    Assignment2: 100,
    Assignment3: 100,
    Grades: "A",
  },
  {
    id: 5,
    StudentName: "Business",
    Quiz1: 200,
    Quiz2: 50,
    Quiz3: 200,
    Assignment1: 100,
    Assignment2: 100,
    Assignment3: 100,
    Grades: "A",
  },
  {
    id: 6,
    StudentName: "Business",
    Quiz1: 200,
    Quiz2: 50,
    Quiz3: 200,
    Assignment1: 100,
    Assignment2: 100,
    Assignment3: 100,
    Grades: "A",
  },
  {
    id: 7,
    StudentName: "Business",
    Quiz1: 200,
    Quiz2: 50,
    Quiz3: 200,
    Assignment1: 100,
    Assignment2: 100,
    Assignment3: 100,
    Grades: "A",
  },
  {
    id: 8,
    StudentName: "Business",
    Quiz1: 200,
    Quiz2: 50,
    Quiz3: 200,
    Assignment1: 100,
    Assignment2: 100,
    Assignment3: 100,
    Grades: "A",
  },
];

function GradeTable() {
  return (
    <div className="w-full md:overflow-scroll xl:overflow-hidden lg:overflow-hidden xsm:overflow-scroll sm:overflow-x-visible">
      <div
        className={` ${responsiveStyle.responsiveTable} overflow-x-scroll lg:overflow-x-auto md:w-full `}
      >
        <table className={`w-full text-[16px] md:text-[18px] text-left`}>
          <thead className="text-small-text-color text-sm ">
            <tr>
              <th scope="col" className="py-3 px-6 font-normal text-center  ">
                Student Name
              </th>
              <th scope="col" className="py-3 px-6 font-normal text-center">
                Quiz 1
              </th>
              <th scope="col" className="py-3 px-6 font-normal text-center  ">
                Quiz 2
              </th>
              <th scope="col" className="py-3 px-6 font-normal text-center">
                Quiz 3
              </th>
              <th scope="col" className="py-3 px-6 font-normal text-center">
                Assignment 1
              </th>
              <th scope="col" className="py-3 px-6 font-normal text-center  ">
                Assignment 2
              </th>
              <th scope="col" className="py-3 px-6 font-normal text-center">
                Assignment 3
              </th>
              <th scope="col" className="py-3 px-6 font-normal text-center">
                Grades
              </th>
            </tr>
          </thead>
          <tbody className="text-[#232D42]">
            {courses?.map((course, idx) => (
              <Table key={idx} course={course} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GradeTable;
