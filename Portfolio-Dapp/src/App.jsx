import { useState } from 'react'
import Wallet from './components/Wallet/Wallet.jsx'
import './App.css'

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null
  });
  const saveState = (state) => {
    console.log(state);
    setState(state);
  }
  return (
    <>
      <Wallet saveState = {saveState}></Wallet>
    </>
  )
}

export default App
