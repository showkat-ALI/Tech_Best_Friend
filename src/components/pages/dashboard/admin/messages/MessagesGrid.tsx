import React from 'react';
import ChatBoxLeftSide from './ChatBoxLeftSide/ChatBoxLeftSide';
import ChatBoxRightSide from './ChatBoxRightSide/ChatBoxRightSide';

const MessagesGrid = () => {
    return (
        <div className='px-8'>
            <div className="grid grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg">
                    <ChatBoxLeftSide/>
                </div>
                <div className="col-span-2 rounded-lg p-6 bg-white">
                    <ChatBoxRightSide/>
                </div>
            </div>
        </div>
    );
};

export default MessagesGrid;