import {useState} from "react";
import Hero from "./components/Hero/Hero.jsx";
import Wallet from "./components/Wallet/Wallet.jsx";
import Handles from "./components/Handles/Handles.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Contact from "./components/Contact/Contact.jsx";
import "./index.css";
function App() {
  const [state,setState]=useState({
    web3:null,
    contract:null
  })
  const saveState=(state)=>{
    console.log(state);
    setState(state);
  }

  return (
    <>
      <Wallet saveState={saveState}></Wallet>
      <Hero state={state}/>
      <Handles />
      <Projects state={state} />
      <Skills />
      <Experience state={state} />
      <Contact state={state} />
      <Handles />
    </>
  );
}

export default App;

