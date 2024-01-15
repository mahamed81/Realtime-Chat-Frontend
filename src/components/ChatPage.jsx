import React from 'react'
import {
    MultiChatSocket,
    useMultiChatLogic,
    MultiChatWindow
  } from 'react-chat-engine-advanced';

export default function ChatPage({user}) {
  
    console.log(user.username)
    const chatProps = useMultiChatLogic('153bc070-1597-47d9-9e51-62bf2bb78fae',
        user.username,
        user.secret
      );
      return (
        <>
          <MultiChatWindow {...chatProps} />
          <MultiChatSocket {...chatProps} />
        </>
      );
}
