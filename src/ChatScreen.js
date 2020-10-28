import React, { useState } from 'react'

function ChatScreen() {
    const [messages, setMessages] = useState([{
        name: 'Eleene',
        image: '...',
        message: 'What`s up'
    },
    {
        name: 'Eleene',
        image: '...',
        message: 'What`s up'
    },
    {
        name: 'Eleene',
        image: '...',
        message: 'What`s up'
    }
    ]);

    return (
        <div className="chatScreen">
            <p>You Matched with Ellen on 01/09/30</p>
            {messages.map(message => (
                <div>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
}

export default ChatScreen
