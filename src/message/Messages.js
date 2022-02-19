import React, { useRef } from 'react'
import SendMessage from './Send'
import { useMoralisQuery } from 'react-moralis'
import '../css-setup/Msg.css'
import GetMessages from './getMessages'

const Message = () => {
    const EndOfMessage = useRef(null)
    const { data } = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt').greaterThan(),
        [],
        {
            live: true,
        }
    )

    return (
        <>
            <section className="section-message">
                {data.map((messages) => {
                    return (
                        <>
                            <GetMessages message={messages} key={messages.id} />
                        </>
                    )
                })}
            </section>
            <SendMessage EndOfMessage={EndOfMessage} />
            <div ref={EndOfMessage}></div>
        </>
    )
}

export default Message
