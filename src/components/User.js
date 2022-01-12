import React, { useState } from 'react'
import { useMoralis, useNativeBalance } from 'react-moralis'

const User = () => {
    const { user, setUserData } = useMoralis()
    const { data: balance } = useNativeBalance()

    return (
        <>
            <div className="welcome">
                <h2>
                    WELCOME TO THE METAVERSE --- {user.get('username')}{' '}
                    {balance.formatted}
                </h2>
                <p>Adress: {user.get('ethAddress')}</p>
            </div>
        </>
    )
}

export default User
