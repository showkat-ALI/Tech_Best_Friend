import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

const ChatHeader = () => {
    return (
        <div>
            <div className='flex justify-between mb-5'>
                <h4 className='text-[23px] text-[#232D42] font-medium'>Chat Room</h4>
                <button className='text-[#8A92A6]'><FaEdit/></button>
            </div>
            <div className='relative mb-5'>
                <input type="text" placeholder='Search' className='bg-[#F9F9F9] w-full px-3 py-3 focus:outline-none rounded border pr-[50px]' />
                <button className='absolute right-5 text-2xl text-[#232D42] top-[50%] -translate-y-[50%]'><BsSearch/></button>
            </div>
        </div>
    );
};

export default ChatHeader;