import { useState } from "react"
import ABI from './ABI.json'
import Web3 from 'web3'
import './Wallet.css'

const Wallet = ({saveState}) => {
    const [connected, setConnected] = useState(true)
    const init = async() => {
        try{
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({method: 'eth_requestAccounts'});
            const contract = new web3.eth.Contract(
                ABI,
                "0xcb6ab4f5030006e018ca54d682639c5061a0f400"
            )
            setConnected(false);
            saveState({web3: web3, contract: contract});
            console.log(contract);
        } catch(err){
            console.log("Please install Metamask. \n ERROR_CODE: ", err);
        }
    }

    return <>
        <div className = "header">
            <button className = "connectBTN" onClick={init} disabled={!connected}>{connected? "Connect METAMASK": "Connected"}</button>
        </div>
    </>
}
export default Wallet;