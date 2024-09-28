import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Crad'

function App() {
  const [count, setCount] = useState(0)
 
let myObj = {
  username:"Arrav",
  age:21
}

let newArr =[1,2,3]
  
return(
    <>
      <h1 className='bg-green-400 text-black p -4 rounded-xl mb-4'>Tailwind Card props</h1>
     <Card username="chai aur code" btntext="clicked me" someObje={newArr} />
     <Card username="hitesh" someObje={newArr}/>
    </>
  )
}

export default App
