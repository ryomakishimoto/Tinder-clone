import React from 'react';
import './Chat.css';
import Avator from '@material-ui/core/Avatar';

function Chat({ name, message, profilePic, timestamp }) {
    return <div className="chat">
        <Avator className="chat__image" src={profilePic} />
        <div className="chat__details" >
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
    </div>
}

export default Chat
