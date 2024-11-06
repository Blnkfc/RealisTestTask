import { useSelector } from 'react-redux';

export const Wallet2 = () => {
    const walletInfo = useSelector((state) => state.wallet.value)
    console.log(walletInfo)
    return(
        <>
        <p style={{color:'yellow', maxWidth: '100%' }} > {walletInfo} </p>
        </>
    )
}