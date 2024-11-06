import './App.css'
import {TonConnectUIProvider, useTonWallet } from '@tonconnect/ui-react';
import { Wallet } from './Components/Wallet';
import { Header } from './Components/Header';
function App() {

  return (
    <TonConnectUIProvider manifestUrl='https://raw.githubusercontent.com/Blnkfc/RealisTestTask/refs/heads/main/manifest.json' >
      <Header />
      <Wallet />

    </TonConnectUIProvider>
  )
}

export default App
