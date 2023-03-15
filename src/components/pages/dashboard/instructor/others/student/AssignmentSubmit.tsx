import Image from 'next/image';
import React,{useEffect,useState} from 'react'
import rightIcon from "../../../../../../assets/RightIcon.png";
import {useRouter } from "next/router";
import {useGetOneSubmitAssignmentQuery,useGetAllSubmitAssignmentQuery} from "../../../../../../feature/api/dashboardApi";
import Link from 'next/link'


function AssignmentSubmitted () {
   const router = useRouter();
   const id = router.query.submitId as string;
   const { isError,data, error, isLoading, isSuccess } =  useGetOneSubmitAssignmentQuery(id)
   console.log(id,data)   
  return (
    <> 
      {
         isLoading  ?
               <div>Loading...</div>
                :isError ?
                      <div>Error...</div>
                      :isSuccess && 
      
        <div>
            <div className='mb-5'>
                 <h3 className='text-[22px] font-semibold mb-2'>{data.data.subAssignment.text}</h3>
                 <div className='flex text-[14px] font-medium text-[#3A57E8] gap-5'>
                     <span>Due Mar 27 by 11:59 pm</span>
                     <span>Points {data.data.subAssignment.mark}</span>
                 </div>
            </div>
            <div className='grid grid-cols-12 gap-8'>
                 <div className='col-span-12 lg:col-span-8'>
                      <div className='bg-[#fff] rounded p-5'>
                          <div className='grid grid-cols-12 mb-8'>
                              <div className='col-span-12 lg:col-span-6'>
                                  <div className='flex gap-3 items-baseline'>
                                       <h3 className='font-semibold text-xl'>Due</h3><span className='font-normal text-[16px]'>Mar 27 by 11:53pm</span>
                                  </div>
                              </div>
                              <div className='col-span-12 lg:col-span-6 xsm:mt-8 lg:mt-0'>
                                   <div className='flex gap-3 items-baseline'>
                                       <h3 className='font-semibold text-xl'>Points</h3><span className='font-normal text-[16px]'>{data.data.subAssignment.mark}</span>
                                  </div>
                              </div>
                          </div>
                          <div className='flex gap-3 items-baseline mb-6'>
                               <h3 className='font-semibold text-xl'>Submitting</h3><span className='font-normal text-[16px]'>a text entry box, a website url, a media recording, or a file upload</span>
                          </div>
                          <div className='flex gap-3 items-baseline mb-5 border-b border-[#DFDEDE] pb-6'>
                               <h3 className='font-semibold text-xl'>Available</h3><span className='font-normal text-[16px]'>Mar 2 at 12 am- Apr 10 at 11:59pm about 1 month</span>
                          </div>
                          <div className='mb-4'>
                             <span>
                                {data.data.subAssignment.comment}
                             </span>
                          </div>
                          <div className='mb-6'>
                              <span>
                                 
                              </span>
                          </div>
                      </div>
                 </div>
                 <div className='col-span-12 lg:col-span-4'>
                       <div className='bg-[#fff] p-5 rounded'>
                             <div className='mb-3'>
                                 <h3 className='font-semibold text-[17px] border-b border-[#DFDEDE] pb-4 mb-5'>Submission</h3>
                             </div>
                             <div>
                                 <button className=' gap-3 flex justify-center items-center rounded xsm:w-full lg:w-[165px] h-[42px] font-normal text-[15px] text-[#1AA053] bg-[#D5EBDF]'><Image src={rightIcon} /> Submittedd!</button><br/>
                                 <span className='font-medium'>Mar 10 at 12:11pm</span><br/>
                                 <button className='mt-5 flex text-xs rounded lg:!w-[80%] xsm:!w-full font-medium justify-center items-center gap-3 bg-[#EBEEFD] text-[#3A57E8]      border-[1px] h-[2.6rem] text-[14px] border-[#3A57E8] border-solid'>Submission Details</button><br/> 
                                  <a target="_blank" href={data.data.subAssignment.fileUrl[0]} className='flex text-xs rounded lg:!w-[80%] xsm:!w-full font-medium justify-center items-center gap-3 bg-[#EBEEFD] text-[#3A57E8] border-[1px] h-[2.6rem] text-[14px] border-[#3A57E8] border-solid'  >Download Assignment.PDF</a><br/>
                           
                             </div>
                             <div className='mb-5'>
                                  <span className='font-medium mb-1 text-[14px]'>Assigned Peer Reviews</span>
                                  <h3 className='font-semibold mb-4 mt-3'>None Assigned</h3>
                                  <span className='font-medium text-[#8A92A6] text-[15px]'>
                                      You may not see all comments right now because the assignment is currently being graded
                                  </span>
                             </div>
                       </div>
                 </div>
            </div>
        </div>
     } 
    </>
  )
}

export default AssignmentSubmitted
