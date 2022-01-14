import React from 'react'
import { useMoralis } from 'react-moralis'
import './css-sidebar/sidebar.css'

const Sidebar = () => {
    const { logout } = useMoralis()
    return (
        <>
            <div className="container">
                <p>wewe</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <p>weweeweeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                <button onClick={() => logout()}>Click</button>
            </div>
        </>
    )
}

export default Sidebar
