import styled from 'styled-components'

const Section = styled.main`
    width: 100%;
    height: 100%;
`
const Iframe = styled.iframe`
    width: 100%;
    height: 600px;
`

const Nft = () => {
    return (
        <>
            <div>
                <Section>
                    <Iframe src="https://opensea.io/assets/boredapeyachtclub?embed=true&ref=0x9361c1bbe1c7e3197758414b49d19bce1241668a"></Iframe>
                </Section>
            </div>
        </>
    )
}

export default Nft
