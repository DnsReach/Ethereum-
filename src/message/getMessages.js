import { useMoralis } from 'react-moralis'
import React from 'react'
import '../css-setup/GetMessage.css'

const HumanSex = ({ props }) => {
    const { user } = useMoralis()
    return (
        <>
            <img
                src={`https://avatars.dicebear.com/api/pixel-art/${
                    props || user.get('username')
                }.svg`}
                style={{
                    width: '40px',
                }}
                alt="Avatar"
            />
        </>
    )
}

const GetMessages = ({ message }) => {
    return (
        <main>
            <HumanSex props={message.get('username')} />
            {message.get('username')}
            <p className="messages">{message.get('message')}</p>
        </main>
    )
}

export default GetMessages
