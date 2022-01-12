import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'
import Signup from './components/signup'
import Message from './Messages'
import User from './components/User'
import Balance from './components/Balance'

import './App.css'

const App = () => {
    const { authenticate, isAuthenticated, logout, setUserData } = useMoralis()
    const [state, setState] = useState('')

    if (isAuthenticated) {
        return (
            <>
                <header className="header-metaverse">
                    <div className="container-user">
                        <input
                            style={{
                                borderStyle: 'solid',
                                marginRight: '-2px',
                            }}
                            placeholder="USER"
                            onChange={(ev) => setState(ev.target.value)}
                        />
                        <button
                            style={{
                                marginLeft: '5px',
                                background: 'transparent',
                                color: 'white',
                            }}
                            onClick={() =>
                                setUserData({
                                    username: state,
                                })
                            }
                        >
                            NEW
                        </button>
                    </div>
                    <button className="button-logout" onClick={() => logout()}>
                        LOGOUT
                    </button>
                </header>
                <nav className="component-container">
                    <User />
                    <Message />
                </nav>
            </>
        )
    }

    return (
        <>
            <div className="App">
                <h1
                    style={{
                        fontSize: 40,
                    }}
                >
                    CONNECT TO THE METAVERSE
                </h1>
                <button className="button" onClick={() => authenticate()}>
                    Click
                </button>
                <Signup />
            </div>
        </>
    )
}

export default App
