import { useSelector } from 'react-redux';

export const Wallet3 = () => {
    const walletInfo = useSelector((state) => state.wallet.value)
    console.log(walletInfo)
    return(
        <div>
            <p style={{color:'red', width: '100%', overflowWrap: 'anywhere'}} > {walletInfo} </p>
        </div>
    )
}