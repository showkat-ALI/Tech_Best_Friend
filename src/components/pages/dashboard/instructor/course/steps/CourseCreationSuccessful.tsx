import Image from 'next/image';
import React from 'react'
import Link from 'next/link'

type props = {
  onNext: () => void
  onPrev: () => void
}


//icon
import RightIcon from "../../../../../../assets/successfull.png"; 

const CourseCreationSuccessful = ({onNext,onPrev}:props) => {
  return (
    <>
       <div>
           <div className=''>
                <div className='flex justify-center'>
                    <Image src={RightIcon} width={540} height={390} alt=""/>
                </div>
                <div className='text-center  w-full m-auto mb-56'>
                    <h2 className='font-semibold text-[1.4rem]'>Your course has been submited successfully.</h2>
                    <p className='text-[#8A92A6] font-medium text-sm mt-5 mb-12'>We will review your item shortly. You will be informed by email that your course has been accepted. Also, make sure your <span className='text-[#3A57E8] underline'>Payment and Tax information</span> is correct and valid.
                    </p>
                    <Link href={`/dashboard`}><button className='bg-[#3A57E8] text-[#fff] py-3 px-3 text-sm font-normal rounded-sm'>Back to Homepage</button></Link>
                </div>
           </div>
       </div>
    </>
  )
}

export default CourseCreationSuccessful