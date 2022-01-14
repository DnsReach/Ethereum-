import React from 'react'
import { useMoralis, useNativeBalance } from 'react-moralis'
import '../css-setup/Welcome.css'

const User = () => {
    const { user } = useMoralis()
    const { data: balance } = useNativeBalance()

    return (
        <>
            <div className="welcome">
                <h2>
                    WELCOME TO THE METAVERSE --- {user.get('username')}{' '}
                    {balance.formatted}
                </h2>
            </div>
        </>
    )
}

export default User
