import { BiDotsVerticalRounded } from "react-icons/bi";

type Course = {
  name: string;
  text: string;
};

type PopularCourseCardProps = {
  course: Course;
};

const CoursesCard = (props: PopularCourseCardProps) => {
  const {
    course: { name, text },
  } = props;
  return (
    <div className="flex gap-2 justify-between">
      <div className="flex gap-2 items-center justify-between">
        <div className="w-[40px] h-[40px] text-white font-semibold bg-[#8A92A6] rounded flex items-center justify-center">
          <p>{name[0].toUpperCase()}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#3A57E8] font-medium">{name}</h3>
          <p className="text-[#8A92A6]">{text}</p>
        </div>
      </div>
      <button className="bg-[#3A57E8] rounded text-white px-3 lg:px-5 py-1 self-center">
        View
      </button>
      <button className="text-[#130F26] text-[25px]">
        <BiDotsVerticalRounded />
      </button>
    </div>
  );
};

export default CoursesCard;
