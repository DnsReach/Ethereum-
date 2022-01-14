import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

import '../css-setup/Eth.css'

const SendMessage = ({ EndOfMessage }) => {
    const { user, Moralis } = useMoralis()
    const [message, setMessages] = useState('')

    const GiveMessage = (ev) => {
        ev.preventDefault()
        if (!message) return
        const Messages = Moralis.Object.extend('Messages')
        const messages = new Messages()
        messages
            .save({
                message: message,
                username: user.getUsername(),
                ethAddress: user.get('ethAddress'),
            })
            .then((e) => {
                console.log('ok')
            })
        EndOfMessage.current.scrollIntoView({
            behavior: 'smooth',
        })
    }
    return (
        <form
            style={{
                width: '500px',
                position: 'fixed',
                bottom: '0em',
                right: '20em',
                marginRight: '6em',
                marginTop: '20px',
            }}
            onSubmit={GiveMessage}
        >
            <input
                className="input-message"
                value={message}
                onChange={(evento) => setMessages(evento.target.value)}
            />
            <button
                style={{
                    borderRadius: '0 25px 25px 0',
                    width: '150px',
                    height: '50px',
                    background: 'transparent',
                    color: 'white',
                }}
                type="submit"
            >
                SEND
            </button>
        </form>
    )
}

export default SendMessage
