import { useTonWallet } from '@tonconnect/ui-react';
import { Disconnect } from './Disconnect';

export const Wallet = () => {
  const wallet = useTonWallet();

  return (
    wallet && (
      <div>
        <span>Connected wallet address: {wallet.account.address}</span><br />
        <span>Device: {wallet.device.appName}</span><br />
        <span>Connected via: {wallet.provider}</span>
        {wallet.connectItems?.tonProof?.proof && <span>Ton proof: {wallet.connectItems.tonProof.proof}</span>}

        <div>Connected wallet info:</div>
        <div>
          {wallet.name} <img src={wallet.imageUrl} />
          <Disconnect />
        </div>
      </div>
    )
  );
};
