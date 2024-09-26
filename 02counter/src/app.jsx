import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  
const [counter,setcounter] =useState  
// let counter = 15;

const addvalue =() => {
  console.log("clicked",counter);
  // counter=counter+1
  
}

  return (
    <>
   <h1>chai aur react</h1>

   <h2>Counter Value:{counter}</h2>

   <button onClick={addvalue}>Add value</button>
   <br/>
   <button>Remove value</button>
    </>
  )
}
