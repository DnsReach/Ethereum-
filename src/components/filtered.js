import React from 'react'

export const Detail = (props) => {
    const { id, name, image } = props
    return (
        <ul>
            <li style={{ color: 'white' }}>{name}</li>
            <img style={{ width: '50px' }} src={image} />
        </ul>
    )
}
