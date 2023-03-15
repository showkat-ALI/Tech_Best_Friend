import React from 'react';
import { MdKeyboardVoice, MdUploadFile } from 'react-icons/md';

const BottomOptions = () => {
    return (
        <div className="flex items-center mt-10 justify-between w-full p-3 border-t border-gray-300">
            <input
                type="text"
                placeholder="Type a message"
                className="block w-full py-2 pl-4 mx-3 bg-gray-50 outline-none focus:text-gray-700 focus:outline-none rounded border-b focus:border-b focus:border-[#3A57E8]"
                name="message"
                required
            />
            <div className='flex space-x-4'>
                <button>
                    <MdKeyboardVoice className='text-gray-500 text-xl'/>
                </button>
                <button>
                    <MdUploadFile className='text-gray-500 text-xl'/>
                </button>
                <button type="submit">
                    <svg
                        className="w-6 h-6 text-[#3A57E8] origin-center transform rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BottomOptions;