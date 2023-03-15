import React from 'react';
import { BiDotsVerticalRounded, BiPhoneCall, BiVideo } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

const ChatRightHeader = () => {
    return (
        <div className='grid grid-cols-2 gap-4 border-b pb-3 items-center'>
            <div className='flex space-x-4 py-3'>
                <img src="https://i.ibb.co/ZfbxzhG/Rectangle-1207.png" alt="user" />
                <div>
                    <h4 className='text-[19px] text-[#3A57E8]'>Arman Rokni</h4>
                    <p className='text-[#8A92A6] text-[16px]'> <span className='w-2 h-2 bg-green-500 rounded-full inline-block'></span> Online</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='relative mr-5'>
                    <input type="text" placeholder='Search' className='bg-[#F9F9F9] w-full px-3 py-2 focus:outline-none rounded border pr-[50px]' />
                    <button className='absolute right-5 text-xl text-[#232D42] top-[50%] -translate-y-[50%]'><BsSearch/></button>
                </div>
                <div className='flex space-x-2'>
                    <button className='bg-[#3A57E8] p-2 rounded-full text-xl'><BiPhoneCall className='text-white'/></button>
                    <button className='bg-[#3A57E8] p-2 rounded-full text-xl'><BiVideo className='text-white'/></button>
                    <button className='bg-[#3A57E8] p-2 rounded-full text-xl'><BiDotsVerticalRounded className='text-white'/></button>
                </div>
            </div>
        </div>
    );
};

export default ChatRightHeader;