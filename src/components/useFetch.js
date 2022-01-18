import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [state, setState] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(url).then((response) => {
            setState(response.data)
        })
    }, [url])

    const filteredCoins = state.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return [setSearch, filteredCoins]
}

export default useFetch
