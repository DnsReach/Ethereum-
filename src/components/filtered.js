import React from 'react'
import { createGlobalStyle } from 'styled-components'
import '../css-setup/crypto.css'

const Create = createGlobalStyle`
    body{ 
        background-image: linear-gradient(45deg, rgb(149, 10, 155) 0%, rgb(149, 10, 155) 9%,rgb(120, 16, 136) 9%, rgb(120, 16, 136) 13%,rgb(178, 3, 174) 13%, rgb(178, 3, 174) 32%,rgb(91, 23, 117) 32%, rgb(91, 23, 117) 42%,rgb(32, 36, 79) 42%, rgb(32, 36, 79) 46%,rgb(61, 30, 98) 46%, rgb(61, 30, 98) 70%,rgb(3, 43, 60) 70%, rgb(3, 43, 60) 100%);
        }
        `

export const Detail = ({
    name,
    image,
    high_24h,
    price_change_percentage_24h,
}) => {
    const Count = () => {
        const mat = Math.ceil(price_change_percentage_24h)
        if (mat >= 0) {
            return <p className="time-color">+{mat}</p>
        } else {
            return <p className="time-negative">{mat}</p>
        }
    }

    return (
        <>
            <Create />
            <section className="section-crypto">
                <div>
                    <img
                        style={{ width: '40px' }}
                        src={image}
                        alt="imagecripto"
                    />
                </div>
                <p>{name}</p>
                <p>{high_24h}</p>
                <Count />
            </section>
        </>
    )
}
