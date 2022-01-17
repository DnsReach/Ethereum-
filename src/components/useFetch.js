import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [state, setState] = useState([])
    const [search, setSearch] = useState('')
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        axios.get(url).then((response) => {
            setState(response.data)
        })
    }, [])
    useEffect(() => {
        setFiltered(
            state.filter((statefiltered) =>
                statefiltered.name.toLowerCase().includes(search.toLowerCase())
            )
        )
    }, [search, state])

    return [state, filtered, setSearch]
}

export default useFetch
