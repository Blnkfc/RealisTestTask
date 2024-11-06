import { TonConnectButton } from '@tonconnect/ui-react';


export const Header = () => {
    return (
      <header>
        <span>Your wallet:</span>
        <TonConnectButton />
      </header>
    );
  };