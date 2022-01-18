import { useMoralis } from 'react-moralis'
import React from 'react'

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
        <div>
            <HumanSex props={message.get('username')} />
            {message.get('username')}
            <p
                style={{
                    color: 'white',
                    marginBottom: '4em',
                }}
            >
                {message.get('message')}
            </p>
        </div>
    )
}

export default GetMessages
