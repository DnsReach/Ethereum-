import React from 'react'
import { useMoralis, useNativeBalance } from 'react-moralis'
import '../css-setup/Welcome.css'

const User = () => {
    const { user, logout } = useMoralis()
    const { data: balance } = useNativeBalance()
    return (
        <>
            <header className="welcome">
                <h2 className="balance">{balance.formatted}</h2>
                <h2 className="welcome-message">
                    WELCOME TO THE METAVERSE --- {user.get('username')}
                </h2>
                <button className="button-logout" onClick={() => logout()}>
                    Logout
                </button>
            </header>
        </>
    )
}

export default User
