import { useSelector } from 'react-redux';

export const Wallet3 = () => {
    const walletInfo = useSelector((state) => state.wallet.value)
    console.log(walletInfo)
    return(
        <>
        <p style={{color:'red', maxWidth: '100%' }} > {walletInfo} </p>
        </>
    )
}