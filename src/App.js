import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'
import Signup from './components/signup'
import Message from './message/Messages'
import User from './components/User'
import { createGlobalStyle } from 'styled-components'

import './css-setup/App.css'

const Global = createGlobalStyle`
body{
      background:url("https://cdn.wallpapersafari.com/81/13/0rCalk.jpg")
} `

const App = () => {
    const { authenticate, isAuthenticated } = useMoralis()

    if (isAuthenticated) {
        return (
            <>
                <User />
                <nav className="component-container">
                    <Message />
                </nav>
            </>
        )
    }

    return (
        <>
            <Global />
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
