import React, { useState } from 'react';
import SingleGroup from './SingleGroup/SingleGroup';
import SingleUser from './SingleUser/SingleUser';

const ChatLists = () => {
    const [chatAndGroup,setChatAndGroup] = useState<boolean>(false)
    const [active,setActive] = useState<number>(1)

    const handleChatAndGroup=(id:number)=>{
        setChatAndGroup(!chatAndGroup)
        setActive(id)
    }

    return (
        <div>
            <div className='flex justify-between mb-5 border-b border-gray-200'>
                <h4 onClick={()=>handleChatAndGroup(1)} className={`${active===1 && "border-b-[2px] border-[#232D42]"} cursor-pointer`}>Private</h4>  
                <h4 onClick={()=>handleChatAndGroup(2)} className={`${active===2 && "border-b-[2px] border-[#232D42]"} cursor-pointer`}>Groups</h4>
            </div>
            <div>
                <div className='overflow-auto chat-scroll w-[340px] h-[calc(100vh_-_129px)]'>
                    {
                        !chatAndGroup ? <div>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                            <SingleUser/>
                        </div> : <div>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                            <SingleGroup/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ChatLists;