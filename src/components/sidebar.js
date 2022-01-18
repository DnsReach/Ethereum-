import React, { useState } from 'react'
import useFetch from './useFetch'
import { Detail } from './filtered'
import Image from '../logo/ethereum.ico'
import '../css-setup/Sidebar.css'

const Sider = () => {
    const [number, setNumber] = useState(1)
    const [setSearch, filteredCoins] = useFetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${number}&sparkline=false`
    )

    return (
        <>
            <header id="header-crypto">
                <a href="/">
                    <img
                        src={Image}
                        style={{
                            height: '40px',
                        }}
                        alt="crypto"
                    />
                </a>
                <input
                    id="input-crypto"
                    placeholder=" SEARCH CRYPTO "
                    onChange={(ev) => setSearch(ev.target.value)}
                />
                <div>
                    <button
                        className="button-next"
                        onClick={() => setNumber(number + 1)}
                    >
                        NEXT
                    </button>
                    <button
                        onClick={() => setNumber(number - 1)}
                        className="button-prev"
                    >
                        PREV
                    </button>
                </div>
            </header>

            {filteredCoins.map((thingsfilter) => {
                return (
                    <>
                        <article
                            style={{
                                marginTop: '60px',
                                textAlign: 'center',
                            }}
                        >
                            <Detail key={thingsfilter.id} {...thingsfilter} />
                        </article>
                    </>
                )
            })}
        </>
    )
}

export default Sider
