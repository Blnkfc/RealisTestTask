import { useTonAddress, useTonWallet } from '@tonconnect/ui-react';
import { Disconnect } from '../Disconnect';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress } from '../../state/wallet/walletSlice';
import { useEffect } from 'react';
import './Wallet.css'

export const Wallet = () => {
    const wallet = useTonWallet();
    const userFriendlyAddress = useTonAddress()
    const walletInfo = useSelector((state) => state.wallet.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAddress(wallet?.account?.address))
        console.log(wallet?.account?.address)
    }, [wallet])

    return (
        wallet && (
            <div className='wallet__wrapper' >
                <span className='wallet__wrapper__address' >Connected wallet address: {userFriendlyAddress}</span><br />
                {wallet.connectItems?.tonProof?.proof && <span>Ton proof: {wallet.connectItems.tonProof.proof}</span>}

                <br />
                <div className='wallet__wrapper__info' >
                    {wallet.name} <img src={wallet.imageUrl} />
                    <Disconnect />
                </div>
                <br />
            </div>
        )
    );
};
