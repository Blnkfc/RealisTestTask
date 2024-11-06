import { TonConnectButton } from '@tonconnect/ui-react';
import './Header.css'

export const Header = () => {
    return (
      <header>
        <span>Your wallet:</span>
        <TonConnectButton />
      </header>
    );
  };