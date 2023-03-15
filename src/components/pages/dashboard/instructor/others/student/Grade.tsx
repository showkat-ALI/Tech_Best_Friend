import Image from 'next/image'
import React from 'react'
import PrintIcon from '../../../../../../assets/print.png'
import msgIcon from '../../../../../../assets/msg.png'

const Grade = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-8'>
          <div className='col-span-12 lg:col-span-8'>
              <div className='bg-[#fff] rounded'>
                   <div className='lg:p-5'>
                       <div className='flex justify-between mb-6 xsm:gap-5 lg:gap-0 items-center flex-col lg:flex-row'>
                            <input type="number" placeholder='All Grading Periods' className="border-none rounded-md w-[100%] lg:w-[40%] h-[50px] text-sm font-normal" style={{boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.15)'}}/>
                            <button className='bg-[#EBEEFD] w-full lg:w-[135px] justify-center flex items-center gap-2 border-[1px] border-[#3A57E8] font-normal text-[15px] px-3 h-[41px] rounded'><Image src={PrintIcon} width="17px" height="17px"/> Print grades</button>
                       </div>
                       <h3 className='font-semibold text-[21px] mb-3'>Grades for Emily Boone</h3>
                       <div className='flex justify-between mb-3 flex-col lg:flex-row xsm:gap-5 lg:gap-0'>
                           <div className='flex gap-3 lg:items-center w-full flex-col lg:flex-row'>
                               <label className='font-medium text-[15px]'>For the course</label>
                               <input type='number' className="border-none rounded-md w-full lg:w-[54%] h-[50px] text-sm font-normal" placeholder='History 101' style={{boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.15)'}}/>
                           </div>
                           <div className='flex gap-3 lg:items-center w-full flex-col lg:flex-row'>
                               <label className='font-medium text-[15px]'>Arrange by</label>
                               <input type='number' className='border-none rounded-md w-full lg:w-[54%] h-[50px] text-sm font-normal' placeholder='Due Date 101' style={{boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.15)'}}/>
                           </div>
                       </div>
                   </div>
                   <div>
                        <table className='table-fixed w-full '>
                              <thead className='border-t border-b border-[#ADB5BD]'>
                                   <tr className='font-medium '>
                                        <th className='py-3 bg-[#E3E3E3] text-left px-3 text-[16px] font-medium'>Name</th>
                                        <th  className='py-3  bg-[#E3E3E3] text-[16px] font-medium'>Due</th>
                                        <th  className='py-3 bg-[#E3E3E3] text-[16px] font-medium'>Score</th>
                                        <th  className='py-3  bg-[#E3E3E3] text-[16px] font-medium'>Out of</th>
                                   </tr>
                              </thead>
                              <tbody className='text-black text-center'>
                                    <tr className='cursor pointer duration-300'>
                                        <th className='py-3 px-3 text-left text-[15px] font-semibold'>Course Evaluion</th>
                                        <th className='py-3 px-6 font-normal text-sm'>Dec 29,2012 by 11:50pm</th>
                                        <th className='py-3 px-6  font-normal text-sm'><Image src={msgIcon} width="22px" height="21px"/></th>
                                        <th className='py-3 px-6  font-normal text-sm'>5</th>
                                    </tr>
                                    <tr className='bg-[#F6FBFB] border-t border-b border-[#EEEEEE]'>
                                       <th className='py-3 px-3 text-left text-[15px] font-semibold'>Course Evaluion</th>
                                        <th className='py-3 px-6 font-normal text-sm'>Dec 29,2012 by 11:50pm</th>
                                        <th className='py-3 px-6  font-normal text-sm'>4</th>
                                        <th className='py-3 px-6  font-normal text-sm'>5</th>
                                    </tr>
                                    <tr>
                                        <th className='py-3 px-3 text-left text-[15px] font-semibold'>Course Evaluion</th>
                                        <th className='py-3 px-6 font-normal text-sm'>Dec 29,2012 by 11:50pm</th>
                                        <th className='py-3 px-6  font-normal text-sm'>4</th>
                                        <th className='py-3 px-6  font-normal text-sm'>5</th>
                                    </tr>
                                    <tr className='bg-[#F6FBFB] border-t border-b border-[#EEEEEE]'>
                                        <th className='py-3 px-3 text-left text-[15px] font-semibold'>Course Evaluion</th>
                                        <th className='py-3 px-6 font-normal text-sm'>Dec 29,2012 by 11:50pm</th>
                                        <th className='py-3 px-6  font-normal text-sm'><Image src={msgIcon} width="22px" height="21px"/></th>
                                        <th className='py-3 px-6  font-normal text-sm'>5</th>
                                    </tr>
                                    <tr>
                                        <th className='py-3 px-3 text-left text-[15px] font-semibold'>Course Evaluion</th>
                                        <th className='py-3 px-6 font-normal text-sm'>Dec 29,2012 by 11:50pm</th>
                                        <th className='py-3 px-6  font-normal text-sm'>4</th>
                                        <th className='py-3 px-6  font-normal text-sm'>5</th>
                                    </tr>
                              </tbody>
                        </table>
                   </div>
              </div>
          </div>
          <div className='col-span-12 lg:col-span-4'>
               <div>
                   <div>
                        <div className='flex flex-col mb-4'>
                            <label className='font-medium mb-2'>Total 83.80% (2.7)</label>
                            <input type='text' placeholder='Show saved "what-if" Scores' style={{boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.15)'}} className="border-none text-[#8A92A6] text-sm w-full lg:w-[75%] py-4 rounded"/>
                        </div>
                       
                        <button className='bg-[#3A57E8] text-sm font-normal px-4 py-2 text-white rounded xsm:w-full lg:w-[138px]'>Show All Details</button>
                   </div>
                   <div className='bg-[#fff] mt-4 p-5 rounded'>
                        <h3 className='font-medium text-[#8A92A6] text-[15px]'>Assignments are weighted by group:</h3>
                       <table className='mb-4 table-fixed w-full'>
                             <thead>
                                 <tr className='border-b border-[#EEEEEE]'>
                                    <th className='py-3 pr-[15rem]'>Group</th>
                                    <th className=' py-3'>Weight</th>
                                 </tr>
                             </thead>
                             <tbody className='text-center'>
                                  <tr  className='border-b border-[#EEEEEE]'>
                                      <td  className='py-3 pr-[15rem] text-[15px] font-medium'>Assignments</td>
                                      <td>20%</td>
                                  </tr>
                                  <tr  className='border-b border-[#EEEEEE]'>
                                      <td  className='py-3 pr-[15rem] text-[15px] font-medium'>Discurssions</td>
                                      <td>20%</td>
                                  </tr>
                                  <tr  className='border-b border-[#EEEEEE]'>
                                      <td  className='py-3 pr-[15rem] text-[15px] font-medium'>Quizzers</td>
                                      <td>20%</td>
                                  </tr>
                                  <tr  className='border-b border-[#EEEEEE]'>
                                      <td  className='py-3 pr-[15rem] text-[15px] font-medium'>Total</td>
                                      <td>20%</td>
                                  </tr>
                                  <tr  className='border-b border-[#EEEEEE]'>
                                      <td  className='py-3 pr-[15rem] text-[15px] font-medium'>Assignments</td>
                                      <td className='font-medium '>20%</td>
                                  </tr>
                             </tbody>
                       </table>
                       <span className='text-[#8A92A6] font-medium text-[15px] rounded ml-3'>Calculate based only on graded</span>
                       <div className='flex gap-2 items-center py-3'>
                          <input type="checkbox"/>
                          <label className='font-medium text-[15px]'>Assignmens</label>
                       </div>
                   </div>
                   <div className='mt-4'>
                        <p className='font-medium text-[#8A92A6] text-[15px]'>Click any score and enter a new value to see how the change will affect your total.</p>
                   </div>
               </div>
          </div>
      </div>
    </>
  )
}

export default Grade