import React from 'react'
import useFetch from './useFetch'
import { Detail } from './filtered'
import '../css-setup/Sidebar.css'

const Sider = () => {
    const [state, filtered, setSearch] = useFetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
    return (
        <div>
            <a href="/">Link</a>
            <input onChange={(ev) => setSearch(ev.target.value)} />
            {filtered.map((thingsfilter, idx) => {
                return <Detail key={idx} {...thingsfilter} />
            })}
        </div>
    )
}

export default Sider
