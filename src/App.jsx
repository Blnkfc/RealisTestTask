import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {


  return (
    <TonConnectUIProvider manifestUrl='https://raw.githubusercontent.com/Blnkfc/RealisTestTask/refs/heads/main/manifest.json' >

      a

    </TonConnectUIProvider>
  )
}

export default App
