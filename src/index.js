import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MoralisProvider } from 'react-moralis'

const AppID = 'nsensrutGheiXT3wyLGyYcHZRbeIoPaL5zxxYND1'
const Server = 'https://v7efr2fxlfzw.usemoralis.com:2053/server'

ReactDOM.render(
    <React.StrictMode>
        <MoralisProvider serverUrl={Server} appId={AppID}>
            <App />
        </MoralisProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
