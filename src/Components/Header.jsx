import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';


export const Header = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();
    return (
      <header>
        <span>Your wallet:</span>
        <button onClick={() => tonConnectUI.openModal()} >
            Connect Wallet
        </button>
      </header>
    );
  };