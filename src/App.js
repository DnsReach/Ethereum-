import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useMoralis } from 'react-moralis'
import User from './components/User'
import { createGlobalStyle } from 'styled-components'
import Sider from './components/sidebar'
import Setup from './setup'
import LoginSetup from './LoginSetup'
import Nft from './nft'

const Global = createGlobalStyle`
body{
      background: url("https://miro.medium.com/max/1400/1*Q126mgjvk0az7ZhxLznK9Q.png");
} `

const App = () => {
    const { isAuthenticated } = useMoralis()
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
                        <Route path="/nft" element={<Nft />}></Route>
                    </Routes>
                </Router>
            </>
        )
    }

    return (
        <>
            <Global />
            <LoginSetup />
        </>
    )
}

export default App
