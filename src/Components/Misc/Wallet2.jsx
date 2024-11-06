import { useSelector } from 'react-redux';

export const Wallet2 = () => {
    const walletInfo = useSelector((state) => state.wallet.value)
    console.log(walletInfo)
    return(
        <div>
            <p style={{color:'yellow', width: '100%', overflowWrap: 'anywhere'}} > {walletInfo} </p>
        </div>
    )
}