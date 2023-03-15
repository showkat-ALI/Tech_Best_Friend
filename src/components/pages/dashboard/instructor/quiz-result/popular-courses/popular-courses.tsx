import PopularCourseCard from "./courses-card";

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      name: "UI/UX Design",
      text: "30+ Courses",
    },
    {
      id: 2,
      name: "UI/UX Design",
      text: "30+ Courses",
    },
    {
      id: 3,
      name: "UI/UX Design",
      text: "30+ Courses",
    },
    {
      id: 4,
      name: "UI/UX Design",
      text: "30+ Courses",
    },
    {
      id: 5,
      name: "UI/UX Design",
      text: "30+ Courses",
    },
    {
      id: 6,
      name: "UI/UX Design",
      text: "30+ Courses",
    },
  ];
  return (
    <div className="px-4 py-3 bg-white rounded-lg">
      <h2 className="text-[#232D42] font-semibold text-xl">Popular Courses</h2>
      <div className="mt-4 space-y-3">
        {courses.map((course) => {
          return <PopularCourseCard key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};

export default PopularCourses;
