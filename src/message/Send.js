import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'
import Image from '../logo/horizontal.png'

import '../css-setup/Eth.css'

const SendMessage = ({ EndOfMessage }) => {
    const { user, Moralis, logout, setUserData } = useMoralis()
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
        <>
            <form id="form-submit" onSubmit={GiveMessage}>
                <a href="/market" id="button-sidebar">
                    <img
                        style={{
                            width: '100px',
                        }}
                        src={Image}
                    />
                </a>
                <footer>
                    <input
                        className="input-message"
                        value={message}
                        onChange={(evento) => setMessages(evento.target.value)}
                    />
                    <button id="button-submit" type="submit">
                        SEND
                    </button>
                </footer>
                <button
                    id="logout"
                    onClick={() =>
                        setUserData({
                            username: window.prompt(),
                        })
                    }
                >
                    User
                </button>
            </form>
        </>
    )
}

export default SendMessage
