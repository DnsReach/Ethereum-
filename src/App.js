import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useMoralis } from 'react-moralis'
import Signup from './components/signup'
import User from './components/User'
import { createGlobalStyle } from 'styled-components'
import Sider from './components/sidebar'
import Setup from './setup'
import './css-setup/App.css'

const Global = createGlobalStyle`
body{
      background: url("https://cdn.wallpapersafari.com/81/13/0rCalk.jpg")
} `

const App = () => {
    const { authenticate, isAuthenticated } = useMoralis()

    if (isAuthenticated) {
        return (
            <>
                <Router>
                    <Routes>
                        <Route path="/market" element={<Sider />}></Route>
                        <Route
                            path="/"
                            element={
                                <>
                                    <User />
                                    <Setup />
                                </>
                            }
                        ></Route>
                    </Routes>
                </Router>
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
