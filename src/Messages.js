import React, { useRef } from 'react'
import SendMessage from './Send'
import { useMoralisQuery, useMoralis } from 'react-moralis'

const Message = () => {
    const EndOfMessage = useRef(null)
    const { user } = useMoralis()
    const { data } = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt').greaterThan(),
        [],
        {
            live: true,
        }
    )

    const HumanSex = ({ props }) => {
        return (
            <>
                <img
                    src={`https://avatars.dicebear.com/api/pixel-art/${
                        props || user.get('username')
                    }.svg`}
                    style={{
                        width: '40px',
                    }}
                />
            </>
        )
    }

    return (
        <>
            {data.map((messages) => {
                return (
                    <>
                        <p
                            key={messages.id}
                            style={{
                                fontSize: '15px',
                                color: 'yellow',
                            }}
                        >
                            <HumanSex props={messages.get('username')} />
                            {messages.get('username')}
                            <p
                                style={{
                                    color: 'white',
                                    marginBottom: '4em',
                                }}
                            >
                                {messages.get('message')}
                            </p>
                        </p>
                    </>
                )
            })}
            <SendMessage EndOfMessage={EndOfMessage} />
            <div ref={EndOfMessage}></div>
        </>
    )
}

export default Message
