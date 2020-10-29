import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatSreen.css'

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([{
        name: 'Eleene',
        image: 'https://image.4yuuu.com/article/113635/ace4f8180736df8c048f7c6c6c0d7f78.jpg',
        message: 'What`s up'
    },
    {
        name: 'Eleene',
        image: 'https://image.4yuuu.com/article/113635/ace4f8180736df8c048f7c6c6c0d7f78.jpg',
        message: 'What`s up'
    },
    {
        message: 'Hi how`s going??'
    }
    ]);

    const handleSend = e => {
        e.preventDefault();
        // 配列をマージする処理. messagesの最後尾へ { message: input} を追加
        setMessages([...messages, { message: input }])
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You Matched with Ellen on 01/09/30</p>
            {messages.map((message) => (
                message.name ? (
                  <div className = "chatScreen__message" >
                    <Avatar 
                      className="chatScreen__image"
                      alt={message.name}
                      src={message.image}
                    />
                    <p className="chatSreen__text">{message.message}</p>
                </div>
                ) : (
                <div className = "chatScreen__message" >
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
                
            ))}

            <form className = "chatScreen__input" >
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    type="text"
                    placeholder="type a message..."
                />
                <button
                    onClick={handleSend}
                    className="chatScreen__inputButton"
                >
                SEND
                </button>
            </form>
        </div>
    )
}

export default ChatScreen
