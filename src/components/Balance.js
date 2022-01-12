import { useNativeBalance } from 'react-moralis'

const Balance = () => {
    const { data: balance } = useNativeBalance()
    return <p>{balance.formatted}</p>
}

export default Balance
