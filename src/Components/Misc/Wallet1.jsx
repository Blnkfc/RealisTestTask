import { useSelector } from 'react-redux';

export const Wallet1 = () => {
    const walletInfo = useSelector((state) => state.wallet.value)
    console.log(walletInfo)
    return(
        <div>
            <p style={{color:'green', width: '100%', overflowWrap: 'anywhere'}} > {walletInfo} </p>
        </div>
    )
}