import React from 'react'
import { useMoralis, useNativeBalance } from 'react-moralis'
import '../css-setup/Welcome.css'

const User = () => {
    const { user, logout } = useMoralis()
    const { data: balance } = useNativeBalance()
    return (
        <>
            <header className="welcome">
                <p className="button-config">{balance.formatted}</p>
                <h2
                    style={{
                        paddingLeft: '5em',
                    }}
                >
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
