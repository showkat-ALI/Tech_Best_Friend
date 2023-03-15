import React,{useState,useEffect} from 'react'
import { useGetQuizQuery  } from "../../../../../../../feature/api/dashboardApi"
import { useUpdateModuleQuizMutation} from "../../../../../../../feature/api/dashboardApi";
import { toast } from "react-toastify";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";

const QuizCategory = ({id,setShowModal}:{id:string;setShowModal:any}) => {
  const { data, isSuccess, isError, isLoading } = useGetQuizQuery({});
  const [updateModuleQuiz, { error, data:moduleData, isLoading:loadingModule, isSuccess:moduleisSuccess}] =  useUpdateModuleQuizMutation();
  const [QuizId, setQuizId] = useState("");
  const [activeClass, setactiveClass] = useState('');

  console.log(data)

  const clickQuiz = (id:string) => {
       setQuizId(id);
      setactiveClass(id)
  }

 const update = () => {
  updateModuleQuiz({id,quizzes:QuizId})
  }
  useEffect(() => {
    if (isError) {
        toast.error((error as any).data.message);
        // console.log(error);
    } else if (moduleisSuccess) {
        toast.success("Module has updated successfully!");
        console.log(data);
        setShowModal(false);
    }
}, [isError, moduleisSuccess])
  return (
    <div>
        <div className='mb-2'>
            <p className='text-[#8A92A6] text-[16px] mb-3 leading-[19px]'>Select the quiz you want to associate with this module or add an quiz by selecting “Create quiz”.</p>
        </div>
        <div>
                <div className='bg-[#fff] p-3 px-5 rounded' style={{boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)"}}>
                         <h2 className='text-[#3A57E8] underline font-medium mb-2 text-base'>Create Quiz</h2>
                         <div>
                             <ul className='flex flex-col gap-[10px] text-[#8A92A6] text-[15px] mb-2 h-[12rem] overflow-y-scroll'>
                                  {isLoading ? 
                                         <div>Loading....</div> 
                                         :isError ? 
                                              <div>Error....</div>
                                             :isSuccess && data?.data?.quazes && data.data.quazes.length > 0 ?
                                             data.data.quazes.map(({title,id}:{title:string;id:string},index:string) => (<li onClick={() => clickQuiz(id)} className={`${activeClass == id && "text-[#3A57E8]"} hover:text-[#da7b4f] cursor-pointer`}>Quiz {index + 1} - {title}</li>))  
                                              :<div>No quiz found</div> 
                                  }
                             </ul>
                         </div>
                </div> 
        </div>
        <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button onClick={() => setShowModal(false)} data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
                <button onClick={update} data-modal-hide="staticModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  {loadingModule ? <ButtonLoader />: "Add Item" }
                </button>
        </div>        
    </div>
  )
}

export default QuizCategory