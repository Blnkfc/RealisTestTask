import './App.css'
import { TonConnectUIProvider, useTonWallet } from '@tonconnect/ui-react';
import { Wallet } from './Components/Wallet/Wallet';
import { Header } from './Components/Header/Header';
import { NavBar } from './Components/NavBar/NavBar';
import { Wallet1 } from './Components/Misc/Wallet1';
import { Wallet2 } from './Components/Misc/Wallet2';
import { Wallet3 } from './Components/Misc/Wallet3';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <TonConnectUIProvider manifestUrl='https://raw.githubusercontent.com/Blnkfc/RealisTestTask/refs/heads/main/tonconnect-manifest.json' >
      <Header />
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Wallet />} />
          <Route path='/Wallet1' element={<Wallet1 />} />
          <Route path='/Wallet2' element={<Wallet2 />} />
          <Route path='/Wallet3' element={<Wallet3 />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
      


    </TonConnectUIProvider>
  )
}

export default App
