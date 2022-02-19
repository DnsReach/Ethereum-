import React from 'react'
import { useMoralis } from 'react-moralis'
import Image from './logo/horizontal.png'
import './css-setup/App.css'

const LoginSetup = () => {
    const { authenticate } = useMoralis()
    return (
        <main className="App">
            <button className="button" onClick={() => authenticate()}>
                <img
                    src={Image}
                    width="200px"
                    style={{
                        position: 'relative',
                        bottom: '25px',
                        left: '-33px',
                    }}
                    alt="logo"
                />
            </button>
        </main>
    )
}

export default LoginSetup
