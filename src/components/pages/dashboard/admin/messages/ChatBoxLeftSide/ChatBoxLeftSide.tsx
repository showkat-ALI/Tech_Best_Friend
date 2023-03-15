import React from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatLists from './ChatLists/ChatLists';

const ChatBoxLeftSide = () => {
    return (
        <div>
            <ChatHeader/>
            <ChatLists/>
        </div>
    );
};

export default ChatBoxLeftSide;