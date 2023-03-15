import React from 'react';
import ChatRightHeader from './ChatRightHeader/ChatRightHeader';
import Messages from './Messages/Messages';
import BottomOptions from './Options/BottomOptions';

const ChatBoxRightSide = () => {
    return (
        <div>
            <ChatRightHeader/>
            <Messages/>
            <BottomOptions/>
        </div>
    );
};

export default ChatBoxRightSide;