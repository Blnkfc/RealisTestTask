import { useSelector } from 'react-redux';

export const Wallet1 = () => {
    const walletInfo = useSelector((state) => state.wallet.value)
    console.log(walletInfo)
    return(
        <>
        <p style={{color:'green', maxWidth: '100%' }} > {walletInfo} </p>
        </>
    )
}