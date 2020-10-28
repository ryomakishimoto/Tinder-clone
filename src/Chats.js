import React from 'react'
import "./Chats.css";
import Chat from "./Chat"

function Chats() {
    return <div className="chats">
        <Chat
          name="Mark"
          message="Yo whats up"
          timestamp="40 seconds ago"
          profilePic = "https://pbs.twimg.com/media/ElZkAJNU8AA6Vmm?format=jpg&name=small"
        />
        <Chat
          name="Mark"
          message="Yo whats up"
          timestamp="40 seconds ago"
          profilePic = "https://pbs.twimg.com/media/ElZkAJNU8AA6Vmm?format=jpg&name=small"
        />
        <Chat
          name="Mark"
          message="Yo whats up"
          timestamp="40 seconds ago"
          profilePic = "https://pbs.twimg.com/media/ElZkAJNU8AA6Vmm?format=jpg&name=small"
        />
        <Chat
          name="Mark"
          message="Yo whats up"
          timestamp="40 seconds ago"
          profilePic = "https://pbs.twimg.com/media/ElZkAJNU8AA6Vmm?format=jpg&name=small"
        />
    </div>
}

export default Chats
