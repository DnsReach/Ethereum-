import React from 'react'
import { useMoralis } from 'react-moralis'
import '../css-setup/Welcome.css'

const User = () => {
    const { user, logout } = useMoralis()
    return (
        <>
            <header className="welcome">
                <h2 className="balance">
                    <a href="/nft">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg"
                            width="30px"
                            height="30px"
                            style={{
                                position: 'relative',
                            }}
                            alt="nft"
                        />
                    </a>
                </h2>
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
