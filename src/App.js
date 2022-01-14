import React from 'react'
import { useMoralis } from 'react-moralis'
import Signup from './components/signup'
import Message from './message/Messages'
import User from './components/User'
import Sidebar from './components/sidebar'
import './css-setup/App.css'

const App = () => {
    const { authenticate, isAuthenticated } = useMoralis()

    if (isAuthenticated) {
        return (
            <>
                <User />
                <Sidebar />
                <nav className="component-container">
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
