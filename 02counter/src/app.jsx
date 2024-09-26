import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  // hooks to handling multiple references 
let [counter,setcounter] = useState(15)  


// let counter = 15;

const addValue = () => {
  console.log("clicked", setcounter);
  if (setcounter < 20) { // Check if counter is less than 20
    setcounter+1; // Increment the counter
  }
};


const removeValue = () => {
  if (setcounter > 0) { 
    setcounter - 1 ; 
  }


}
  return (
    <>
   <h1>chai aur react</h1>

   <h2>Counter Value:{counter}</h2>

   <button onClick={addValue}>Add value</button>
   <br/>
   <button onClick={removeValue}>Remove value</button>
    </>
  )
}
