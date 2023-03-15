import responsiveStyle from "../../../../../../../styles/ContactStyle.module.css";
import Table from "./attendance-table-row";
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

function AttendanceTable() {
  return (
    <div className="md:overflow-scroll xl:overflow-hidden lg:overflow-hidden xsm:overflow-scroll sm:overflow-x-visible">
      <div
        className={` ${responsiveStyle.responsiveTable} overflow-y-scroll lg:overflow-y-auto md:w-full h-80   scrollbar relative scrollbar-thumb-blue-600 scrollbar-track-slate-300`}
      >
        <table className={`w-full text-[16px] md:text-[18px] text-left`}>
          <thead className="text-small-text-color text-sm ">
            <tr>
              <th scope="col" className="py-3 px-6  font-normal ">
                Student Name
              </th>
              <th scope="col" className="py-3 px-6 text-center font-normal">
                Status
              </th>
              <th scope="col" className="py-3 px-6  text-center font-normal ">
                Score
              </th>

              <th scope="col" className="py-3 px-6 text-center font-normal">
                Grade
              </th>
              <th scope="col" className="py-3 px-6 text-center font-normal ">
                Submitted/ Timeout
              </th>
              <th scope="col" className="py-3 px-6 text-center font-normal">
                Details
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

export default AttendanceTable;
